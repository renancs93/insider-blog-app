import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CategoryPosts() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post de uma Categoria</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 24,
  },
});
