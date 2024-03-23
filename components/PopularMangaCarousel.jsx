'use client';
import Manga from './Manga';

// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import require modules
import { Pagination } from 'swiper/modules';

const PopularMangaCarousel = ({ mangas }) => {
    return (
        <Swiper 
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
                640: {slidesPerView: 1 },
                768: {slidesPerView: 2 },
                960: {slidesPerView: 3 },
                1440: {slidesPerView: 4 },
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className='popular-manga-slider mb-8'
        >
            {mangas.map(manga =>{
                return (
                    <SwiperSlide key={manga._id}>
                        <Manga manga={manga} />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default PopularMangaCarousel;