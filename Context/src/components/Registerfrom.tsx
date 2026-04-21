import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import { useContextHook } from '../context/useContextHook';

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user'
  });
  const [message, setMessage] = useState('');

  // Access auth functions from context
  const { register, isAuthenticated, emailExists } = useContextHook();

  const handleChange = (e:ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e:SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check if email already exists
    if (emailExists(formData.email)) {
      setMessage('❌ Email already registered');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    const result = register(formData);
    
    if (result.success) {
      setMessage('✅ ' + result.message);
      setFormData({ name: '', email: '', password: '', role: 'user' });
    } else {
      setMessage('❌ ' + result.message);
    }

    setTimeout(() => setMessage(''), 3000);
  };

  if (isAuthenticated) {
    return null; // Hide register form when authenticated
  }

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </div>

        <div className="form-group">
          <label>Role:</label>
          <select 
            name="role" 
            value={formData.role} 
            onChange={handleChange}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>

      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default RegisterForm;