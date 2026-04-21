import { useContext } from 'react';
import Context from './context'

export const useContextHook = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useAuth must be used within ContextProvider');
  }
  return context;
};