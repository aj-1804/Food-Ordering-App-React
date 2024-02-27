import { useState } from "react";

import Itemlist from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    // console.log(data);

    const handleClick = () => {
        setShowIndex();
    };

    return (
        <div className="text-black">
            {/* {Header} */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div
                    className=" flex justify-between cursor-pointer"
                    onClick={handleClick}
                >
                    <span className="font-semibold text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>⬇️</span>
                </div>

                {/* {Accodion Body} */}

                {showItems && <Itemlist items={data.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;
