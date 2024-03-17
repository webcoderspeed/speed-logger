function formatLogMessage(message: string, data?: unknown) {
  const logData = data ? { data } : {}; 
  return JSON.stringify({ message, ...logData },null, 2);
}

export default formatLogMessage;
