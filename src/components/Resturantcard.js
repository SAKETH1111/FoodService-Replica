import { REST_URL } from "../utils/constants";
const Resturantcard = (props) => {
    const {restName, cuisine, rating, cost, restImage} = props;
    
    return (
        <div className="m-4 p-4 w-[250px] h-[450px] bg-gray-50 hover:bg-gray-200 sm:bg-yellow-100" >
            <img
            className="m-2 w-[200px] h-[200px] rounded-lg"
            alt="res-logo"
            src={REST_URL+restImage}
            />
            <h3 className="m-2 font-bold text-lg">{restName}</h3>
            <h4 className="m-2">Cuisune: {cuisine.join(", ")}</h4>
            <h4 className="m-2">Rating: {rating}</h4>
            <h4 className="m-2">Cost: {cost}</h4>
        </div>
    )
}

export const HighOrderRestaurantComponent = (Resturantcard) => {
    console.log("I am in high order");
    return (props) => {
        return (
        <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Veg</label>
        <Resturantcard {...props}/>
        </div>
        )
    }

}
export default Resturantcard;