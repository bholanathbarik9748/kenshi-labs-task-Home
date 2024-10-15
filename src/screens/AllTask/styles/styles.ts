import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#222831',
    textAlign: 'left',
    marginBottom: 20,
    marginTop: 50,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  searchInput: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20, // Rounded corners for a clean modern look
    paddingHorizontal: 20,
    marginBottom: 16,
    backgroundColor: '#fff',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  sortButton: {
    backgroundColor: '#00adb5',
    paddingVertical: 8, // Reduced padding for a smaller height
    paddingHorizontal: 16, // Reduced width padding
    borderRadius: 15, // Smaller border radius for a sleeker look
    alignItems: 'center',
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Slight elevation for depth
  },
  sortButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14, // Reduced font size for a more compact look
    textTransform: 'uppercase',
  },
  createTaskButton: {
    backgroundColor: '#393e46',
    paddingVertical: 10, // Reduced padding to make the button more compact
    paddingHorizontal: 20, // Adjusted width
    borderRadius: 15, // Smaller radius for a sleeker style
    alignItems: 'center',
    marginBottom: 16, // Reduced margin to align better with other elements
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  createTaskButtonText: {
    fontSize: 16, // Reduced font size for a more balanced look
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // One button on the left, one on the right
    marginBottom: 20, // Space below the buttons
  },
  taskList: {
    paddingBottom: 20,
  },
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
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
    marginTop: 20,
  },
});
