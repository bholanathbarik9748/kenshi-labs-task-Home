import React, {useEffect, useMemo, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {generateUniqueId} from '../../utils/globalFunction';
import {useTaskManager} from '../../hooks/useTaskManager';
import {styles} from './styles/styles';
import {useNavigation} from '@react-navigation/native';

type CreateTaskProps = {
  route: {
    params: {
      TaskId?: string;
    };
  };
};

const CreateTask: React.FC<CreateTaskProps> = ({route}) => {
  const {TaskId} = route.params;
  const {addTask} = useTaskManager();
  const navigation = useNavigation();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const {getTaskById, editTask} = useTaskManager();

  const handleAddTask = () => {
    if (title && description && dueDate) {
      if (TaskId) {
        editTask({
          id: TaskId,
          title,
          description,
          dueDate: dueDate.toDateString(),
          isComplete: false,
        });
        Alert.alert('Success', 'Task added successfully!');
        setTitle('');
        setDescription('');
        setDueDate(null);
      } else {
        addTask({
          id: generateUniqueId(),
          title,
          description,
          dueDate: dueDate.toDateString(),
          isComplete: false,
        });
        Alert.alert('Success', 'Task Update successfully!');
        setTitle('');
        setDescription('');
        setDueDate(null);
      }
      navigation.navigate('AllTask');
    } else {
      Alert.alert('Error', 'Please fill all fields before adding a task.');
    }
  };

  // Memoize the fetched task details
  const taskDetails = useMemo(() => {
    if (TaskId) {
      return getTaskById(TaskId);
    }
    return null;
  }, [TaskId, getTaskById]);

  useEffect(() => {
    if (taskDetails) {
      setTitle(taskDetails?.title || '');
      setDescription(taskDetails?.description || '');

      // Check if dueDate is in a valid format (string or Date) and convert if needed
      if (taskDetails?.dueDate) {
        const taskDueDate = new Date(taskDetails.dueDate);
        setDueDate(taskDueDate);
      }
    } else if (TaskId) {
      setTitle('');
      setDescription('');
      setDueDate(null);
    }
  }, [taskDetails, TaskId]);

  const onDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || dueDate;
    setShowDatePicker(false);
    setDueDate(currentDate as Date);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.label}>Task Title</Text>
        <TextInput
          placeholder="Enter task title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />

        <Text style={styles.label}>Task Description</Text>
        <TextInput
          placeholder="Enter task description"
          value={description}
          onChangeText={setDescription}
          style={styles.input}
          multiline={true}
        />

        <Text style={styles.label}>Due Date</Text>
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={styles.datePicker}>
          <Text style={styles.dateText}>
            {dueDate ? dueDate.toDateString() : 'Select a due date'}
          </Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            style={styles.datePicker}
            value={dueDate || new Date()}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}

        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>
            {TaskId ? 'Update Task' : 'Add Task'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateTask;
