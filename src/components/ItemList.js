const ItemList = ({items}) => {
    console.log("it",items);
return (
    <div>
        {
        items.map((item) => (
            <div className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between" key={item.card.info.id} >
                <div className="w-10/12">
                    <div className="py-2 " >
                        <span >{item.card.info.name} - </span>
                        <span> ₹ {item.card.info.price/100}</span>
                    </div>  
                    <p className="text-xs"> {item.card.info.description} </p> 
                </div>  
                <div className="w-2/12 p-1 m-1">
                    <div className="absolute mx-8">
                    <button className=" bg-black text-white  rounded-lg p-2 shadow-lg">ADD +</button>
                    </div>
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+item.card.info.imageId}></img>
                </div>
            </div>
            ))
        }
    </div>
);
}

export default ItemList;