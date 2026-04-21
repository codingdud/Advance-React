import { createContext } from "react";

// User Interface
export interface User {
  id: string;
  email: string;
  password?: string;
  name?: string;
  role?:string;
  createdAt: string;
  updatedAt?: string;
}

// User Data without sensitive info
export type UserData = Omit<User, 'password'>;

// Context Value Interface
export interface ContextValue {
  // State
  user: UserData | null;
  users: User[];
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;

  // Functions
  login: (email: string, password: string) => { success: boolean; message: string };
  logout: () => { success: boolean; message: string };
  register: (userData: Partial<User>) => { success: boolean; message: string; user?: User };
  updateUser: (userId: string, updates: Partial<User>) => { success: boolean; message: string };
  removeUser: (userId: string) => { success: boolean; message: string };
  getUserById: (userId: string) => User | undefined;
  getAllUsers: () => User[];
  searchUsers: (query: string) => User[];
  updateProfile: (updates: Partial<User>) => { success: boolean; message: string };
  changePassword: (oldPassword: string, newPassword: string) => { success: boolean; message: string };
  clearError: () => void;
  emailExists: (email: string) => boolean;
}

export default createContext<ContextValue | undefined>(undefined);