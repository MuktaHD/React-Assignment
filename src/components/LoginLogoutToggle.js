import { useState } from 'react';
import './LoginLogoutToggle.css';

function LoginLogoutToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <button className="login-logout-toggle" onClick={handleToggle}>
      {isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
}

export default LoginLogoutToggle;
