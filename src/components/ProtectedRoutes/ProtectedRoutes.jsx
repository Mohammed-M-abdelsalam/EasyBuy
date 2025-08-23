import { useContext } from "react";
import { AuthContext } from "../../context/Auth.context";
import { Navigate, useLocation } from "react-router";

function ProtectedRoutes({ children }) {
    const { token } = useContext(AuthContext);
    const location = useLocation();
    if(!token) return <Navigate to="/login" state={{from: location.pathname}} />
    return <>{children}</>;
}

export default ProtectedRoutes;