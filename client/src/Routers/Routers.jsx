import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
// import Spots from "../Pages/Spots/Spots";
import AddTouristsSpot from "../Pages/AddRouriestsSpot/AddRouriestsSpot";
import MyList from "../Pages/MyList/MyList";
import PrivateRoute from "./PrivateRoute";
import AllTouristsSpot from "../Pages/AllTouristsSpot/AllTouristsSpot";
import SpotDetails from "../Components/SpotDetails/SpotDetails";
import UpdateSpot from "../Pages/UpdateSpot/UpdateSpot";
import CountrySpot from "../Pages/CountrySpot/CountrySpot";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://gotravel-silk.vercel.app/spots")
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
                loader: () => fetch("https://gotravel-silk.vercel.app/spots")
            },
            {
                path: "/spot-details/:id",
                element: <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://gotravel-silk.vercel.app/spot/${params.id}`)
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateSpot></UpdateSpot></PrivateRoute>,
                loader: ({ params }) => fetch(`https://gotravel-silk.vercel.app/spot/${params.id}`)
            },
            {
                path: "/country-spot/:country",
                element: <CountrySpot></CountrySpot>,
                loader: ({ params }) => fetch(`https://gotravel-silk.vercel.app/country-spots/${params.country}`)
            },
            {
                path: "/about-us",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/contact-us",
                element: <ContactUs></ContactUs>
            }
        ]
    }
])

export default router;