import { useState } from 'react';
import './ErrorMessageForm.css'; // Import the CSS file

function ErrorMessageForm() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      setMessage('Error: Input is required.');
    } else {
      setMessage('Success: Form submitted.');
    }
  };

  return (
    <form className="error-message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input-field"
      />
      <button type="submit" className="submit-button">Submit</button>
      {message && <p className={`message ${message.startsWith('Error') ? 'error' : 'success'}`}>{message}</p>}
    </form>
  );
}

export default ErrorMessageForm;
