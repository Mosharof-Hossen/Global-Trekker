import { FaLocationDot, FaMoneyBill, FaPeopleGroup } from "react-icons/fa6";
import { FaRegCalendarAlt, FaTimes } from "react-icons/fa";
import PropTypes from 'prop-types';

const SpotCard = ({ spot }) => {
    const { _id, spotName, countryName, photoUrl, averageCost, totalVisitorsPerYear, travelTime, seasonality } = spot;
    console.log(spot);
    return (
        <div className="card bg-base-100  rounded shadow-xl">
            <figure>
                <img
                    src={photoUrl}
                    alt="Shoes" />
            </figure>
            <div className="p-5 space-y-5">
                <p className="flex space-x-1 items-center text-sm text-gray-500"><FaLocationDot></FaLocationDot> <span>{countryName}</span></p>
                <h2 className="text-2xl font-semibold">{spotName}</h2>
                <hr className="my-3" />
                <div>
                    <p className="text-gray-500 flex space-x-1"><span className="flex items-center space-x-1"><FaRegCalendarAlt /> <span>No fo Days: {travelTime} | </span></span> <span className="flex items-center space-x-1"><FaPeopleGroup></FaPeopleGroup> <span>Visitor: {parseInt(totalVisitorsPerYear / 1000)}K<sub>y</sub></span></span></p>
                </div>
                <div className="card-actions flex justify-between">
                    <h1 className="text-3xl font-bold">${averageCost}</h1>
                    <button className="px-3 py-2 bg-primary-c text-white rounded">View Details</button>
                </div>
            </div>
        </div>
    );
};

SpotCard.propTypes = {
    spot: PropTypes.object.isRequired
};

export default SpotCard;