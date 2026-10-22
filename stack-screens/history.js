
import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';

import GoalItem from '../components/goal';
import { styles } from '../styles/styling';

// Komponent der viser historikken for målene
export default function HistoryScreen({
    navigation,
    goals,
    resetAllGoals,
    markAllGoalsCompleted,
    completedDates,

  }) {
   
    const dateSet = new Set(completedDates);
const today = new Date();

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

let streak = 0;
const checkDate = new Date(today);
checkDate.setHours(12, 0, 0, 0);

// En streak kan fortsætte fra i går, hvis i dag ikke er gennemført endnu.
if (!dateSet.has(dateKey(checkDate))) {
  checkDate.setDate(checkDate.getDate() - 1);
}

while (dateSet.has(dateKey(checkDate))) {
  streak++;
  checkDate.setDate(checkDate.getDate() - 1);
}

  const completedGoals = goals.filter((goal) => goal.completed);
  const remainingGoals = goals.filter((goal) => !goal.completed);

  const completionRate =
    goals.length === 0
      ? 0
      : Math.round((completedGoals.length / goals.length) * 100);

  let reflectionText;

  if (goals.length === 0) {
    reflectionText =
      'Start med et lille mål. Det er første skridt mod en ny vane.';
  } else if (completionRate === 100) {
    reflectionText =
      'Flot arbejde! Du har gennemført alle dine mål. Fortsæt det gode arbejde!';
  } else if (completionRate >= 50) {
    reflectionText =
      'Du er godt på vej! Fokuser på de mål, der stadig mangler.';
  } else {
    reflectionText =
      'Alle vaner tager tid at opbygge. Vælg ét mål, og tag det skridt for skridt.';
  }

  // Render function for each goal item in the list
  function renderGoal({ item }) {
    return (
      <GoalItem
        goal={item}
        onPress={() =>
          navigation.navigate('GoalDetails', {
            goalId: item.id,
          })
        }
      />
    );
  }

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.historyContent}
      data={[]}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={
        <View>
          <Text style={styles.title}>Din udvikling</Text>

          <Text style={styles.subtitle}>
            Se, hvor langt du er kommet, og hvad du kan arbejde videre med.
          </Text>

          <View style={styles.historySummary}>
            <Text style={styles.historyEyebrow}>
              DIN NUVÆRENDE STATUS
            </Text>

            <Text style={styles.historyPercentage}>
              {completionRate}%
            </Text>

            <Text style={styles.historySummaryText}>
              af dine mål er markeret som gennemført
            </Text>

            <View style={styles.historyTrack}>
              <View
                style={[
                  styles.historyFill,
                  { width: `${completionRate}%` },
                ]}
              />
            </View>

            <View style={styles.historyStats}>
              <View style={styles.historyStat}>
                <Text style={styles.historyStatNumber}>
                  {completedGoals.length}
                </Text>
                <Text style={styles.historyStatLabel}>
                  Gennemført
                </Text>
              </View>

              <View style={styles.historyStat}>
                <Text style={styles.historyStatNumber}>
                  {remainingGoals.length}
                </Text>
                <Text style={styles.historyStatLabel}>
                  Mangler
                </Text>
              </View>

              <View style={styles.historyStat}>
                <Text style={styles.historyStatNumber}>
                  {goals.length}
                </Text>
                <Text style={styles.historyStatLabel}>
                  Mål i alt
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.reflectionCard}>
  <Text style={styles.reflectionHeading}>
    🔥 Din streak
  </Text>
  <Text style={styles.reflectionText}>
    {streak === 1
      ? 'Du har gennemført alle dine mål 1 dag i træk.'
      : `Du har gennemført alle dine mål ${streak} dage i træk.`}
  </Text>
</View>

          <Text style={styles.historySectionTitle}>
            ✓ Gennemført
          </Text>
          <Text style={styles.historySectionSubtitle}>
            Mål, du har markeret som færdige
          </Text>

          {completedGoals.length === 0 ? (
            <Text style={styles.emptyText}>
              Ingen gennemførte mål endnu. Det første tæller også!
            </Text>
          ) : (
            <FlatList
              data={completedGoals}
              renderItem={renderGoal}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
            />
          )}

          <Text style={styles.historySectionTitle}>
            ○ Mangler stadig
          </Text>
          <Text style={styles.historySectionSubtitle}>
            Mål, du stadig kan arbejde videre med
          </Text>

          {remainingGoals.length === 0 ? (
            <Text style={styles.emptyText}>
              Du er færdig med alle dine mål!
            </Text>
          ) : (
            <FlatList
              data={remainingGoals}
              renderItem={renderGoal}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
            />
          )}

<Pressable
  style={styles.completeButton}
  onPress={markAllGoalsCompleted}
  disabled={
    goals.length === 0 ||
    completedGoals.length === goals.length
  }
>
  <Text style={styles.completeButtonText}>
    Markér alle som gennemført
  </Text>
</Pressable>

<Pressable
  style={[
    styles.secondaryButton,
    completedGoals.length === 0 &&
      styles.historyDisabledButton,
  ]}
  onPress={resetAllGoals}
  disabled={completedGoals.length === 0}
>
  <Text style={styles.secondaryButtonText}>
    Start forfra i dag
  </Text>
</Pressable>
        </View>
      }
      renderItem={() => null}
    />
  );
}
