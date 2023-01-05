import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useState } from 'react'
import { MdEast, MdWest } from 'react-icons/md'
// import './style.css'

const Carousel = () => {
  const [swiper, setSwiper] = useState()

  return (
    <div className="mt-7 px-3">
      <div className="h-52 flex w-full justify-center pt-8">
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          centeredSlides={true}
          loop={true}
          pagination={{
            el: '.my-custom-pagination-div-carousel',
            renderBullet: (index, className) => {
              return `<span class="${className}"></span>`
            },
            clickable: true,
          }}
          onSwiper={(s) => {
            setSwiper(s)
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper linear-gradient"
        >
          <SwiperSlide>
            {({ isActive }) => (
              <>
                <img
                  src="/assets/accesories.png"
                  alt="accesories"
                  className={'w-32'+isActive ? 'relative scale-125' : ''}
                />
                <div className="pt-4 text-center text-sm text-grey-text-dark leading-4 font-medium">
                  {isActive ? 'Accesories' : ''}
                </div>
              </>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <>
                <img
                  src="/assets/speed-improvement.png"
                  alt="speed-improvement"
                  className={isActive ? 'relative scale-125' : ''}
                />

                <div className="pt-4 text-center text-sm text-grey-text-dark leading-4 font-medium">{isActive ? 'Speed Improvment' : ''}</div>
              </>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <>
                <img
                  src="/assets/exhaust.png"
                  alt="exhaust"
                  className={isActive ? 'relative scale-125' : ''}
                />

                <div className="pt-4 text-center text-sm text-grey-text-dark leading-4 font-medium">{isActive ? 'Exhaust' : ''}</div>
              </>
            )}
          </SwiperSlide>
        </Swiper>
      </div>
      <p className="text-sm text-grey-p-light font-light leading-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
        libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc
        sit amet congue aliquam.
      </p>
      <div className="mt-11 flex w-full justify-between items-center">
        <button className="hover:opacity-75" onClick={() => swiper.slidePrev()}>
          <MdWest color="#3D46A2" size={20} />
        </button>
        <div className="flex my-custom-pagination-div-carousel justify-center" />
        <button className="hover:opacity-75" onClick={() => swiper.slideNext()}>
          <MdEast color="#3D46A2" size={20} />
        </button>
      </div>
    </div>
  )
}

export default Carousel
