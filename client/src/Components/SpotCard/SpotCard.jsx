
import PropTypes from 'prop-types';

const SpotCard = ({ spot }) => {
    const { _id, spotName, photoUrl, averageCost, totalVisitorsPerYear, travelTime, seasonality } = spot;
    console.log(spot);
    return (
        <div className="card bg-base-100 rounded shadow-xl">
            <figure>
                <img
                    src={photoUrl}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

SpotCard.propTypes = {
    spot: PropTypes.object.isRequired
};

export default SpotCard;