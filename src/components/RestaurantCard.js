import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    // console.log(props);
    const { resData } = props;
    // console.log(resData);

    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
        resData?.info;

    return (
        <div
            className="m-4 p-4 w-[250px] h-[400px] rounded-lg hover:bg-gray-300 bg-gray-200 transition duration-300"
            // style={{
            //     backgroundColor: "#f0f0f0",
            // }}
        >
            <img
                className="w-full h-2/5 object-cover rounded-lg"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

// Higher Order Component

// input - RestaurantCard => RestaurantCardVeg

export const withOpenLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg ml-6">
                    Open
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;
