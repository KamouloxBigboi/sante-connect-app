import { useState } from 'react';
import axios from 'axios';

export default function useFindUser() {
    
  const [user, setUser] = useState(" ");
  const [isLoading, setLoading] = useState(true);

  async function findUser() {
    await axios.get('/')
      .then(res => {
        setUser(res.data.currentUser);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }

  findUser();

  return {
    user,
    setUser,
    isLoading
  }
}