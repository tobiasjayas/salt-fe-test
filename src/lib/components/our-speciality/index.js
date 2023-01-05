import Carousel from "./carousel"

const OurSpeciality = () => {
  return (
    <div className="bg-blue-light px-5 py-8">
      <div className="bg-white px-6 py-10">
        <h1 className="text-blue-title font-bold">OUR SPECIALITY</h1>
        <p className="mt-4 text-sm font-light leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
          libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc
          sit amet congue aliquam.
        </p>
        <Carousel />
      </div>
    </div>
  )
}

export default OurSpeciality
