import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SweetAlert2 from "sweetalert2";
import Spinner from "../components/Spinner";

export default function Register() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phonenumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (resp.ok) {
        setIsLoading(true); // set loading to true
        setTimeout(() => {
          setIsLoading(false); // set it to false after 2 secs and direct this to login page
          SweetAlert2.fire({
            title: "Success!",
            text: "Registration to watamu foods is successfull, login to continue",
            icon: "success",
            confirmButtonText: "Cool",
            confirmButtonColor: "#f1cc17",
          });
          navigate("/login");
        }, 1500);
      } else {
        let error_data = await resp.json();
        setErrors(error_data.message);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <>
      <div className="h-full md:flex mx-2">
        <div className="relative rounded overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-yellow-400 to-yellow-500 i justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">Watamu Foods</h1>
            <p className="text-gray-500 mt-1">The most popular peer to peer food court</p>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white" onSubmit={handleSubmit}>
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello There!</h1>
            <p className="text-sm font-normal text-gray-600 mb-7 text-yellow-500">
              Welcome to Watamu foods
            </p>

            {(Object.keys(errors).length > 0 ? <p className="text-red-500 text-normal pb-4 pt-4 italic">{errors}</p> : <p></p>)}

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                id="username"
                placeholder="Username"
                required
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="phonenumber"
                id="phonenumber"
                value={formData.phonenumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                required
              />
            </div>
            {isLoading ? (
              <Spinner />
            ) : (
              <button
                type="submit"
                className="block w-full bg-yellow-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
                Register
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
