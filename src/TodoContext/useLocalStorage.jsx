import { useEffect, useState } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (localStorageItem) {
          parsedItem = JSON.parse(localStorageItem);
        } else {
          localStorage.setItem(itemName, JSON.stringify(initialValue));

          parsedItem = initialValue;
        }

        setItem(parsedItem);

        setLoading(false);
      } catch (error) {
        setError(error);
        console.error();
      }
    }, 500);
  }, []);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));

      setItem(newItem);
    } catch (error) {
      setError(error);
      console.error();
    }
  };

  return { item, saveItem, loading, error };
}
