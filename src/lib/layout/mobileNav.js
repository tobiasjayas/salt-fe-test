import { MdMenu } from 'react-icons/md'

const MobileNav = () => {
  return (
    <div className="mobile-nav flex px-6 py-4 justify-between z-50 relative bg-white">
      <a href="/">
        <img className="h-8" src="logo-company.png" alt="logo" />
      </a>
      <span className="flex items-center">
        <MdMenu size={24} />
      </span>
    </div>
  )
}

export default MobileNav
