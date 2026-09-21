import React, { useState } from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Importer skærmene 
import HomeScreen from './stack-screens/home';
import AddGoalScreen from './stack-screens/addGoal';
import GoalDetailsScreen from './stack-screens/goalDetails';

// Opret stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  const [goals, setGoals] = useState([
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

  function addGoal(title, category, frequency, time, extraInfo) {
    const newGoal = {
      id: Date.now().toString(),
      title: title,
      category: category,
      frequency: frequency,
      time: time,
      extraInfo: extraInfo,
      completed: false,
    };

    setGoals([...goals, newGoal]);
  }

  function toggleGoal(goalId) {
    setGoals(
      goals.map((goal) =>
        goal.id === goalId
          ? {
              ...goal,
              completed: !goal.completed,
            }
          : goal
      )
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          options={{
            title: 'Goal Tracker',
          }}
        >
          {(props) => (
            <HomeScreen
              {...props}
              goals={goals}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="AddGoal"
          options={{
            title: 'Tilføj nyt mål',
          }}
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
          options={{
            title: 'Måldetaljer',
          }}
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