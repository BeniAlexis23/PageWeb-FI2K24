import '../App.css'
import About from '../components/About'
import Aacademica from '../components/Aacademica'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Pricing from '../components/Pricing'
import Footer from '../shared/Footer'

const Inicio = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Aacademica />
            <About />
            <Pricing />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Inicio
