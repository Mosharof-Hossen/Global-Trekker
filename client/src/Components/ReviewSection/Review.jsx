// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './Review.css';

import reviewer1 from "../../assets/reviewer/member1.png"
import reviewer2 from "../../assets/reviewer/member2.png"
import reviewer3 from "../../assets/reviewer/member3.png"
import reviewer4 from "../../assets/reviewer/member4.png"
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Review = () => {
    return (
        <>
            <Swiper
                breakpoints={{
                    // When the window width is >= 640px (sm)
                    640: {
                        slidesPerView: 1,
                    },
                    // When the window width is >= 768px (md)
                    768: {
                        slidesPerView: 2,
                    },
                    // When the window width is >= 1024px (lg)
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper review-swiper rounded dark:bg-gray-900"
            >
                <SwiperSlide className='dark:bg-gray-900 dark:text-white'>
                    <div className='border p-6 rounded shadow-lg space-y-5 text-justify'>
                        <div className="avatar flex justify-start gap-3 items-center ">
                            <div className="w-10 rounded-full">
                                <img src={reviewer1} />
                            </div>
                            <h1 className='text-2xl font-bold'> Sarah Thompson</h1>
                        </div>
                        <p className='text-gray-500 dark:text-white '><RiDoubleQuotesL className='' /><span> An avid traveler with a passion for discovering hidden gems. Sarah loves sharing her experiences and tips on exploring lesser-known destinations around the world.</span><RiDoubleQuotesR /></p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='dark:bg-gray-900 dark:text-white'>
                    <div className='border p-6 rounded shadow-lg space-y-5 text-justify'>
                        <div className="avatar flex justify-start gap-3 items-center ">
                            <div className="w-10 rounded-full">
                                <img src={reviewer2} />
                            </div>
                            <h1 className='text-2xl font-bold'>David Martinez</h1>
                        </div>
                        <p className='text-gray-500 dark:text-white'><RiDoubleQuotesL className='' /><span>Michael is a history buff who enjoys immersing himself in the rich cultures and historical sites of the destinations he visits. He believes every place has a story to tell.</span><RiDoubleQuotesR /></p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='dark:bg-gray-900 dark:text-white'>
                    <div className='border p-6 rounded shadow-lg space-y-5 text-justify'>
                        <div className="avatar flex justify-start gap-3 items-center ">
                            <div className="w-10 rounded-full">
                                <img src={reviewer3} />
                            </div>
                            <h1 className='text-2xl font-bold'>David Martinez</h1>
                        </div>
                        <p className='text-gray-500 dark:text-white'><RiDoubleQuotesL className='' /><span>A foodie and adventure enthusiast, David enjoys exploring new cultures through their cuisine. He’s always on the lookout for the next great culinary adventure.</span><RiDoubleQuotesR /></p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='dark:bg-gray-900 dark:text-white'>
                    <div className='border p-6 rounded shadow-lg space-y-5 text-justify'>
                        <div className="avatar flex justify-start gap-3 items-center ">
                            <div className="w-10 rounded-full">
                                <img src={reviewer4} />
                            </div>
                            <h1 className='text-2xl font-bold'>Emily Johnson</h1>
                        </div>
                        <p className='text-gray-500 dark:text-white'><RiDoubleQuotesL className='' /><span>A travel blogger with a focus on sustainable tourism, Emily is dedicated to finding eco-friendly ways to explore the world without leaving a negative impact.</span><RiDoubleQuotesR /></p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='dark:bg-gray-900 dark:text-white'>
                    <div className='border p-6 rounded shadow-lg space-y-5 text-justify'>
                        <div className="avatar flex justify-start gap-3 items-center ">
                            <div className="w-10 rounded-full">
                                <img src={reviewer1} />
                            </div>
                            <h1 className='text-2xl font-bold'>Michael Lee</h1>
                        </div>
                        <p className='text-gray-500 dark:text-white'><RiDoubleQuotesL className='' /><span>Michael is a history buff who enjoys immersing himself in the rich cultures and historical sites of the destinations he visits. He believes every place has a story to tell.</span><RiDoubleQuotesR /></p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='dark:bg-gray-900 dark:text-white'>
                    <div className='border p-6 rounded shadow-lg space-y-5 text-justify'>
                        <div className="avatar flex justify-start gap-3 items-center ">
                            <div className="w-10 rounded-full">
                                <img src={reviewer2} />
                            </div>
                            <h1 className='text-2xl font-bold'>James Cooper</h1>
                        </div>
                        <p className='text-gray-500 dark:text-white'><RiDoubleQuotesL className='' /><span>An outdoor adventurer who loves hiking and camping. James is always ready to explore the great outdoors, from mountain trails to remote beaches.</span><RiDoubleQuotesR /></p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='dark:bg-gray-900 dark:text-white'>
                    <div className='border p-6 rounded shadow-lg space-y-5 text-justify'>
                        <div className="avatar flex justify-start gap-3 items-center ">
                            <div className="w-10 rounded-full">
                                <img src={reviewer3} />
                            </div>
                            <h1 className='text-2xl font-bold'>Maria Gonzalez</h1>
                        </div>
                        <p className='text-gray-500 dark:text-white'><RiDoubleQuotesL className='' /><span>A solo traveler with a passion for meeting new people. Maria’s travel experiences are all about connecting with locals and learning about their way of life.</span><RiDoubleQuotesR /></p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='dark:bg-gray-900 dark:text-white'>
                    <div className='border p-6 rounded shadow-lg space-y-5 text-justify'>
                        <div className="avatar flex justify-start gap-3 items-center ">
                            <div className="w-10 rounded-full">
                                <img src={reviewer4} />
                            </div>
                            <h1 className='text-2xl font-bold'>Olivia Brown</h1>
                        </div>
                        <p className='text-gray-500 dark:text-white'><RiDoubleQuotesL className='' /><span>A family travel expert who enjoys planning trips that are fun and educational for all ages. Olivia believes that travel is the best way to create lasting family memories.</span><RiDoubleQuotesR /></p>
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    )
};

export default Review;