import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, SetSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);

        setListOfRestaurants(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
            // json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            //     ?.restaurants
        );

        setFilteredRestaurants(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
            // json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            //     ?.restaurants
        );
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (
            <h1>
                Looks like you're offline! Please check your internet connection
            </h1>
        );

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="">
            <div className="flex">
                <div className=" m-4 p-4">
                    <input
                        type=""
                        className="border border-solid border-black"
                        value={searchText}
                        onChange={(e) => {
                            SetSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="px-4 py-2 bg-green-100 m-4 rounded-md"
                        onClick={() => {
                            const filteredRestaurant =
                                filteredRestaurants.filter((res) =>
                                    res.info.name
                                        .toLowerCase()
                                        .includes(searchText.toLowerCase())
                                );

                            setListOfRestaurants(filteredRestaurant);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button
                        className="px-4 py-2 bg-gray-100 rounded-md"
                        onClick={() => {
                            let filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4.2
                            );
                            setListOfRestaurants(filteredList);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap justify-around">
                {filteredRestaurants.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to={"/restaurants/" + restaurant.info.id}
                    >
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
