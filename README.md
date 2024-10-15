# Kenshi Labs Task - Home


https://github.com/user-attachments/assets/72a95680-0b16-4c6e-9bcd-3fad6072b764


## Project Overview

This project is a task submission for Kenshi Labs, focused on developing a home page with interactive elements and custom components using React Native. The objective is to build a sleek, responsive, and functional interface for a mobile application that handles user Task Crud Operation and form validation.

## Setup Instructions

To get the project running locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/bholanathbarik9748/kenshi-labs-task-Home.git
   cd kenshi-labs-task-Home
   ```

2. **Install dependencies:**

   If you're using React native CLI, install the required packages:

   ```bash
   npm install
   ```

3. **Start the project:**

   ```bash
   npm run start
   ```

## Features Implemented

- **Input Validation:** Error handling and validation for form fields.
- **Custom Components:** Reusable form input fields for consistent UI and error management.
- **Dynamic UI:** Adjusts layout and content based on user interaction and authentication state.
- **Custom Hook and AsyncStorage:** A custom hook is used for managing all CRUD operations, with data persistence handled through AsyncStorage to retain user data locally.
- **Custom Css:** Custom CSS for the application to ensure a sleek and responsive design, maintaining consistency across devices
- **use typescript type / interfaces:** TypeScript is used throughout the project to ensure type safety and reliability, defining types and interfaces for components, props, and API data, reducing bugs and improving code readability.
- **Sorting and Search Added:** Sorting and search functionalities have been implemented to improve user interaction, allowing users to easily find and organize tasks. These features are built with TypeScript to ensure type safety, enhancing the reliability and readability of the code across components and API interactions.

## Technologies and Libraries Used

- **React Native CLI:** Framework for building mobile applications.
- **JavaScript/TypeScript:** Core language for functionality.
- **Custom Hooks:** For handling input and form validation logic.
- **React Navigation:** For seamless navigation between screens.
- **eslint:** A linting tool that helps identify and fix potential errors and enforce consistent coding standards across the project.
- **prettier:** A code formatter that ensures consistent code style by automatically formatting code, making it easier to read and maintain

## Known Limitations

- **Imited Error Feedback:** While error handling is implemented for basic input validation, certain edge cases lack detailed feedback. Future iterations should include more comprehensive error messages, particularly for network or server-side errors.

- **Authentication Scope:** The current project does not include any authentication logic. Features like user sign-in, sign-up, and role-based access control (admin vs. regular users) are missing and should be implemented for a more secure and personalized experience.

- **UI Responsiveness:**  Minor inconsistencies in the UI responsiveness across various device sizes need improvement. The layout should be optimized for better performance on both small and large screens.

- **Backend API Integration:**  The app currently does not connect to any backend APIs. All CRUD operations are handled locally through AsyncStorage. Integration with a real backend API would enable persistent data storage and real-time updates.

- **Form Validation Coverage:**  While basic form validation is in place, it lacks coverage for more complex cases (e.g., email format validation, password strength checks). More robust validation logic should be implemented to improve user input reliability.

- **Loading Indicators:**  The app lacks visual feedback for long-running operations such as API requests or CRUD actions, which can result in a poor user experience. Implementing loading spinners or progress indicators would enhance user interaction.

## Future Improvements

- **Admin and Travel Provider Controllers:** Adding functionality for admin and provider users.
- **Enhanced Validation:** Expand validation to cover edge cases and integrate third-party libraries for more robust form handling.
- **Additional Features:** Implement features such as password recovery, email verification, and real-time content updates.
- **Performance Optimization:** Improve performance on larger datasets and reduce loading times.

