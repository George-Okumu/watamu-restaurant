import Restaurants from "../components/Restaurants";
import SkeletonLoader from "../components/SkeletonLoader";
import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import { AuthContext } from "../components/AuthContext";

export default function Product() {
  const {token} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [fetchEr, setFetchEr] = useState(null);

  

  useEffect(() => {
    const timer = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    setLoading(true);

    fetch("http://localhost:5000/restaurants", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          timer();
          throw new Error("Kindly check your network and reload again.");
        }
        return res.json();
      })
      .then((data) => {
        timer();
        setRestaurants(data);
      })
      .catch((error) => {
        timer();
        setFetchEr(error);
      });
  }, []);

  return (
    <>
      {loading ? (
        <SkeletonLoader />
      ) : fetchEr ? (
        <p className="text-red-500 text-center pt-20 pb-4 text-">{fetchEr.message}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {restaurants.map((item) =>
            loading ? <SkeletonLoader key={item.id} /> : <Restaurants key={item.id + 1} {...item} />
          )}{" "}
        </div>
      )}
      <Footer />
    </>
  );
}
