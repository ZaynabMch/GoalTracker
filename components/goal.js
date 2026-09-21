import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { styles } from '../styles/styling';

// Komponent der viser et mål i listen på forsiden
export default function GoalItem({ goal, onPress }) {
  return (
    <View style={styles.goalCard}>

      <View style={styles.goalCardContent}>

        <Text style={styles.goalTitle}>
          {goal.title}
        </Text>

        {goal.frequency ? (
          <Text style={styles.goalInfo}>
            {goal.frequency}
          </Text>
        ) : null}

        {goal.time ? (
          <Text style={styles.goalInfo}>
            Kl. {goal.time}
          </Text>
        ) : null}

        <Text
          style={[
            styles.goalStatus,
            goal.completed && styles.goalStatusCompleted,
          ]}
        >
          {goal.completed ? '✓ Færdig' : '○ Ikke færdig'}
        </Text>

      </View>

      <Pressable
        style={styles.viewButton}
        onPress={onPress}
      >
        <Text style={styles.viewButtonText}>
          Vis →
        </Text>
      </Pressable>

    </View>
  );
}