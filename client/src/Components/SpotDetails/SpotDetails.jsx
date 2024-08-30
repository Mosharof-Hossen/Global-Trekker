import { FaCircleDollarToSlot, FaLocationDot, FaPeopleRobbery, FaRegUser } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaCalendarAlt } from "react-icons/fa";

const SpotDetails = () => {
    const spot = useLoaderData()
    const { averageCost, countryName, description, location, photoUrl, seasonality, spotName, totalVisitorsPerYear, travelTime, userEmail, userName } = spot;
    console.log(spot);
    return (
        <div className="grid grid-cols-3 dark:bg-gray-900">
            <div className="space-y-4 md:col-span-2 col-span-3 p-10 text-center dark:text-white">
                <img src={photoUrl} className="rounded" alt="" />
                <p className="text-2xl font-bold">{spotName}</p>
                <h3 className="text-xl ">{countryName}</h3>
                <p className="text-justify text-sm">{description}</p>
            </div>
            <div className="col-span-3 md:col-span-1 md:py-10 px-10 md:px-0 dark:text-white space-y-5">

                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Spot Info</h2>
                    <p className="flex items-center gap-1 font-bold"><FaLocationDot></FaLocationDot><span>Location: </span > <span className="font-normal">{location}</span></p>
                    <p className="flex items-center gap-1 font-bold"><FaCircleDollarToSlot></FaCircleDollarToSlot><span>Average Cost: </span > <span className="font-normal">{averageCost} $</span></p>
                    <p className="flex items-center gap-1 font-bold"><TiWeatherCloudy /><span>Seasonality: </span > <span className="font-normal">{seasonality}</span></p>
                    <p className="flex items-center gap-1 font-bold"><FaPeopleRobbery /><span>Total Visitor Per Year: </span > <span className="font-normal">{totalVisitorsPerYear}</span></p>
                    <p className="flex items-center gap-1 font-bold"><FaCalendarAlt /><span>No. Of Days: </span > <span className="font-normal">{travelTime}</span></p>
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Post Creator Info</h2>
                    <p className="flex items-center gap-1 font-bold"><FaRegUser></FaRegUser> <span>User: </span > <span className="font-normal">{userName}</span></p>
                    <p className="flex items-center gap-1 font-bold"><MdEmail /> <span>Email: </span > <span className="font-normal">{userEmail}</span></p>
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;