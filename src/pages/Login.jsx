import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { AuthContext } from "../components/AuthContext";

function Login() {
  const {setId,setToken} = useContext(AuthContext);

  // console.log(token);


  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [isServerError, setIsServerError] = useState(false);

  // const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let loginres = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (loginres.ok) {
        let re = await loginres.json();

        setIsLoading(true);
        setTimeout(() => {
          setToken(re.access_token); //store token in state
          setId(re.user_id);
          setIsLoading(false);

          navigate("/products");
        }, 2000);

        // setIsLoading(false);
      } else {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setIsLoginError(true);
        }, 1500);
      }
    } catch (error) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        setIsServerError(true);
      }, 1000);
    }
  };

  const handleLoginInputChange = (e) => {
    setIsLoginError(false); // sets the isLoginError back to its default when this is triggered.

    setLoginData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section>
        <div className="h-full">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp"
                className="relative"
                alt="food illustration"
                loading="lazy"
                width="500"
                height="500"
              />
            </div>

            <div className="mb-12 mr-4 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <form onSubmit={handleLogin}>
                <div className="relative mb-6">
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-yellow-200 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                    id="username"
                    onChange={handleLoginInputChange}
                    name="username"
                    value={loginData.username}
                    placeholder="Username"
                    required
                  />
                </div>

                <div className="relative mb-6">
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-yellow-200 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                    id="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginInputChange}
                    placeholder="Password"
                    required
                  />
                </div>

                <div className="text-center lg:text-left">
                  {isLoginError ? (
                    <p className="text-red-500 text-sm pb-4 italic">
                      Invalid Credentials. Wrong Username or Password.Try Again.
                    </p>
                  ) : isServerError ? (
                    <p class="text-red-500 text-sm pb-4 italic">
                      Network connection error, if persists, kindly contact us.
                      <em>Make sure you are connected to internet.</em>
                    </p>
                  ) : (
                    <p></p>
                  )}

                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <button
                      type="submit"
                      className="inline-block rounded bg-yellow-300 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-yellow-500-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-yellow-500-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-yellow-500-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                      Login
                    </button>
                  )}
                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    Don't have an account?
                    <Link
                      to="/register"
                      className="text-danger hover:text-yellow-500 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
