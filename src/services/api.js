const API_URL = 'http://localhost:8001/bots';

export const fetchBots = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch bots');
  }
  return response.json();
};
