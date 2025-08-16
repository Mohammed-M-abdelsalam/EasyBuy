import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import img from '../../assets/images/home/home-slider-1.png'
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import './home-slider.css'

function HomeSlider(){
    return(
        <Swiper 
        modules={ [Pagination, Autoplay] }
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true}}
        >
            <SwiperSlide>
                <div className='relative max-h-80 after:bg-gradient-to-r after:from-primary-500 after:absolute after:inset-0'>
                    <div className='text-white w-full absolute top-1/2 transform -translate-y-1/2 z-10'>
                        <div className='container-style'>
                            <h2 className='text-2xl font-bold'>Fresh Products Delivered</h2>
                            <p className='my-5 text-sm'>Get 20% off your first order</p>
                            <div className='space-x-5'>
                                <button className='btn text-primary-500 bg-white'>Shop Now</button>
                                <button className='btn bg-transparent border-1'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='h-80'>
                        <img className='w-full h-full object-cover' src={img} alt="a pic of market" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative max-h-80 after:bg-gradient-to-r after:from-primary-500 after:absolute after:inset-0'>
                    <div className='text-white w-full absolute top-1/2 transform -translate-y-1/2 z-10'>
                        <div className='container-style'>
                            <h2 className='text-2xl font-bold'>Fresh Products Delivered</h2>
                            <p className='my-5 text-sm'>Get 20% off your first order</p>
                            <div className='space-x-5'>
                                <button className='btn text-primary-500 bg-white'>Shop Now</button>
                                <button className='btn bg-transparent border-1'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='h-80'>
                        <img className='w-full h-full object-cover' src={img} alt="a pic of market" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative max-h-80 after:bg-gradient-to-r after:from-primary-500 after:absolute after:inset-0'>
                    <div className='text-white w-full absolute top-1/2 transform -translate-y-1/2 z-10'>
                        <div className='container-style'>
                            <h2 className='text-2xl font-bold'>Fresh Products Delivered</h2>
                            <p className='my-5 text-sm'>Get 20% off your first order</p>
                            <div className='space-x-5'>
                                <button className='btn text-primary-500 bg-white'>Shop Now</button>
                                <button className='btn bg-transparent border-1'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='h-80'>
                        <img className='w-full h-full object-cover' src={img} alt="a pic of market" />
                    </div>
                </div>
                
            </SwiperSlide>
        </Swiper>
    )
}

export default HomeSlider