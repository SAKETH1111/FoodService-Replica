import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
    const [restInfo, setRestInfo] = useState(null);
    const [showItems,setShowItems]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);
    const {resId}= useParams();
    console.log(resId);
    //329070
    const fetchMenu = async () => {
        const data= await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
            );
        const json = await data.json();
        console.log("json");
        console.log(json);
        setRestInfo(json.data);
    };
    if(restInfo==null) return <Shimmer></Shimmer>
    const {id, name, cuisines, avgRating,cloudinaryImageId,costForTwoMessage} = restInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log("itemCards");
    console.log (itemCards);

    const categories = restInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((item)=>
        item?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log("restInfo",categories);

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h2 className="font-bold text-lg">{cuisines.join(", ")}</h2>

            {/* <h2>Cost: {costForTwoMessage}</h2>
            <h2>Rating : {avgRating}</h2>
            <h2>Menu</h2> */}
            {/* <h2>{itemCards[0].card.info.name}</h2> */}
            {/* <ul>
                {
                itemCards.map((item)=>
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs {item?.card?.info?.price/100 || item?.card?.info?.defualtprice/100}</li>
                
                )
                }
            </ul> */}
               {
                categories.map((category, index)=> 
                <RestaurantCategory 
                key= {category?.card?.card.title} 
                data = {category?.card?.card}
                showItems = {index==showItems ? true : false}
                setShowItems = {() => setShowItems(index)}
                
                />)
            }
        </div>
    )
}

export default RestaurantMenu;