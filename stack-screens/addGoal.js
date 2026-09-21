import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import { styles } from '../styles/styling';

// funktionen der tilføjer et mål til listen i App.js
export default function AddGoalScreen({ navigation, addGoal }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [frequency, setFrequency] = useState('');
  const [time, setTime] = useState('');
  const [extraInfo, setExtraInfo] = useState('');

  const categories = [
    'Sundhed',
    'Personlig pleje',
    'Træning',
    'Studie',
    'Andet',
  ];

  function handleAddGoal() {
    if (title.trim() === '' || category === '') {
      return;
    }

    // Her sender jeg alle oplysningerne videre til App.js.
    addGoal(
      title.trim(),
      category,
      frequency.trim(),
      time.trim(),
      extraInfo.trim()
    );

    setTitle('');
    setCategory('');
    setFrequency('');
    setTime('');
    setExtraInfo('');

    navigation.goBack();
  }

  const formIsValid = title.trim() !== '' && category !== '';

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Tilføj nyt mål
      </Text>

      <Text style={styles.label}>
        Mål *
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Fx Drik vand"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>
        Kategori *
      </Text>

      <View style={styles.categoryContainer}>
        {categories.map((item) => {
          const isSelected = category === item;

          return (
            <Pressable
              key={item}
              style={[
                styles.categoryChip,
                isSelected && styles.categoryChipSelected,
              ]}
              onPress={() => setCategory(item)}
            >
              <Text
                style={[
                  styles.categoryText,
                  isSelected && styles.categoryTextSelected,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Text style={styles.label}>
        Hyppighed
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Fx hver dag"
        value={frequency}
        onChangeText={setFrequency}
      />

      <Text style={styles.label}>
        Tidspunkt
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Fx 08:00 (valgfrit)"
        value={time}
        onChangeText={setTime}
      />

      <Text style={styles.label}>
        Ekstra info
      </Text>

      <TextInput
        style={[styles.input, styles.extraInfoInput]}
        placeholder="Fx noter eller mere information (valgfrit)"
        value={extraInfo}
        onChangeText={setExtraInfo}
        multiline
        textAlignVertical="top"
      />

      <Pressable
        style={[
          styles.saveGoalButton,
          !formIsValid && styles.saveGoalButtonDisabled,
        ]}
        onPress={handleAddGoal}
        disabled={!formIsValid}
      >
        <Text style={styles.saveGoalButtonText}>
          Gem mål
        </Text>
      </Pressable>

    </View>
  );
}