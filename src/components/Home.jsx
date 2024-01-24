import banner from '../assets/banner.jpg'
import Banner from '../shared/Banner'

const Home = () => {
    return (
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id='home'>
            <Banner banner={banner} heading="UNDC - Facultad de Ingeniería" subheading="El graduado en Ingeniería de Sistemas tendrá el potencial para convertirse en un profesional Exitoso y contribuir al crecimiento y desarrollo en el sector de la tecnología e informática, son sólidos conocimientos." />
        </div>
    )
}

export default Home
