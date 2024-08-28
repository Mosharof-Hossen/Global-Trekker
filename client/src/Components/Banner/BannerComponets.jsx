
import PropTypes from 'prop-types';

const BannerComponets = (data) => {
    const { image, title, description } = data
    return (
        <div
            className="hero h-full"
            style={{
                backgroundImage: `url(${image})`,
            }}>
            <div className="hero-overlay "></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md dark:text-gray-900">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5 text-2xl font-semibold">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

BannerComponets.propTypes = {
    data: PropTypes.object,
};

export default BannerComponets;