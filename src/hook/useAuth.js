import { useContext } from 'react';
import { AuthContex } from '../hoc/AuthProvider';

export function useAuth() {
    return useContext(AuthContex);
}