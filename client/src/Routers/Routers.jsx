import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Spots from "../Pages/Spots/Spots";
import AddTouristsSpot from "../Pages/AddRouriestsSpot/AddRouriestsSpot";
import MyList from "../Pages/MyList/MyList";
import PrivateRoute from "./PrivateRoute";
import AllTouristsSpot from "../Pages/AllTouristsSpot/AllTouristsSpot";
import SpotDetails from "../Components/SpotDetails/SpotDetails";
import UpdateSpot from "../Pages/UpdateSpot/UpdateSpot";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:3000/spots")
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
                path: "/spots",
                element: <Spots></Spots>
            },
            {
                path: "/add-tourists-spot",
                element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>
            },
            {
                path: "/my-lists",
                element: <PrivateRoute><MyList></MyList></PrivateRoute>
            },
            {
                path: "/all-tourists-spot",
                element: <AllTouristsSpot></AllTouristsSpot>,
                loader: () => fetch("http://localhost:3000/spots")
            },
            {
                path: "/spot-details/:id",
                element: <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/spot/${params.id}`)
            },
            {
                path: "/update/:id",
                element: <UpdateSpot></UpdateSpot>,
                loader: ({ params }) => fetch(`http://localhost:3000/spot/${params.id}`)
            }


        ]
    }
])

export default router;