
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/swiper.css';

import Slideshow_one from './images/slideshow1.jpg';
import Graphics from './images/graphics.jpg';

function SlideshowTwo() {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation, Pagination]}
        >
        <SwiperSlide>
            <div className='slide'>
                <img className="slide-img-two" src={Graphics} />
            </div>
        </SwiperSlide>
        </Swiper>
    )
}

export default SlideshowTwo;