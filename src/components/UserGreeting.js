import { useState } from 'react';
import './UserGreeting.css'; // Import the CSS file

function UserGreeting() {
  const [user, setUser] = useState(null); // Initialize user as null

  const handleLogin = () => {
    // Simulate a login action by setting a user object
    setUser({ name: 'Mukta...' });
  };

  const handleLogout = () => {
    // Simulate a logout action by setting user to null
    setUser(null);
  };

  return (
    <div className={user ? 'user-logged-in' : 'user-logged-out'}>
      {user ? (
        <>
          <h1>Hello, {user.name}..!</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Welcome, Guest!</h1>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

export default UserGreeting;
