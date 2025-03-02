import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const AuthenticationStatus = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <p>Welcome, {user.email}</p>
      ) : (
        <p>Please log in or sign up</p>
      )}
    </div>
  );
};

export default AuthenticationStatus;
