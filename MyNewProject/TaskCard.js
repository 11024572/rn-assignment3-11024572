import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskCard = ({ task }) => {
  return (
    <View style={styles.taskCard}>
      <Text style={styles.taskText}>{task}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskCard: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  taskText: {
    fontSize: 16,
  },
});

export default TaskCard;
