import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { Task } from '../types/TaskInterface';

// Custom hook for task management
export const useTaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // AsyncStorage key
  const STORAGE_KEY = '@tasks';

  // Load tasks from AsyncStorage
  const loadTasks = async () => {
    try {
      const tasksData = await AsyncStorage.getItem(STORAGE_KEY);
      if (tasksData) {
        const parsedTasks = JSON.parse(tasksData);
        setTasks(parsedTasks);
        setFilteredTasks(parsedTasks); // Set both tasks and filteredTasks
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to load tasks.');
    }
  };

  // Save tasks to AsyncStorage
  const saveTasks = async (newTasks: Task[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newTasks));
      setTasks(newTasks);
      filterAndSortTasks(newTasks); // Apply filtering and sorting on save
    } catch (error) {
      Alert.alert('Error', 'Failed to save tasks.');
    }
  };

  // Add a new task
  const addTask = (task: Task) => {
    const newTasks = [...tasks, task];
    saveTasks(newTasks);
  };

  // Edit an existing task
  const editTask = (updatedTask: Task) => {
    const updatedTasks = tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task,
    );
    saveTasks(updatedTasks);
  };

  // Delete a task
  const deleteTask = (taskId: string) => {
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    saveTasks(filteredTasks);
  };

  // Mark a task as complete or incomplete
  const toggleTaskComplete = (taskId: string) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, isComplete: !task.isComplete } : task,
    );
    saveTasks(updatedTasks);
  };

  // Clear all tasks (optional)
  const clearTasks = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      setTasks([]);
      setFilteredTasks([]);
    } catch (error) {
      Alert.alert('Error', 'Failed to clear tasks.');
    }
  };

  // Get a task by ID
  const getTaskById = (taskId: string) => {
    return tasks.find(task => task.id === taskId);
  };

  // Search tasks by title
  const searchTasks = (query: string) => {
    setSearchQuery(query);
    filterAndSortTasks(tasks, query);
  };

  // Sort tasks by title
  const sortTasks = (order: 'asc' | 'desc') => {
    setSortOrder(order);
    filterAndSortTasks(tasks, searchQuery, order);
  };

  // Filter and sort tasks by title
  const filterAndSortTasks = (tasksToProcess: Task[], query: string = searchQuery, order: 'asc' | 'desc' = sortOrder) => {
    let processedTasks = tasksToProcess;

    // Filter by search query
    if (query) {
      processedTasks = tasksToProcess.filter(task =>
        task.title.toLowerCase().includes(query.toLowerCase()),
      );
    }

    // Sort by title
    processedTasks.sort((a, b) => {
      if (order === 'asc') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

    setFilteredTasks(processedTasks);
  };

  // Load tasks on first render
  useEffect(() => {
    loadTasks();
  }, []);

  return {
    tasks: filteredTasks, // Use filteredTasks for rendering
    addTask,
    editTask,
    deleteTask,
    toggleTaskComplete,
    clearTasks,
    loadTasks,
    getTaskById,
    searchTasks,  // Expose search function
    sortTasks,    // Expose sort function
    searchQuery,  // Expose current search query
    sortOrder,    // Expose current sort order
  };
};
