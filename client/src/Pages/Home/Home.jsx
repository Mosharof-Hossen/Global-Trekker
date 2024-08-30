import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import SpotCard from "../../Components/SpotCard/SpotCard";


const Home = () => {
    const spots = useLoaderData();
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
        </div>
    );
};

export default Home;