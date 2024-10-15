import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f0f2f5', // Softer background color for better contrast
    },
    container: {
        padding: 20,
        marginTop: 40,
        backgroundColor: '#ffffff',
        borderRadius: 15, // Smoother border radius
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 }, // Slightly larger shadow for more depth
        shadowOpacity: 0.2, // More noticeable shadow
        shadowRadius: 8,
        elevation: 6, // Slightly higher elevation for floating effect
    },
    label: {
        fontSize: 18,
        fontWeight: '700', // Stronger font weight
        marginBottom: 10,
        color: '#222831', // Darker, more modern text color
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc', // Softer border color for a cleaner look
        borderRadius: 10, // Increased border radius for a smoother feel
        padding: 15,
        marginBottom: 20,
        backgroundColor: '#fdfdfd', // Slightly brighter input background
        fontSize: 16,
        color: '#393E46', // Match color theme
    },
    datePicker: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        backgroundColor: '#f9f9f9',
    },
    dateText: {
        fontSize: 16,
        color: '#222831',
    },
    button: {
        backgroundColor: '#00ADB5', // Use your preferred theme color for buttons
        paddingVertical: 15,
        borderRadius: 12, // Smoother button edges
        alignItems: 'center',
        marginTop: 15, // Increased spacing above the button for better layout
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2, // Slightly more pronounced shadow for buttons
        shadowRadius: 6,
        elevation: 4,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '700',
    },
});
