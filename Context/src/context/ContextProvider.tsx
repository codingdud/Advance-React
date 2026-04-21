import { useEffect, useState, type ReactNode } from "react";
import Context, { type User, type UserData } from "./context";

export default function ContextProvider({ children }: { children: ReactNode }) {
  // State Management
  const [user, setUser] = useState<UserData | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const loadInitialData = () => {
      const storedUser = localStorage.getItem("user");
      const storedUsers = localStorage.getItem("users");

      if (storedUser) {
        setUser(JSON.parse(storedUser) as UserData);
        setIsAuthenticated(true);
      }

      if (storedUsers) {
        setUsers(JSON.parse(storedUsers) as User[]);
      }

      setLoading(false);
    };

    loadInitialData();
  }, []);

  // ==================== FUNCTIONS ====================

  // 1. LOGIN Function
  const login = (email: string, password: string) => {
    try {
      setError(null);

      // Find user in users array
      const foundUser = users.find(
        (u) => u.email === email && u.password === password,
      );

      if (foundUser) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _pwd, ...userData } = foundUser;

        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(userData));
        return { success: true, message: "Login successful!" };
      } else {
        setError("Invalid credentials");
        return { success: false, message: "Invalid email or password" };
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      return { success: false, message: errorMessage };
    }
  };

  // 2. LOGOUT Function
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setError(null);
    localStorage.removeItem("user");
    return { success: true, message: "Logged out successfully!" };
  };

  // 3. REGISTER/ADD User Function
  const register = (userData: Partial<User>) => {
    try {
      setError(null);

      // Check if user already exists
      const existingUser = users.find((u) => u.email === userData.email);
      if (existingUser) {
        setError("User already exists");
        return { success: false, message: "User already exists" };
      }

      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email || "",
        password: userData.password,
        name: userData.name,
        createdAt: new Date().toISOString(),
        ...userData,
      };

      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      return {
        success: true,
        message: "Registration successful!",
        user: newUser,
      };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      return { success: false, message: errorMessage };
    }
  };

  // 4. UPDATE User Function
  const updateUser = (userId: string, updates: Partial<User>) => {
    try {
      setError(null);

      // Update in users array
      const updatedUsers = users.map((u) =>
        u.id === userId
          ? { ...u, ...updates, updatedAt: new Date().toISOString() }
          : u,
      );
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      // If updating current user, update user state
      if (user && user.id === userId) {
        const updatedCurrentUser: UserData = { ...user, ...updates };
        setUser(updatedCurrentUser);
        localStorage.setItem("user", JSON.stringify(updatedCurrentUser));
      }

      return { success: true, message: "User updated successfully!" };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      return { success: false, message: errorMessage };
    }
  };

  // 5. DELETE/REMOVE User Function
  const removeUser = (userId: string) => {
    try {
      setError(null);

      const updatedUsers = users.filter((u) => u.id !== userId);
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      // If removing current user, logout
      if (user && user.id === userId) {
        logout();
      }

      return { success: true, message: "User removed successfully!" };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      return { success: false, message: errorMessage };
    }
  };

  // 6. GET User by ID
  const getUserById = (userId: string): User | undefined => {
    return users.find((u) => u.id === userId);
  };

  // 7. GET All Users
  const getAllUsers = (): User[] => {
    return users;
  };

  // 8. SEARCH Users
  const searchUsers = (query: string): User[] => {
    return users.filter(
      (u) =>
        u.name?.toLowerCase().includes(query.toLowerCase()) ||
        u.email?.toLowerCase().includes(query.toLowerCase()),
    );
  };

  // 9. UPDATE Profile (current user)
  const updateProfile = (updates: Partial<User>) => {
    if (!user) {
      return { success: false, message: "No user logged in" };
    }
    return updateUser(user.id, updates);
  };

  // 10. CHANGE Password
  const changePassword = (oldPassword: string, newPassword: string) => {
    try {
      if (!user) {
        return { success: false, message: "No user logged in" };
      }

      const fullUser = users.find((u) => u.id === user.id);
      if (!fullUser) {
        return { success: false, message: "User not found" };
      }

      if (fullUser.password !== oldPassword) {
        return { success: false, message: "Incorrect old password" };
      }

      return updateUser(user.id, { password: newPassword });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred";
      return { success: false, message: errorMessage };
    }
  };

  // 11. CLEAR Error
  const clearError = () => {
    setError(null);
  };

  // 12. CHECK if email exists
  const emailExists = (email: string): boolean => {
    return users.some((u) => u.email === email);
  };

  // Value object to provide
  const value = {
    // State
    user,
    users,
    isAuthenticated,
    loading,
    error,

    // Functions
    login,
    logout,
    register,
    updateUser,
    removeUser,
    getUserById,
    getAllUsers,
    searchUsers,
    updateProfile,
    changePassword,
    clearError,
    emailExists,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
