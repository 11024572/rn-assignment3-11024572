import React from 'react';
import { ScrollView, View, StyleSheet, FlatList } from 'react-native';
import Header from './Header';
import SearchBar from './SearchBar';
import CategoryCard from './CategoryCard';
import TaskCard from './TaskCard';

const categories = [
  { id: '1', title: 'Exercise', tasks: 12,},
  { id: '2', title: 'Study', tasks: 12,},
  { id: '3', title: 'Code', tasks: 10,},
  { id: '4', title: 'Cook', tasks: 8,},
  { id: '5', title: 'Read', tasks: 15,},
  { id: '6', title: 'Travel', tasks: 5,  },
  { id: '7', title: 'Meditate', tasks: 7,  },
  { id: '8', title: 'Play', tasks: 6,  },
];

const tasks = [
  { id: '1', task: 'Mobile App Development' },
  { id: '2', task: 'Web Development' },
  { id: '3', task: 'Push Ups' },
  { id: '4', task: 'Reading a Book' },
  { id: '5', task: 'Learning React Native' },
  { id: '6', task: 'Cooking Dinner' },
  { id: '7', task: 'Going for a Run' },
  { id: '8', task: 'Writing Blog Post' },
  { id: '9', task: 'Travel Planning' },
  { id: '10', task: 'Yoga' },
  { id: '11', task: 'Meditation' },
  { id: '12', task: 'Project Meeting' },
  { id: '13', task: 'Client Call' },
  { id: '14', task: 'Shopping' },
  { id: '15', task: 'Movie Night' },
];

const MainScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <SearchBar />
      <View style={styles.categoriesContainer}>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CategoryCard
              title={item.title}
              tasks={item.tasks}
              imageUri={item.imageUri}
            />
          )}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.ongoingTasksContainer}>
        <Text style={styles.sectionTitle}>Ongoing Task</Text>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <TaskCard task={item.task} />}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  categoriesContainer: {
    padding: 8,
  },
  ongoingTasksContainer: {
    padding: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});

export default MainScreen;
