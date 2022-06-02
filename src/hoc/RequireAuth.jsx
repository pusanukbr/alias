import { useLocation, Navigate } from 'react-router-dom';
import RouterConfig from "../const/RouterConfig";
import { useAuth } from '../hook/useAuth';

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const { user } = useAuth();
    console.log(localStorage.getItem('session'));

    if(!user) {
        return <Navigate to={RouterConfig.AUTH.path} state={{from: location}} />
    }
    return children;
}

export default RequireAuth;