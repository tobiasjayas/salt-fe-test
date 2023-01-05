const Hero = () => {
  return (
    <div className="bg-blue-hero">
      {/* <img src="assets/hero.png" alt="hero" className="w-full relative lg:-top-14" /> */}
      <div
        className="w-full lg:flex lg:min-h-screen lg:items-end"
        style={{
          backgroundImage: `url('/assets/hero.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
        }}
      >
        <div
          className="w-full relative lg:static top-40 h-80 flex items-center"
          style={{
            backgroundImage: `url('/assets/bg-hero.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
          }}
        >
          <div className="px-6 text-white max-w-md">
            <h1>Discover Your Wonder</h1>
            <p className="mt-4 text-sm leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
