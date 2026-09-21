import React from 'react';
import { View, Text, SectionList, Pressable } from 'react-native';

import GoalItem from '../components/goal';
import { styles } from '../styles/styling';


// Komponent der viser forsiden med listen af mål 
export default function homeScreen({ navigation, goals }) {
  const categories = [
    'Sundhed',
    'Personlig pleje',
    'Træning',
    'Studie',
    'Andet',
  ];

  // Her laver jeg målene om til sektioner efter deres kategori.
  const sections = categories
    .map((category) => ({
      title: category,
      data: goals.filter((goal) => goal.category === category),
    }))
    .filter((section) => section.data.length > 0);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Målene for i dag
      </Text>

      <Text style={styles.subtitle}>
        Track det der er vigtigt for dig, og få en bedre hverdag.
      </Text>

      <Pressable
        style={styles.addGoalButton}
        onPress={() => navigation.navigate('AddGoal')}
      >
        <Text style={styles.addGoalButtonText}>
          + Tilføj nyt mål
        </Text>
      </Pressable>

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id.toString()}

        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {section.title}
            </Text>

            <View style={styles.sectionLine} />
          </View>
        )}

        renderItem={({ item }) => (
          <GoalItem
            goal={item}
            onPress={() =>
              navigation.navigate('GoalDetails', {
                goalId: item.id,
              })
            }
          />
        )}

        contentContainerStyle={styles.list}

        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Du har ingen mål endnu.
          </Text>
        }
      />

    </View>
  );
}