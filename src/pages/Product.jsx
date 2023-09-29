import Restaurants from "../components/Restaurants";
import SkeletonLoader from "../components/SkeletonLoader";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function Product() {
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  let mytoken = localStorage.getItem("loginToken");

  console.log(mytoken);

  useEffect(() => {
    fetch("http://localhost:5000/restaurants", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${mytoken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {restaurants.map((item) =>
          loading ? <SkeletonLoader key={item.id} /> : <Restaurants key={item.id + 1} {...item} />
        )}{" "}
      </div>
      <Footer/>

    </>
  );
}
