export const generateUniqueId = (): string => {
  const timestamp = Date.now().toString(); // Get the current timestamp
  const randomNumber = Math.floor(Math.random() * 1000000000).toString(); // Generate a random number
  const uniqueId = timestamp.slice(-7) + randomNumber.slice(0, 8); // Combine parts to get 15 digits

  return uniqueId;
};
