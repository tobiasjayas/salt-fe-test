import MobileNav from './mobileNav'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <div>
      <MobileNav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
