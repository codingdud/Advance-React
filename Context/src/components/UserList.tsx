import { useState } from 'react';
import { useContextHook } from '../context/useContextHook';

function UserList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [message, setMessage] = useState('');

  // Access auth state and functions from context
  const { 
    user,
    isAuthenticated, 
    getAllUsers, 
    searchUsers, 
    removeUser,
    updateUser 
  } = useContextHook();

  const handleRemoveUser = (userId:string) => {
    if (window.confirm('Are you sure you want to remove this user?')) {
      const result = removeUser(userId);
      setMessage(result.success ? '✅ ' + result.message : '❌ ' + result.message);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleToggleRole = (userId:string, currentRole:string) => {
    const newRole = currentRole === 'admin' ? 'user' : 'admin';
    const result = updateUser(userId, { role: newRole });
    setMessage(result.success ? '✅ Role updated!' : '❌ ' + result.message);
    setTimeout(() => setMessage(''), 3000);
  };

  if (!isAuthenticated) {
    return null;
  }

  const users = searchQuery ? searchUsers(searchQuery) : getAllUsers();

  return (
    <div className="user-list">
      <h2>👥 All Users ({users.length})</h2>

      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="🔍 Search users by name or email..."
          className="search-input"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery('')}
            className="btn btn-secondary"
          >
            Clear
          </button>
        )}
      </div>

      {message && <div className="message">{message}</div>}

      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <div className="users-grid">
          {users.map((u) => (
            <div key={u.id} className={`user-card ${u.id === user?.id ? 'current-user' : ''}`}>
              <div className="user-header">
                <h3>{u.name}</h3>
                {u.id === user?.id && <span className="badge">You</span>}
              </div>
              
              <p><strong>Email:</strong> {u.email}</p>
              <p>
                <strong>Role:</strong> 
                <span className={`role-badge ${u.role}`}>{u.role}</span>
              </p>
              <p><strong>ID:</strong> {u.id}</p>
              {u.createdAt && (
                <p><strong>Joined:</strong> {new Date(u.createdAt).toLocaleDateString()}</p>
              )}

              <div className="user-actions">
                {user?.role === 'admin' && u.id !== user?.id && (
                  <>
                    <button 
                      onClick={() => handleToggleRole(u.id, u.role??"user")}
                      className="btn btn-secondary btn-sm"
                    >
                      Toggle Role
                    </button>
                    <button 
                      onClick={() => handleRemoveUser(u.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Remove
                    </button>
                  </>
                )}
                
                {u.id === user?.id && (
                  <span className="info-text">This is your account</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserList;