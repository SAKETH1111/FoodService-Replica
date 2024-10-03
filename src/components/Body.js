import Resturantcard, {HighOrderRestaurantComponent} from "./Resturantcard";
import { useState , useEffect, useContext} from "react";
import restData from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
// State variable, Super powerful.


// NORMAL JS variable. The UI does not update as the data changes.
// let restData1 = [
//     {
//         id:10,
//         restName:"Meghana Food",
//         cuisine:"Biryani, South India, Asian",
//         rating: 4.5,
//         cost: 200
//     },
//     {
//         id:20,
//         restName:"KFC Food",
//         cuisine:"Chicken, Tenders, Fast food",
//         rating: 2.5,
//         cost: 400
//     },
//     {
//         id:30,
//         restName:"MCD Food",
//         cuisine:"Chicken, Tenders, Fast food",
//         rating: 4.2,
//         cost: 400
//     } 
// ] 

const Body = () => {
    const [restaurantData, setRestaurantData]= useState([]);
    const [filteredRestaurant, setFilteredRestaurant]= useState([]);
    const [searchText, setSearchText]= useState("");
    const RestaurantCardPromoted = HighOrderRestaurantComponent(Resturantcard);
    useEffect(()=>{
        fetchData();
    },[]);

    console.log("body render");

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        console.log("json", json);
        setRestaurantData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(restaurantData.length==0){
        return <Shimmer></Shimmer>;
    }
    const {setUserName,loggedInUser}= useContext(UserContext);

    return  restaurantData.length==0 ? <Shimmer/> : (

        <div className="body">
            <div className="flex">
                <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black m-4" value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                    ></input>
                    <button className="px-4 py-1 m-2 bg-green-100 rounded-lg"  
                    onClick={()=> {
                        const filteredList = restaurantData.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredList);
                    }}
                    >Search</button>
                </div>
                <div className="flex items-center">
                <button className="bg-green-100 px-4 py-1 m-4 rounded-lg" onClick={()=>{
                setRestaurantData(restaurantData.filter((restaurant) => 
                restaurant?.info?.avgRating > 4.5 ));
                }}
                > Top Rated Restaurants</button>
                </div>
                <div className="flex items-center">
                    <label>User Name</label>
                <input type="text" className="border border-solid border-black m-4 p-2" value={loggedInUser}
                    onChange={(e)=>{
                        setUserName(e.target.value);
                    }}
                    ></input>                </div>

            </div>
            <div className="flex flex-wrap">
                {console.log(filteredRestaurant)}
                {filteredRestaurant.map(restaurant=> 
                <Link key= {restaurant?.info?.id} to={"/restaurants/"+ restaurant?.info?.id}>
                {restaurant?.info?.veg  
                
                ? 

                <RestaurantCardPromoted 
                restImage={restaurant?.info?.cloudinaryImageId}
                restName={restaurant?.info?.name}
                cuisine={restaurant?.info?.cuisines}
                rating={restaurant?.info?.avgRating}
                cost={restaurant?.info?.costForTwo}
                />
                
                :
                <Resturantcard 
                restImage={restaurant?.info?.cloudinaryImageId}
                restName={restaurant?.info?.name}
                cuisine={restaurant?.info?.cuisines}
                rating={restaurant?.info?.avgRating}
                cost={restaurant?.info?.costForTwo}
                />
                }


                </Link>
                )}
                {/* <Resturantcard restName={restData[0].restName} cuisine="Biryani, South India, Asian"/>
                <Resturantcard restName="KFC Food" cuisine="Chicken, Tenders, Fast food"/> */}

            </div>
        </div>
    )
}

export default Body;