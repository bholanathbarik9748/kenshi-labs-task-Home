import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Task} from '../../types/TaskInterface';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native'; // For navigation

interface TaskItemProps {
  task: Task;
  toggleTaskComplete: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  toggleTaskComplete,
  deleteTask,
}) => {
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.taskContainer,
        task.isComplete ? styles.taskComplete : styles.taskIncomplete,
      ]}>
      <View style={styles.taskContent}>
        <Text
          style={[styles.taskTitle, task.isComplete && styles.strikeThrough]}>
          {task.title}
        </Text>
        <Text style={styles.taskDescription}>{task.description}</Text>
        <Text style={styles.taskDueDate}>Due: {task.dueDate}</Text>
      </View>
      <View style={styles.actionIcons}>
        <TouchableOpacity
          onPress={() => toggleTaskComplete(task.id)}
          style={styles.actionButton}>
          <Text
            style={[
              styles.buttonText,
              {color: task.isComplete ? '#6c757d' : '#00adb5'},
            ]}>
            {task.isComplete ? 'Undo' : 'Complete'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => deleteTask(task.id)}
          style={styles.actionButton}>
          <Text style={[styles.buttonText, {color: '#dc3545'}]}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TaskForm', {TaskId: task.id})}
          style={styles.actionButton}>
          <Text style={[styles.buttonText, {color: '#0000FF'}]}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskItem;
