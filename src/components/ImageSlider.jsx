
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const ImageSlider = ({images}) => {
    
  return (
    <div>
    
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
            {
                images.map( (i) => (
                    <SwiperSlide key={i.id} >
                        <img src={i.url} alt={i.id} />
                    </SwiperSlide>
                ) )
            }
        </Swiper>
        
    </div>
  )
}

export default ImageSlider