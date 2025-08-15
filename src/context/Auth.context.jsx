import { createContext } from "react";
import { useState } from "react";
import Cookies from 'js-cookie';

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [token, setToken] = useState(Cookies.get('token') || sessionStorage.getItem('token')  || null);
    function login(token, remember = false) {
        setToken(token);
        sessionStorage.setItem('token', token);
        remember && Cookies.set('token', token, { expires: 5 });
    }
    function logout() {
        setToken(null);
        sessionStorage.removeItem('token');
        Cookies.remove('token');
    }

    return <AuthContext.Provider value={{token, login, logout}}>
        {children}
    </AuthContext.Provider>;
}

export { AuthProvider, AuthContext };