import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { registerRootComponent } from 'expo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './stack-screens/home';
import AddGoalScreen from './stack-screens/addGoal';
import GoalDetailsScreen from './stack-screens/goalDetails';
import SearchScreen from './stack-screens/search';
import ProgressScreen from './stack-screens/progress';
import HistoryScreen from './stack-screens/history';

import { styles } from './styles/styling';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const STORAGE_KEY = '@goal_tracker_goals';
const DATES_STORAGE_KEY = '@goal_tracker_completed_dates';

// Viser datoen
function getToday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

// navigation
function MainTabs({
  goals,
  toggleGoal,
  resetAllGoals,
  markAllGoalsCompleted,
  completedDates,
}) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#F8F7FC' },
        headerShadowVisible: false,
        tabBarStyle: { backgroundColor: '#FFFFFF' },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#777777',
      }}
    >
      <Tab.Screen
        name="Hjem"
        options={{ title: 'Goal Tracker' }}
      >
        {(props) => (
          <HomeScreen
            {...props}
            goals={goals}
            toggleGoal={toggleGoal}
          />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Søg"
        options={{ title: 'Søg efter mål' }}
      >
        {(props) => (
          <SearchScreen {...props} goals={goals} />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Fremskridt"
        options={{ title: 'Dit fremskridt' }}
      >
        {(props) => (
          <ProgressScreen {...props} goals={goals} />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Historik"
        options={{ title: 'Dine mål' }}
      >
        {(props) => (
          <HistoryScreen
            {...props}
            goals={goals}
            toggleGoal={toggleGoal}
            resetAllGoals={resetAllGoals}
            markAllGoalsCompleted={markAllGoalsCompleted}
            completedDates={completedDates}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

function App() {
  const [goals, setGoals] = useState([]);
  const [completedDates, setCompletedDates] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Hent både mål og gennemførelsesdatoer, når appen åbner.
  useEffect(() => {
    async function loadData() {
      try {
        const savedGoals = await AsyncStorage.getItem(STORAGE_KEY);
        const savedDates = await AsyncStorage.getItem(
          DATES_STORAGE_KEY
        );

        if (savedGoals !== null) {
          setGoals(JSON.parse(savedGoals));
        } else {
          // Eksempeldata vises første gang, appen bruges.
          setGoals([
            {
              id: '2',
              title: 'Tag vitaminer',
              category: 'Sundhed',
              frequency: 'Hver dag',
              time: '09:00',
              extraInfo: '',
              completed: true,
            },
            {
              id: '3',
              title: 'Øjendråber',
              category: 'Personlig pleje',
              frequency: 'Hver dag',
              time: '12:00',
              extraInfo: '',
              completed: false,
            },
            {
              id: '4',
              title: 'Læs 20 sider',
              category: 'Studie',
              frequency: 'Hver dag',
              time: '19:00',
              extraInfo: '',
              completed: false,
            },
          ]);
        }

        if (savedDates !== null) {
          setCompletedDates(JSON.parse(savedDates));
        }
      } catch (error) {
        console.error('Kunne ikke hente gemte data:', error);
      } finally {
        setIsLoaded(true);
      }
    }

    loadData();
  }, []);

  // Gem målene, når de ændrer sig.
  useEffect(() => {
    if (!isLoaded) return;

    AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(goals)
    ).catch((error) => {
      console.error('Kunne ikke gemme målene:', error);
    });
  }, [goals, isLoaded]);

  // Gem datoerne, der registreres som gennemførte.
  useEffect(() => {
    if (!isLoaded) return;

    AsyncStorage.setItem(
      DATES_STORAGE_KEY,
      JSON.stringify(completedDates)
    ).catch((error) => {
      console.error(
        'Kunne ikke gemme gennemførelsesdatoer:',
        error
      );
    });
  }, [completedDates, isLoaded]);

  // Registrér en gennemførelsesdato uden at gemme samme dato flere gange.
  function recordCompletedDate() {
    const today = getToday();

    setCompletedDates((dates) =>
      dates.includes(today) ? dates : [...dates, today]
    );
  }

  // Tilføj et nyt mål.
  function addGoal(title, category, frequency, time, extraInfo) {
    const newGoal = {
      id: Date.now().toString(),
      title,
      category,
      frequency,
      time,
      extraInfo,
      completed: false,
    };

    setGoals((currentGoals) => [...currentGoals, newGoal]);
  }

  // Markér et enkelt mål som gennemført eller ikke gennemført.
  function toggleGoal(goalId) {
    setGoals((currentGoals) => {
      const updatedGoals = currentGoals.map((goal) =>
        goal.id === goalId
          ? { ...goal, completed: !goal.completed }
          : goal
      );

      // Registrér dagen, når alle mål er gennemført.
      if (
        updatedGoals.length > 0 &&
        updatedGoals.every((goal) => goal.completed)
      ) {
        recordCompletedDate();
      }

      return updatedGoals;
    });
  }

  // Markér alle mål som gennemført.
  function markAllGoalsCompleted() {
    if (goals.length === 0) return;

    setGoals((currentGoals) =>
      currentGoals.map((goal) => ({
        ...goal,
        completed: true,
      }))
    );

    recordCompletedDate();
  }

  // Nulstil målenes status uden at slette dem.
  function resetAllGoals() {
    setGoals((currentGoals) =>
      currentGoals.map((goal) => ({
        ...goal,
        completed: false,
      }))
    );
  }

  if (!isLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          options={{ headerShown: false }}
        >
          {(props) => (
            <MainTabs
              {...props}
              goals={goals}
              toggleGoal={toggleGoal}
              resetAllGoals={resetAllGoals}
              markAllGoalsCompleted={markAllGoalsCompleted}
              completedDates={completedDates}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="AddGoal"
          options={{ title: 'Tilføj nyt mål' }}
        >
          {(props) => (
            <AddGoalScreen
              {...props}
              addGoal={addGoal}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="GoalDetails"
          options={{ title: 'Måldetaljer' }}
        >
          {(props) => (
            <GoalDetailsScreen
              {...props}
              goals={goals}
              toggleGoal={toggleGoal}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);