
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, FlatList } from 'react-native';

import GoalItem from '../components/goal';
import { styles } from '../styles/styling';

// Komponent der viser søgeskærmen, hvor brugeren kan søge efter mål
export default function SearchScreen({ navigation, goals }) {
  const [searchText, setSearchText] = useState('');

  const filteredGoals = goals.filter((goal) => {
    const search = searchText.trim().toLowerCase();

    return (
      goal.title.toLowerCase().includes(search) ||
      goal.category.toLowerCase().includes(search) ||
      (goal.extraInfo || '').toLowerCase().includes(search)
    );
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find et mål</Text>

      <Text style={styles.subtitle}>
        Søg efter et mål, en kategori eller en note.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Søg efter mål..."
        value={searchText}
        onChangeText={setSearchText}
        autoCapitalize="none"
        returnKeyType="search"
      />

      <Pressable
        style={styles.secondaryButton}
        onPress={() => setSearchText('')}
      >
        <Text style={styles.secondaryButtonText}>
          Ryd søgning
        </Text>
      </Pressable>

      <Text style={styles.resultCount}>
        {filteredGoals.length} {filteredGoals.length === 1 ? 'mål fundet' : 'mål fundet'}
      </Text>

      <FlatList
        data={filteredGoals}
        keyExtractor={(item) => item.id.toString()}
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
            Ingen mål matcher din søgning.
          </Text>
        }
      />
    </View>
  );
}
