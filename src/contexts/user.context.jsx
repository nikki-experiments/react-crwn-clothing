import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth
} from "../utils/firebase/firebase.utils";

// The actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser:() => null,
});

// the moment this listener mounts it will check the auth state automatically when you initialize the listener. When you initialize the listener, it will run the callback
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};
