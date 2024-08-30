import { useLoaderData } from "react-router-dom";
import SpotCard from "../../Components/SpotCard/SpotCard";


const AllTouristsSpot = () => {
    const spots = useLoaderData();
    return (
        <div className="dark:bg-gray-900">
            <div className="my-10">
                <h2 className="text-center font-bold text-3xl dark:text-white">See Destination You Will <br /> Love To Visit</h2>
            </div>

            <div className=" p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                {
                    spots.map((spot) => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;