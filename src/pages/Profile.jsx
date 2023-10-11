import { useState, useEffect, useContext } from "react";
import Spinner from "../components/Spinner";
import { AuthContext } from "../components/AuthContext";
import sweetalert2 from "sweetalert2";

export default function Profile() {
  const { id } = useContext(AuthContext);
  const [profileDetails, setProfileDetails] = useState({
    username: "",
    email: "",
    phonenumber: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/user/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Kindly check your network and reload again.");
        }
        return res.json();
      })
      .then((data) => {
        setProfileDetails({
          ...profileDetails,
          username: data.username,
          email: data.email,
          phonenumber: data.phonenumber,
        });
      })
      .catch((error) => {
        // setFetchEr(error);
      });
  }, []);

  const handleInputChange = (e) => {
    e.preventDefault();
    setProfileDetails((prevD) => ({
      ...prevD,
      [e.target.name]: e.target.value,
    }))
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const timer = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    try {
      let updateres = await fetch(`http://localhost:5000/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,

        },
        body: JSON.stringify(profileDetails),
      });

      if (updateres.ok) {
        let re = await updateres.json();

        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          sweetalert2.fire({
            title: `${re.message}`,
            icon: 'success',
            showCancelButton: false,
            iconColor: '#f1cc17',
            confirmButtonColor: '#f1cc17',
            confirmButtonText: 'Okay'
          })
        }, 2000);
      } else {
        setIsLoading(true);
        timer();
      }
    } catch (error) {
      setIsLoading(true);
      timer();
    }
  };

  return (
    <>
      <div className="h-full md:flex mx-2">
        <div className="relative rounded overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-yellow-400 to-yellow-500 i justify-around items-center hidden">
          <div>
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Hello, <em className="text-white">{profileDetails.username}</em>
            </h1>
            <h2 className="text-white font-bold text-2xl font-sans">Welcome to Your Profile</h2>
          </div>
          <img
            src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp"
            className="relative"
            alt="food illustration"
            loading="lazy"
            width="200"
            height="200"
          />
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white" onSubmit={handleUpdate}>
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
                value={profileDetails.username}
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
                value={profileDetails.email}
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
                value={profileDetails.phonenumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
                required
              />
            </div>
            
            {isLoading ? (
              <Spinner />
            ) : (
              <button
                type="submit"
                className="block w-full bg-yellow-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
                Update
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
