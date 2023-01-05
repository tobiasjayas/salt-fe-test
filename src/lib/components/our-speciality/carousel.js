import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useState } from 'react'
import { MdEast, MdWest } from 'react-icons/md'

const Carousel = () => {
  const [swiper, setSwiper] = useState()
  const data = [
    {
      src: '/assets/accesories.png',
      text: 'Accesories',
    },
    {
      src: '/assets/speed-improvement.png',
      text: 'Speed Improvment',
    },
    {
      src: '/assets/exhaust.png',
      text: 'Exhaust',
    },
  ]

  return (
    <div className="mt-7 px-3">
      <div className="h-52 flex w-full justify-center pt-8">
        <Swiper
          autoHeight={true}
          slidesPerView={3}
          spaceBetween={40}
          centeredSlides={true}
          loop={true}
          pagination={{
            type: 'bullets',
            el: '.my-custom-pagination-div-carousel',
            clickable: true,
          }}
          onSwiper={(s) => {
            setSwiper(s)
          }}
          modules={[Pagination]}
          className="mySwiper linear-gradient"
        >
          {data.map((d) => (
            <SwiperSlide key={d.text}>
              {({ isActive }) => (
                <>
                  <img
                    src={d.src}
                    alt={d.text}
                    className={'object-contain' + isActive ? 'scale-125' : ''}
                  />
                  <div className="pt-4 text-center text-sm text-grey-text-dark leading-4 font-medium">
                    {isActive ? d.text : ''}
                  </div>
                </>
              )}
            </SwiperSlide>
          ))}
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
