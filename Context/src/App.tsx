import { Fragment, useState } from 'react';
import LoginForm from './components/Loginform';
import Dashboard from './components/Dashboard';
import RegisterForm from './components/Registerfrom';
import UserList from './components/UserList';
import './App.css';

function App() {
  return (
    // Wrap entire app with AuthProvider
    <Fragment>
      <div className="App">
        <h1>🔐 Auth Context Example</h1>
        <MainContent />
      </div>
    </Fragment>
  );
}

// Main content that uses the context
function MainContent() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="main-content">
      <div className="auth-section">
        {showRegister ? (
          <>
            <RegisterForm />
            <button 
              className="toggle-btn"
              onClick={() => setShowRegister(false)}
            >
              Already have an account? Login
            </button>
          </>
        ) : (
          <>
            <LoginForm />
            <button 
              className="toggle-btn"
              onClick={() => setShowRegister(true)}
            >
              Don't have an account? Register
            </button>
          </>
        )}
      </div>
      
      <Dashboard />
      <UserList />
    </div>
  );
}

export default App;