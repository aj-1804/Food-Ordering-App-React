import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img
                className="logo"
                src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
            />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

// this is how we write css inside jsx

const cardStyles = {
    backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
    // console.log(props);
    const { resData } = props;
    // console.log(resData);

    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
        resData?.info;

    return (
        <div className="res-card" style={cardStyles}>
            <img
                className="res-logo"
                alt="res-logo"
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    cloudinaryImageId
                }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

const resList = [
    {
        info: {
            id: "40415",
            name: "Bikanervala",
            cloudinaryImageId: "bhb6fmjbetmpa2nh3w0t",
            locality: "Ring Road",
            areaName: "Rohini",
            costForTwo: "₹300 for two",
            cuisines: ["North Indian", "Snacks", "Chaat", "Sweets"],
            avgRating: 4.4,
            veg: true,
            parentId: "45936",
            avgRatingString: "4.4",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 21,
                lastMileTravel: 1.8,
                serviceability: "SERVICEABLE",
                slaString: "21 mins",
                lastMileTravelString: "1.8 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-27 00:00:00",
                opened: true,
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg",
                    },
                ],
            },
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "pureveg",
                                    imageId:
                                        "v1695133679/badges/Pure_Veg111.png",
                                },
                            },
                        ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/bikanervala-ring-road-rohini-delhi-40415",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "280449",
            name: "Chicago Pizza",
            cloudinaryImageId: "4f9afba9112485d52b7c706ff07d0b97",
            locality: "Subhash Nagar",
            areaName: "Tagore Garden",
            costForTwo: "₹200 for two",
            cuisines: ["Fast Food", "Pizzas"],
            avgRating: 3.8,
            parentId: "60277",
            avgRatingString: "3.8",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 45,
                lastMileTravel: 9.5,
                serviceability: "SERVICEABLE",
                slaString: "45 mins",
                lastMileTravelString: "9.5 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-26 22:45:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹199",
                discountTag: "FLAT DEAL",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/chicago-pizza-subhash-nagar-tagore-garden-delhi-280449",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "326440",
            name: "Punjabi Angithi (Vegorama Group)",
            cloudinaryImageId: "g2pklvjnapzfoc4ackou",
            locality: "Paschim Vihar",
            areaName: "Paschim Vihar",
            costForTwo: "₹400 for two",
            cuisines: [
                "North Indian",
                "Chinese",
                "Punjabi",
                "Kebabs",
                "Tandoor",
            ],
            avgRating: 4.2,
            veg: true,
            parentId: "465050",
            avgRatingString: "4.2",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 30,
                lastMileTravel: 5,
                serviceability: "SERVICEABLE",
                slaString: "30 mins",
                lastMileTravelString: "5.0 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-26 23:00:00",
                opened: true,
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg",
                    },
                ],
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C",
                    },
                ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "pureveg",
                                    imageId:
                                        "v1695133679/badges/Pure_Veg111.png",
                                },
                            },
                        ],
                    },
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available",
                                },
                            },
                        ],
                    },
                },
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹199",
                discountTag: "FLAT DEAL",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/punjabi-angithi-vegorama-group-paschim-vihar-delhi-326440",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "341033",
            name: "Bakingo",
            cloudinaryImageId: "05994df0e49725bd230146c320b8f7aa",
            locality: "Rithala",
            areaName: "Rohini",
            costForTwo: "₹300 for two",
            cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
            avgRating: 4.4,
            parentId: "3818",
            avgRatingString: "4.4",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 24,
                lastMileTravel: 3,
                serviceability: "SERVICEABLE",
                slaString: "24 mins",
                lastMileTravelString: "3.0 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-27 00:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/bakingo-rithala-rohini-delhi-341033",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "26723",
            name: "KFC",
            cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
            locality: "Sector 3",
            areaName: "Rohini",
            costForTwo: "₹400 for two",
            cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
            avgRating: 4.2,
            parentId: "547",
            avgRatingString: "4.2",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 19,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "19 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-27 05:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "40% OFF",
                subHeader: "UPTO ₹80",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/kfc-sector-3-rohini-delhi-26723",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "253731",
            name: "McDonald's",
            cloudinaryImageId: "ecd32b841549ce6bfd993260a2086c1f",
            locality: "Sector 3",
            areaName: "Rohini",
            costForTwo: "₹400 for two",
            cuisines: ["American"],
            avgRating: 4.4,
            parentId: "630",
            avgRatingString: "4.4",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 24,
                lastMileTravel: 2.2,
                serviceability: "SERVICEABLE",
                slaString: "24 mins",
                lastMileTravelString: "2.2 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-26 23:45:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "FREE ITEM",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/mcdonalds-sector-3-rohini-delhi-253731",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "55473",
            name: "Pizza Hut",
            cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
            locality: "Sector 10",
            areaName: "Rohini",
            costForTwo: "₹350 for two",
            cuisines: ["Pizzas"],
            avgRating: 3.9,
            parentId: "721",
            avgRatingString: "3.9",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 30,
                lastMileTravel: 2.3,
                serviceability: "SERVICEABLE",
                slaString: "30 mins",
                lastMileTravelString: "2.3 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-27 04:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "60% OFF",
                subHeader: "UPTO ₹120",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/pizza-hut-sector-10-rohini-delhi-55473",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "10392",
            name: "Subway",
            cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
            locality: "Sector 3",
            areaName: "Rohini",
            costForTwo: "₹350 for two",
            cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
            avgRating: 4.1,
            parentId: "2",
            avgRatingString: "4.1",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 23,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "23 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-27 04:00:00",
                opened: true,
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C",
                    },
                ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available",
                                },
                            },
                        ],
                    },
                },
            },
            aggregatedDiscountInfoV3: {
                header: "40% OFF",
                subHeader: "UPTO ₹80",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/subway-sector-3-rohini-delhi-10392",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "10208",
            name: "Burger King",
            cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            locality: "Sector 10",
            areaName: "Rohini",
            costForTwo: "₹350 for two",
            cuisines: ["Burgers", "American"],
            avgRating: 4.3,
            parentId: "166",
            avgRatingString: "4.3",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 21,
                lastMileTravel: 2.3,
                serviceability: "SERVICEABLE",
                slaString: "21 mins",
                lastMileTravelString: "2.3 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-27 06:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹129",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/burger-king-sector-10-rohini-delhi-10208",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "24162",
            name: "Domino's Pizza",
            cloudinaryImageId: "oiw7cx0apvp7as1oxufg",
            locality: "Rohini",
            areaName: "Rohini",
            costForTwo: "₹400 for two",
            cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
            avgRating: 4.5,
            parentId: "2456",
            avgRatingString: "4.5",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 28,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "28 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-27 03:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "₹150 OFF",
                subHeader: "ABOVE ₹299",
                discountTag: "FLAT DEAL",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/dominos-pizza-rohini-delhi-24162",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "239435",
            name: "La Pino'z Pizza",
            cloudinaryImageId: "tolejbnae10pq0udbavn",
            locality: "New delhi",
            areaName: "Paschim Vihar",
            costForTwo: "₹350 for two",
            cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
            avgRating: 4.1,
            parentId: "4961",
            avgRatingString: "4.1",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 29,
                lastMileTravel: 5,
                serviceability: "SERVICEABLE",
                slaString: "29 mins",
                lastMileTravelString: "5.0 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-27 05:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "60% OFF",
                subHeader: "UPTO ₹120",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-new-paschim-vihar-delhi-239435",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "58215",
            name: "Theobroma",
            cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
            locality: "Punjabi Bagh",
            areaName: "Punjabi Bagh",
            costForTwo: "₹400 for two",
            cuisines: ["Bakery", "Desserts"],
            avgRating: 4.6,
            parentId: "1040",
            avgRatingString: "4.6",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 33,
                lastMileTravel: 7.4,
                serviceability: "SERVICEABLE",
                slaString: "33 mins",
                lastMileTravelString: "7.4 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-26 23:59:00",
                opened: true,
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "newg.png",
                        description: "Gourmet",
                    },
                ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "Gourmet",
                                    imageId: "newg.png",
                                },
                            },
                        ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "40% OFF",
                discountTag: "FLAT DEAL",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/theobroma-punjabi-bagh-delhi-58215",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "295598",
            name: "Natural Ice Cream",
            cloudinaryImageId: "myema8clt6ccf0oztxvz",
            locality: "Aggarwal Millenium Tower",
            areaName: "Netaji Subhash Place",
            costForTwo: "₹150 for two",
            cuisines: ["Ice Cream", "Desserts"],
            avgRating: 4.7,
            veg: true,
            parentId: "2093",
            avgRatingString: "4.7",
            totalRatingsString: "1K+",
            sla: {
                deliveryTime: 25,
                lastMileTravel: 6.7,
                serviceability: "SERVICEABLE",
                slaString: "25 mins",
                lastMileTravelString: "6.7 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-27 00:45:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/natural-ice-cream-aggarwal-millenium-tower-netaji-subhash-place-delhi-295598",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "101657",
            name: "NIC Ice Creams",
            cloudinaryImageId: "85825a6d74b1059a63a9b688de9f67ce",
            locality: "Sector 7",
            areaName: "Rohini",
            costForTwo: "₹120 for two",
            cuisines: ["Ice Cream", "Desserts"],
            avgRating: 4.5,
            veg: true,
            parentId: "6249",
            avgRatingString: "4.5",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 17,
                lastMileTravel: 1.7,
                serviceability: "SERVICEABLE",
                slaString: "17 mins",
                lastMileTravelString: "1.7 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-27 00:00:00",
                opened: true,
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "brand",
                        fontColor: "#7E808C",
                    },
                ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "brand",
                                },
                            },
                        ],
                    },
                },
            },
            aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹149",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/nic-ice-creams-sector-7-rohini-delhi-101657",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "15846",
            name: "Faasos - Wraps, Rolls & Shawarma",
            cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
            locality: "Sector 8",
            areaName: "Rohini",
            costForTwo: "₹200 for two",
            cuisines: [
                "Kebabs",
                "Fast Food",
                "Snacks",
                "American",
                "Healthy Food",
                "Desserts",
                "Beverages",
            ],
            avgRating: 4.3,
            parentId: "21809",
            avgRatingString: "4.3",
            totalRatingsString: "10K+",
            sla: {
                deliveryTime: 30,
                lastMileTravel: 2.7,
                serviceability: "SERVICEABLE",
                slaString: "30 mins",
                lastMileTravelString: "2.7 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-26 23:59:00",
                opened: true,
            },
            badges: {
                textExtendedBadges: [
                    {
                        iconId: "guiltfree/GF_Logo_android_3x",
                        shortDescription: "options available",
                        fontColor: "#7E808C",
                    },
                ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "",
                                    fontColor: "#7E808C",
                                    iconId: "guiltfree/GF_Logo_android_3x",
                                    shortDescription: "options available",
                                },
                            },
                        ],
                    },
                },
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹199",
                discountTag: "FLAT DEAL",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-sector-8-rohini-delhi-15846",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "22490",
            name: "Pikwik Since 1991",
            cloudinaryImageId: "poh1opazxy5csaflmftz",
            locality: "Rohini",
            areaName: "Rohini",
            costForTwo: "₹600 for two",
            cuisines: ["North Indian", "Chinese", "Continental"],
            avgRating: 4.2,
            parentId: "7462",
            avgRatingString: "4.2",
            totalRatingsString: "5K+",
            sla: {
                deliveryTime: 21,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "21 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-01-26 23:59:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹249",
                discountTag: "FLAT DEAL",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
            link: "https://www.swiggy.com/restaurants/pikwik-since-1991-rohini-delhi-22490",
            type: "WEBLINK",
        },
    },
];

const Body = () => (
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            {resList.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}
        </div>
    </div>
);

const AppLayout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
