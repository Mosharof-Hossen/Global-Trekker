// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./banner.css"


import bangladesh from "../../assets/Banner Images/bangladesh.jpg"
import thiland from "../../assets/Banner Images/Thailand.jpg"
import indronesia from "../../assets/Banner Images/indoneshia.jpg"
import malaysia from "../../assets/Banner Images/Malaysia.jpg"
import vietnam from "../../assets/Banner Images/Vietnam.jpg"
import cambodia from "../../assets/Banner Images/Cambodia.jpg"

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import BannerComponets from './BannerComponets';
const Banner = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper "
        >
            <SwiperSlide>

                <BannerComponets image={bangladesh} title={"Sundarban, Bangladesh"} description={"Explore the World’s Largest Mangrove Forest."}></BannerComponets>
            </SwiperSlide>
            <SwiperSlide>
                <BannerComponets image={thiland} title={"Phi Phi Islands, Thailand"} description={"Dive into the Pristine Waters of Thailand."}></BannerComponets>
            </SwiperSlide>
            <SwiperSlide>
                <BannerComponets image={indronesia} title={"Bali, Indonesia "} description={"Discover the Island of Gods."}></BannerComponets>
            </SwiperSlide>
            <SwiperSlide>
                <BannerComponets image={malaysia} title={"Langkawi, Malaysia"} description={"Experience Paradise on Earth."}></BannerComponets>
            </SwiperSlide>
            <SwiperSlide>
                <BannerComponets image={vietnam} title={"Ha Long Bay, Vietnam "} description={"Sail through the Emerald Waters of Vietnam."}></BannerComponets>
            </SwiperSlide>
            <SwiperSlide>
                <BannerComponets image={cambodia} title={"Angkor Wat, Cambodia"} description={"Uncover the Mysteries of the Ancient Khmer Empire."}></BannerComponets>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;