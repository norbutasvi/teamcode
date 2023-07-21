
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/swiper.css';

import Slideshow_one from './images/slideshow1.jpg';
import Slideshow_two from './images/slideshow2.jpg';

function Slideshow() {
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
                <img className="slide-img" src={Slideshow_one} />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide'>
                <img className="slide-img" src={Slideshow_two} />
            </div>
        </SwiperSlide>
        </Swiper>
    )
}

export default Slideshow;