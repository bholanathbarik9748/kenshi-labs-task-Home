import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    borderLeftWidth: 5,
    borderLeftColor: '#00adb5',
  },
  taskContent: {
    flex: 1,
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222831',
    marginBottom: 8,
  },
  taskDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    lineHeight: 20,
  },
  taskDueDate: {
    fontSize: 13,
    color: '#999',
    fontStyle: 'italic',
  },
  actionIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  actionButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00adb5',
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  taskComplete: {
    backgroundColor: '#f3f6f4',
    borderLeftColor: '#6c757d',
  },
  taskIncomplete: {
    backgroundColor: '#e9ecef',
    borderLeftColor: '#00adb5',
  },
});
