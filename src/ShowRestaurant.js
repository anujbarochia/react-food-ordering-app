import React from "react";
import Restaurant from "./RestaurantCard.js";

const restaurantList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "552257",
          name: "La Pino'z Pizza",
          cloudinaryImageId: "bnygzmd7gwucwdjvka9d",
          locality: "Kudasan",
          areaName: "PDPU",
          costForTwo: "₹150 for two",
          cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
          avgRating: 4,
          veg: true,
          feeDetails: {
            restaurantId: "552257",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 5800,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 5800,
          },
          parentId: "4961",
          avgRatingString: "4.0",
          totalRatingsString: "500+",
          promoted: true,
          adTrackingId:
            "cid=9703677~p=4~eid=0000018c-24e9-a13c-1578-9da70060043c~srvts=1701426340156~83644",
          sla: {
            deliveryTime: 32,
            lastMileTravel: 6.3,
            serviceability: "SERVICEABLE",
            slaString: "32 mins",
            lastMileTravelString: "6.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-12-01 23:00:00",
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
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "pureveg",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹699",
            discountTag: "FLAT DEAL",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
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
          link: "swiggy://menu?restaurant_id=552257&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "402179",
          name: "La Milano Pizzeria",
          cloudinaryImageId: "0d17a8b63de35b7421e1a3fa4502027c",
          locality: "Gandhinagar",
          areaName: "Bhat",
          costForTwo: "₹400 for two",
          cuisines: ["Italian", "Pizzas", "Pastas"],
          avgRating: 4,
          veg: true,
          feeDetails: {
            restaurantId: "402179",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 5800,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 5800,
          },
          parentId: "22533",
          avgRatingString: "4.0",
          totalRatingsString: "500+",
          promoted: true,
          adTrackingId:
            "cid=9691501~p=5~eid=0000018c-24e9-a13c-1578-9da80060051b~srvts=1701426340156~83644",
          sla: {
            deliveryTime: 30,
            lastMileTravel: 6.7,
            serviceability: "SERVICEABLE",
            slaString: "30 mins",
            lastMileTravelString: "6.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-12-02 02:00:00",
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
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
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
          link: "swiggy://menu?restaurant_id=402179&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "518104",
          name: "The Fusion Pizza",
          cloudinaryImageId: "bvzh3ientkrtkm9xlw4h",
          locality: "Kudasan",
          areaName: "Airport Gandhinagar Highway",
          costForTwo: "₹200 for two",
          cuisines: ["Pizzas", "Fast Food", "Snacks"],
          avgRating: 3.9,
          veg: true,
          feeDetails: {
            restaurantId: "518104",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 5800,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 5800,
          },
          parentId: "7585",
          avgRatingString: "3.9",
          totalRatingsString: "1K+",
          promoted: true,
          adTrackingId:
            "cid=9738180~p=8~eid=0000018c-24e9-a13c-1578-9dab00600875~srvts=1701426340156~83644",
          sla: {
            deliveryTime: 32,
            lastMileTravel: 6.3,
            serviceability: "SERVICEABLE",
            slaString: "32 mins",
            lastMileTravelString: "6.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-12-01 23:59:00",
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
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "pureveg",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
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
          link: "swiggy://menu?restaurant_id=518104&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "747716",
          name: "Puffizza",
          cloudinaryImageId: "097b037e2afe8b5eebfd16627c0b8c89",
          locality: "Chandkheda",
          areaName: "Bhat",
          costForTwo: "₹400 for two",
          cuisines: ["Pizzas", "Snacks", "Beverages", "Pastas", "Desserts"],
          avgRating: 3.6,
          veg: true,
          feeDetails: {
            restaurantId: "747716",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 5800,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 5800,
          },
          parentId: "4940",
          avgRatingString: "3.6",
          totalRatingsString: "20+",
          promoted: true,
          adTrackingId:
            "cid=9736308~p=9~eid=0000018c-24e9-a13c-1578-9dac0060094a~srvts=1701426340156~83644",
          sla: {
            deliveryTime: 32,
            lastMileTravel: 6.8,
            serviceability: "SERVICEABLE",
            slaString: "32 mins",
            lastMileTravelString: "6.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-12-02 02:55:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
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
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=747716&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "570633",
          name: "Pizza Park",
          cloudinaryImageId: "cn7uv5rxgxjaituyf2ln",
          locality: "Sarthak Plus Mall",
          areaName: "Gandhinagar",
          costForTwo: "₹400 for two",
          cuisines: ["Pizzas", "Desserts", "Beverages"],
          avgRating: 4,
          veg: true,
          feeDetails: {
            restaurantId: "570633",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 5800,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 5800,
          },
          parentId: "158823",
          avgRatingString: "4.0",
          totalRatingsString: "6",
          promoted: true,
          adTrackingId:
            "cid=9612707~p=10~eid=0000018c-24e9-a13c-1578-9dad00600a78~srvts=1701426340156~83644",
          sla: {
            deliveryTime: 39,
            lastMileTravel: 6.3,
            serviceability: "SERVICEABLE",
            slaString: "39 mins",
            lastMileTravelString: "6.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-12-01 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "25% OFF",
            subHeader: "ABOVE ₹149",
            discountTag: "FLAT DEAL",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
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
          link: "swiggy://menu?restaurant_id=570633&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "484273",
          name: "Pizzagram Chandkheda",
          cloudinaryImageId: "u6tlmiwci1bcjmywmkba",
          locality: "Chandkheda",
          areaName: "Chandkheda",
          costForTwo: "₹350 for two",
          cuisines: ["Italian", "American", "Pizzas", "Italian-American"],
          veg: true,
          feeDetails: {
            restaurantId: "484273",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 4100,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 4100,
          },
          parentId: "291148",
          avgRatingString: "--",
          sla: {
            deliveryTime: 24,
            lastMileTravel: 4.1,
            serviceability: "SERVICEABLE",
            slaString: "24 mins",
            lastMileTravelString: "4.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-12-01 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
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
          link: "swiggy://menu?restaurant_id=484273&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "657433",
          name: "US Pizza",
          cloudinaryImageId: "i5a2afslcerylpei0olq",
          locality: "C T ROAD",
          areaName: "Chandkheda",
          costForTwo: "₹500 for two",
          cuisines: ["Pizzas", "Fast Food"],
          avgRating: 4.3,
          veg: true,
          feeDetails: {
            restaurantId: "657433",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 5300,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 5300,
          },
          parentId: "218816",
          avgRatingString: "4.3",
          totalRatingsString: "10+",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "28 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-12-01 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹150 OFF",
            subHeader: "ABOVE ₹999",
            discountTag: "FLAT DEAL",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
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
          link: "swiggy://menu?restaurant_id=657433&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "220652",
          name: "Pizza Hut",
          cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
          locality: "Chandkheda",
          areaName: "Chandkheda",
          costForTwo: "₹300 for two",
          cuisines: ["Pizzas"],
          avgRating: 3.5,
          feeDetails: {
            restaurantId: "220652",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 5800,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 5800,
          },
          parentId: "721",
          avgRatingString: "3.5",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 31,
            lastMileTravel: 6,
            serviceability: "SERVICEABLE",
            slaString: "31 mins",
            lastMileTravelString: "6.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-12-02 03:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
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
          link: "swiggy://menu?restaurant_id=220652&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

function ShowRestaurant() {
  return (
    <>
      {restaurantList.map((object) => (
        <Restaurant key={object.card.card.info.id} obj={object} />
      ))}
    </>
  );
}

export default ShowRestaurant;
