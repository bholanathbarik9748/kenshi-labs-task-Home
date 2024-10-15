import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import AllTask from '../screens/AllTask/AllTask';
import TaskForm from '../screens/TaskForm/TaskForm';

// Define the type for the stack navigator's params
type RootStackParamList = {
  AllTask: undefined;
  TaskForm: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AllTask"
        screenOptions={{headerShown: true} as StackNavigationOptions}>
        {/* Define SplashScreen */}
        <Stack.Screen
          name="AllTask"
          component={AllTask}
          options={{headerShown: false}} // Customize header visibility for SplashScreen
        />
        <Stack.Screen
          name="TaskForm"
          component={TaskForm}
          options={{headerShown: false}} // Customize header visibility for SplashScreen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
