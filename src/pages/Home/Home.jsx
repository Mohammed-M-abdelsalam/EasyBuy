import { useContext } from "react";
import { AuthContext } from "../../context/Auth.context";
import { Navigate } from "react-router";

function Home(){
    const {token} = useContext(AuthContext);
    if(!token) return <Navigate to="/login" />;
    return(
        <>
            <h1>Home</h1>
        </>
    )
}

export default Home