import {Outlet} from 'react-router-dom'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Layout = () => {
    return(
        <div style={{backgroundColor: '#8A8A8A'}}>
        <Navbar />  
        <Outlet />
        <Footer />
        </div>
    )
}

export default Layout