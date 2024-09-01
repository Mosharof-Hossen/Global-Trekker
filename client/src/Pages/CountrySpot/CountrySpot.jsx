import { useLoaderData } from "react-router-dom";
import SpotCard from "../../Components/SpotCard/SpotCard";

const CountrySpot = () => {
    const spots = useLoaderData();
    console.log(spots);
    return (
        <div>
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

export default CountrySpot;