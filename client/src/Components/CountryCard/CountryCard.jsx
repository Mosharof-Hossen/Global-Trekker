
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
    const {  country_name, image, short_description } = country
    return (
        <Link to={`/country-spot/${country_name}`}>
            <div
                className="hero rounded w-full aspect-square "
                style={{
                    backgroundImage: `url(${image})`,
                }}>
                <div className="hero-overlay bg-opacity-50 rounded" style={{

                }}>

                </div>
                <div className="hero-content text-neutral-content text-center " >
                    <div className="max-w-md">
                        <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold">{country_name}</h1>
                        <p className="mb-5">
                            {short_description}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

CountryCard.propTypes = {
    country: PropTypes.object.isRequired,
};

export default CountryCard;