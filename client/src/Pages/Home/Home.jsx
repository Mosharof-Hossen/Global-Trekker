import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import SpotCard from "../../Components/SpotCard/SpotCard";
import { useEffect, useState } from "react";
import CountryCard from "../../Components/CountryCard/CountryCard";
import Review from "../../Components/ReviewSection/Review";


const Home = () => {
    const [country, setCountry] = useState([]);
    const spots = useLoaderData();

    useEffect(() => {
        fetch("http://localhost:3000/country")
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="dark:bg-gray-900">
                <div className="py-10 space-y-2">
                    <h2 className="text-center font-bold text-3xl dark:text-white">See Destination You Will <br /> Love To Visit</h2>
                    <p className="text-center dark:text-white">----- Lets Go -----</p>
                </div>

                <div className=" p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                    {
                        spots.map((spot) => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                    }
                </div>
            </div>

            <div className="dark:bg-gray-900">
                <div className="py-14 space-y-2">
                    <h2 className="text-center font-bold text-3xl md:px-20 lg:px-40 px-5 dark:text-white">Explore the World is Most Captivating Destinations</h2>
                    <p className="text-center dark:text-white md:px-20 lg:px-40 px-5">Journey through some of the world is most captivating destinations, each offering its own unique charm and allure.</p>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-2 gap-5 p-5 ">
                    {
                        country.map(info => <CountryCard key={info._id} country={info}></CountryCard>)
                    }
                </div>
            </div>


            <div className="dark:bg-gray-900">
                <div className="py-14 space-y-2">
                    <h2 className="text-center font-bold text-3xl md:px-20 lg:px-40 px-5 dark:text-white">Our Happy clients</h2>

                </div>
                <div className="p-5">
                    <Review></Review>
                </div>
            </div>


        </div>
    );
};

export default Home;