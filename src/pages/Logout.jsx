import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout({nulltoken}){
    const nav = useNavigate();
    
    const logout = () => {
        localStorage.clear(); // Lets just clear, ut setting the state to null also works
        nulltoken(null); // Set logintokinstate to null
        nav("/");
    }
    return (
        <button className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-500 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent"
        onClick={logout}>
            Logout
        </button>
    )
}