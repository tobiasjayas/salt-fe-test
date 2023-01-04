const Footer = () => {
  return (
    <div className="footer bg-blue-dark px-6 py-8">
      <div className="w-full">
        <img className="h-11" src="logo-company-white.png" alt="logo-footer" />
        <div>
          <div className="mt-8 bg-white p-6">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
              <option>ReactJS Dropdown</option>
              <option>Laravel 9 with React</option>
              <option>React with Tailwind CSS</option>
              <option>React With Headless UI</option>
            </select>

            <p className="mt-8 text-blue-text">
              Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa
              Barat
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-y-3">
            <a href="/" className="text-white">
              Who We Are
            </a>
            <a href="/" className="text-white">
              Our Values
            </a>
            <a href="/" className="text-white">
              The Perks
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
