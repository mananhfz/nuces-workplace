import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    if (!tokenString) {
      return null
    }
    const userToken = JSON.parse(tokenString);
    const now = new Date()
    // compare the expiry time of the item with the current time
    if (now.getTime() > userToken.expiry) {
      // If the item is expired, delete the item from storage
      // and return null
      localStorage.removeItem('token')
      return null
    }
    return userToken.value;
  };

  const saveToken = (token, ttl) => {
    const now = new Date();
    const item = {
      value: token,
      expiry: now.getTime() + ttl,
    };
    localStorage.setItem('token', JSON.stringify(item));
    setToken(token);
  };

  const [token, setToken] = useState(getToken());

  return {
    setToken: saveToken,
    token,
  };
}
