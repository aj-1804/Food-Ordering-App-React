import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, SetSearchText] = useState("");

    const RestaurantCardOpen = withOpenLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    console.log(listOfRestaurants);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        // console.log(json);

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

    const { loggedInUser, setUserName } = useContext(UserContext);

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
                                (res) => res.info.avgRating > 4.3
                            );
                            setListOfRestaurants(filteredList);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <label className="mr-2">UserName</label>
                    <input
                        className="border border-black px-2"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
                {listOfRestaurants.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to={"/restaurants/" + restaurant.info.id}
                    >
                        {restaurant.info.isOpen ? (
                            <RestaurantCardOpen resData={restaurant} />
                        ) : (
                            <RestaurantCard resData={restaurant} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
