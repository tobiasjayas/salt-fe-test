import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import AboutCard from './about-card'
import { useState } from 'react'
import { MdEast, MdWest } from 'react-icons/md'

const About = () => {
  const [swiper, setSwiper] = useState()

  return (
    <div className="p-8">
      <Swiper
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        onSwiper={(s) => {
          console.log('initialize swiper', s)
          setSwiper(s)
        }}
        pagination={{
          type: 'fraction',
          el: '.my-custom-pagination-div',
          formatFractionCurrent: (number) => {
            return '0' + number
          },
          formatFractionTotal: (number) => {
            return '0' + number
          },
          renderFraction: (currentClass, totalClass) => {
            return (
              `<span class="${currentClass} text-2xl"></span>` +
              ' <span class="text-gray-300 text-2xl">/</span> ' +
              `<span class="${totalClass} text-gray-300"></span>`
            )
          },
        }}
      >
        <SwiperSlide>
          <AboutCard
            title="Who we are"
            subtitle="Technology Company"
            content="Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
          />
        </SwiperSlide>

        <SwiperSlide>
          <AboutCard
            title="What we do"
            subtitle="Professional Brand Management"
            content="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
          />
        </SwiperSlide>

        <SwiperSlide>
          <AboutCard
            title="How we do"
            subtitle="Strategize, Design, Collaborate"
            content="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur."
          />
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-between items-center">
        <div>
          <div className="my-custom-pagination-div" />
        </div>
        <div>
          <button
            className="bg-gray-300 p-2 hover:opacity-75"
            onClick={() => swiper.slidePrev()}
          >
            <MdWest color="white" size={20} />
          </button>
          <button
            className="bg-blue-title p-2 hover:opacity-75"
            onClick={() => swiper.slideNext()}
          >
            <MdEast color="white" size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
