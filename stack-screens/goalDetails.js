import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { styles } from '../styles/styling';

// Komponent der viser detaljerne for et mål
export default function GoalDetailsScreen({
  route,
  navigation,
  goals,
  toggleGoal,
}) {
  const { goalId } = route.params;

  const goal = goals.find((item) => item.id === goalId);

  if (!goal) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Målet blev ikke fundet
        </Text>
      </View>
    );
  }

  function handleToggleGoal() {
    toggleGoal(goal.id);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>

      <View style={styles.detailsCard}>

        <Text style={styles.detailsTitle}>
          {goal.title}
        </Text>

        <Text style={styles.detailsCategory}>
          {goal.category}
        </Text>

        <View
          style={[
            styles.detailsStatus,
            goal.completed && styles.detailsStatusCompleted,
          ]}
        >
          <Text style={styles.detailsStatusText}>
            {goal.completed ? '✓ Færdig' : '○ Ikke færdig'}
          </Text>
        </View>

      </View>

      <View style={styles.infoCard}>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>
            Hyppighed
          </Text>

          <Text style={styles.infoValue}>
            {goal.frequency || 'Ikke angivet'}
          </Text>
        </View>

        <View style={styles.infoDivider} />

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>
            Tidspunkt
          </Text>

          <Text style={styles.infoValue}>
            {goal.time || 'Ikke angivet'}
          </Text>
        </View>

        {goal.extraInfo ? (
          <>
            <View style={styles.infoDivider} />

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>
                Ekstra info
              </Text>

              <Text style={styles.extraInfoText}>
                {goal.extraInfo}
              </Text>
            </View>
          </>
        ) : null}

      </View>

      <Pressable
        style={styles.completeButton}
        onPress={handleToggleGoal}
      >
        <Text style={styles.completeButtonText}>
          {goal.completed
            ? 'Markér som ikke færdig'
            : 'Markér som færdig'}
        </Text>
      </Pressable>

    </View>
  );
}