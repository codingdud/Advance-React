import React, { useState, useEffect } from "react";
 
/* ---------------- HOC ---------------- */
function withLoading(WrappedComponent) {
  return function Enhanced({ isLoading, ...props }) {
    if (isLoading) return <h3>Loading...</h3>;
 
    return <WrappedComponent {...props} />;
  };
}
 
/* ---------------- Normal Component ---------------- */
function UserList({ users }) {
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
 
/* ---------------- Enhanced Component ---------------- */
const UserListWithLoading = withLoading(UserList);
 
/* ---------------- Parent ---------------- */
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
 
  // fake API call
  useEffect(() => {
    setTimeout(() => {
      setUsers([
        { id: 1, name: "Adi" },
        { id: 2, name: "Sam" },
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);
 
  return (
    <div>
      <h2>Users</h2>
 
      <UserListWithLoading
        isLoading={isLoading}
        users={users}
      />
    </div>
  );
}