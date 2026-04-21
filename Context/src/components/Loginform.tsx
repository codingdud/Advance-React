import { useState, type SubmitEvent } from 'react';
import { useContextHook } from '../context/useContextHook';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Access auth functions from context
  const { login, error, isAuthenticated } = useContextHook();

  const handleSubmit = (e:SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const result = login(email, password);
    
    if (result.success) {
      setMessage('✅ ' + result.message);
      setEmail('');
      setPassword('');
    } else {
      setMessage('❌ ' + result.message);
    }

    setTimeout(() => setMessage(''), 3000);
  };

  if (isAuthenticated) {
    return null; // Hide login form when authenticated
  }

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>

      {message && <div className="message">{message}</div>}
      {error && <div className="message">{error}</div>}
    </div>
  );
}

export default LoginForm;