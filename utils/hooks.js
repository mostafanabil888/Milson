import { useState, useEffect } from 'react';
import axios from 'axios';

export function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get('https://milsonn.com/api/login');
        if (response.status === 200) {
          setUser(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchUser();
  }, []);

  return user;
}