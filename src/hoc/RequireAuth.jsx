import { useLocation, Navigate } from 'react-router-dom';
import RouterConfig from "../const/RouterConfig";

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const auth = false;

    if(!auth) {
        return <Navigate to={RouterConfig.AUTH.path} state={{from: location}} />
    }
    return children;
}

export default RequireAuth;