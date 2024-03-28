import React from "react";

const useLocalStorage = (key, initialState) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);

    return local ? JSON.parse(local) : initialState;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
