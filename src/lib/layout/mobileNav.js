import { useState } from 'react'
import { MdMenu, MdClose } from 'react-icons/md'
import { useMediaQuery } from 'react-responsive'

const MobileNav = () => {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery({ query: `(min-width: 1024px)` })
  console.log(isDesktop)

  const handleOpen = () => {
    if (!open) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  return (
    <div className="mobile-nav flex px-6 py-4 justify-between z-50 relative bg-white items-center">
      <a href="/">
        <img className="h-8" src="logo-company.png" alt="logo" />
      </a>
      {!isDesktop && (
        <>
          <button onClick={handleOpen} className="flex items-center">
            {open ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </>
      )}
      {open && (
        <div className="bg-white p-4 border border-gray-300 shadow-xl absolute right-3 top-12 flex flex-col gap-y-6">
          <a href="/" className="">
            Who We Are
          </a>
          <a href="/" className="">
            Our Values
          </a>
          <a href="/" className="">
            The Perks
          </a>
        </div>
      )}
      {isDesktop && (
        <div className="flex gap-x-8">
          <a href="/" className="">
            Who We Are
          </a>
          <a href="/" className="">
            Our Values
          </a>
          <a href="/" className="">
            The Perks
          </a>
        </div>
      )}
    </div>
  )
}

export default MobileNav
