import React from 'react';
// import LoginLogoutToggle from './components/LoginLogoutToggle';
import UserGreeting from './components/UserGreeting';
import ProductAvailability from './components/ProductAvailability';
import ThemeSwitcher from './components/ThemeSwitcher';
import ErrorMessageForm from './components/ErrorMessageForm';

function App() {
  return (
    <div>
      <h3>Login/Logout Toggle and also Greeting</h3>
      {/* <LoginLogoutToggle /> */}
      <UserGreeting />
      <ProductAvailability isAvailable={true} />
      <ThemeSwitcher />
      <ErrorMessageForm />
    </div>
  );
}

export default App;
