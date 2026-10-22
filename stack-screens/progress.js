
import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../styles/styling';

// Komponent der viser fremskridtet for alle mål
export default function ProgressScreen({ goals }) {
  const totalGoals = goals.length;
  const completedGoals = goals.filter((goal) => goal.completed).length;
  const remainingGoals = totalGoals - completedGoals;

  const completionRate =
    totalGoals === 0
      ? 0
      : Math.round((completedGoals / totalGoals) * 100);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dit fremskridt</Text>

      <Text style={styles.subtitle}>
        Få et overblik over, hvordan det går med dine mål.
      </Text>

      <View style={styles.progressCard}>
        <Text style={styles.progressNumber}>
          {completionRate}%
        </Text>

        <Text style={styles.progressLabel}>
          af dine mål er gennemført
        </Text>

        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              { width: `${completionRate}%` },
            ]}
          />
        </View>
      </View>

      <View style={styles.statCard}>
        <Text style={styles.statNumber}>{totalGoals}</Text>
        <Text style={styles.statLabel}>Mål i alt</Text>
      </View>

      <View style={styles.statCard}>
        <Text style={styles.statNumber}>{completedGoals}</Text>
        <Text style={styles.statLabel}>Gennemførte mål</Text>
      </View>

      <View style={styles.statCard}>
        <Text style={styles.statNumber}>{remainingGoals}</Text>
        <Text style={styles.statLabel}>Mål, der mangler</Text>
      </View>

      {totalGoals === 0 ? (
        <Text style={styles.emptyText}>
          Tilføj dit første mål for at følge dit fremskridt.
        </Text>
      ) : null}
    </View>
  );
}
