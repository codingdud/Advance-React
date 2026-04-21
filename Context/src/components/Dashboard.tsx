import { useState, type SubmitEvent } from 'react';
import { useContextHook } from '../context/useContextHook';


function Dashboard() {
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  // Access auth state and functions from context
  const { 
    user, 
    isAuthenticated, 
    logout, 
    updateProfile, 
    changePassword 
  } = useContextHook();

  const handleLogout = () => {
    const result = logout();
    setMessage('✅ ' + result.message);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleUpdateProfile = (e:SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const result = updateProfile({ name: newName });
    
    if (result.success) {
      setMessage('✅ ' + result.message);
      setEditMode(false);
      setNewName('');
    } else {
      setMessage('❌ ' + result.message);
    }

    setTimeout(() => setMessage(''), 3000);
  };

  const handleChangePassword = (e:SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const result = changePassword(oldPassword, newPassword);
    
    if (result.success) {
      setMessage('✅ Password changed successfully!');
      setOldPassword('');
      setNewPassword('');
    } else {
      setMessage('❌ ' + result.message);
    }

    setTimeout(() => setMessage(''), 3000);
  };

  if (!isAuthenticated || !user) {
    return (
      <div className="dashboard">
        <p>Please login to view dashboard</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h2>📊 Dashboard</h2>
      
      <div className="user-info">
        <h3>Welcome, {user.name}! 👋</h3>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>User ID:</strong> {user.id}</p>
        {user.createdAt && (
          <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
        )}
      </div>

      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>

      <div className="profile-section">
        <h3>Update Profile</h3>
        
        {!editMode ? (
          <button 
            onClick={() => {
              setEditMode(true);
              setNewName(user.name??"unknow");
            }} 
            className="btn btn-secondary"
          >
            Edit Profile
          </button>
        ) : (
          <form onSubmit={handleUpdateProfile}>
            <div className="form-group">
              <label>New Name:</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Enter new name"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
            <button 
              type="button" 
              onClick={() => setEditMode(false)} 
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </form>
        )}
      </div>

      <div className="password-section">
        <h3>Change Password</h3>
        <form onSubmit={handleChangePassword}>
          <div className="form-group">
            <label>Old Password:</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Enter old password"
              required
            />
          </div>
          <div className="form-group">
            <label>New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Change Password
          </button>
        </form>
      </div>

      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default Dashboard;