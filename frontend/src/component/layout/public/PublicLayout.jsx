
import { Outlet } from 'react-router-dom'
import { Navbar } from '../navbar'
import { Footer } from '../Footer'


const PublicLayout = () => {
  return (
    <div className="publicLayout">
      <Navbar />

      <main className="public-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default PublicLayout
