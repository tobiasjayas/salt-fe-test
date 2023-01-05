const Hero = () => {
  return (
    <div className="bg-blue-hero">
      <img src="assets/hero.png" alt="hero" className="w-full relative lg:-top-14" />
      <div className="relative -top-14 lg:-top-24">
        <img src="assets/bg-hero.png" alt="bg-hero" className="w-full" />
        <div className="absolute top-28 px-6 text-white">
          <h1>
            Discover Your Wonder
          </h1>
          <p className="mt-4 text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
