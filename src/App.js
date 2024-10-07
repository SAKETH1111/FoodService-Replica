import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from  "./components/RestaurantMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
 /**
  * Header
  * - Logo
  * - Nav Items
  * Body
  * - Search
  * - restaurant catlogue
  *     - Name of Restaurant
  *     - Cuisunes, star rating , delivery etc.
  *     
  * Footer
  * - Copyroght
  * - Links
  * - Address
  * - Contact
  */
 const AppLayout = () => {

    const [userName, setUserName]=useState();
    useEffect(()=>{

        const data = {
            name: "Saketh Dasavathini",
        }
        setUserName(data.name);

    },[])
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
            <div className="app">
                <Header />
                {console.log("App Render")}
                <Outlet />

            </div>
            </UserContext.Provider>
        </Provider>
    // Body
    // Footer
    )
}
 const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path:"/cart",
                element: <Cart/>
            }

        ],
        errorElement: <Error/>
    },
    
 ])
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={appRouter} />);
