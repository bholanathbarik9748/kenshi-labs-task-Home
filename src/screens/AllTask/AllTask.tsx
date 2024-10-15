import React, {useCallback, useState} from 'react';
import {View, FlatList, Text, TextInput, TouchableOpacity} from 'react-native';
import {useTaskManager} from '../../hooks/useTaskManager';
import {Task} from '../../types/TaskInterface';
import {styles} from './styles/styles';
import {useFocusEffect, useNavigation} from '@react-navigation/native'; // For navigation
import TaskItem from '../../components/TaskItem/TaskItem';

const AllTask = () => {
  const {
    tasks,
    deleteTask,
    toggleTaskComplete,
    loadTasks,
    searchTasks,
    sortTasks,
    searchQuery,
    sortOrder,
  } = useTaskManager();
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState<string>(searchQuery);

  useFocusEffect(
    useCallback(() => {
      loadTasks(); // This will reload tasks from the storage or state
    }, []),
  );

  // Handle search input
  const handleSearch = (text: string) => {
    setSearchText(text);
    searchTasks(text); // Filter tasks based on search query
  };

  // Handle sort button press
  const handleSort = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    sortTasks(newOrder); // Sort tasks by title in ascending or descending order
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>All Tasks</Text>

      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search tasks by title"
        value={searchText}
        onChangeText={handleSearch}
      />
      <View style={styles.buttonRow}>
        {/* Sort Button */}
        <TouchableOpacity style={styles.sortButton} onPress={handleSort}>
          <Text style={styles.sortButtonText}>
            Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
          </Text>
        </TouchableOpacity>

        {/* Create Task Button */}
        <TouchableOpacity
          style={styles.createTaskButton}
          onPress={() => navigation.navigate('TaskForm', {TaskId: null})}>
          <Text style={styles.createTaskButtonText}>+ Create Task</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}: {item: Task}) => (
          <TaskItem
            task={item}
            toggleTaskComplete={toggleTaskComplete}
            deleteTask={deleteTask}
          />
        )}
        contentContainerStyle={styles.taskList}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>No tasks available</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default AllTask;
