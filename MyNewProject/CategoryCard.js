import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CategoryCard = ({ title, tasks, imageUri }) => {
  return (
    <View style={styles.card}>
      <Image source={imageUri} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.tasks}>{tasks} Tasks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#fff',
    margin: 8,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
    textAlign: 'center',
  },
  tasks: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});

export default CategoryCard;
