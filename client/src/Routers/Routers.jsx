import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Spots from "../Pages/Spots/Spots";
import AddTouristsSpot from "../Pages/AddRouriestsSpot/AddRouriestsSpot";
import MyList from "../Pages/MyList/MyList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path:"/spots",
                element:<Spots></Spots>
            },
            {
                path:"/add-tourists-spot",
                element:<AddTouristsSpot></AddTouristsSpot>
            },
            {
                path:"/my-lists",
                element:<MyList></MyList>
            }

        ]
    }
])

export default router;