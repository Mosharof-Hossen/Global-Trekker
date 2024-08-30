import { useLoaderData } from "react-router-dom";
import SpotCard from "../../Components/SpotCard/SpotCard";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";


const AllTouristsSpot = () => {
    const spots = useLoaderData();
    const [spotsList, setSpotsList] = useState(spots);
    console.log(spotsList);
    const handleSorting = type => {
        if (type == "lowToHigh") {

            const lowToHighFiltered = [...spotsList]?.sort((a, b) => parseInt(a.averageCost) - parseInt(b.averageCost));
            setSpotsList(lowToHighFiltered);
            console.log(type);
        }
        else if (type == "HighToLow") {
            const highToLowFiltered = [...spotsList]?.sort((a, b) => parseInt(b.averageCost) - parseInt(a.averageCost));
            setSpotsList(highToLowFiltered);
            console.log(type);
        }
    }
    return (
        <div className="dark:bg-gray-900">
            <div className="py-10">
                <h2 className="text-center font-bold text-3xl dark:text-white">See Destination You Will <br /> Love To Visit</h2>
            </div>
            <div className="text-center my-3">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className=" btn m-1 w-52 rounded">Sort By <IoIosArrowDown /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded z-[1] ml-1 w-52 p-2 shadow">
                        <li ><a onClick={() => handleSorting("lowToHigh")}>Low to High (Cost)</a></li>
                        <li ><a onClick={() => handleSorting("HighToLow")}>High to Low (Cost)</a></li>
                    </ul>
                </div>
            </div>

            <div className=" p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    spotsList.map((spot) => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;