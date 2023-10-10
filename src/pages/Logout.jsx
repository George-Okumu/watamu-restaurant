import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";

export default function Logout(){
    const nav = useNavigate();
    const {setToken} = useContext(AuthContext);
    
    const logout = () => {
        setToken(); // Set token state to empty
        nav("/");
    }
    return (
        <button className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent"
        onClick={logout}>
            Logout
        </button>
    )
}