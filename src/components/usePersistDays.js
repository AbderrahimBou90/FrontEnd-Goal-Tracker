import React from 'react'

export const usePersistDays = (defaultValue,key) => {
  const [value, setValue] = React.useState(() => {
    const persistValue = localStorage.getItem(key);
    return persistValue !== null ? JSON.parse(persistValue) : [];
  });

  React.useEffect(() => {
    localStorage.setItem('days', JSON.stringify(value));
  }, [key, value]);

  return {value,setValue};
}

