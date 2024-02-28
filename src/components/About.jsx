import aboutImg from '../assets/aboutImg.jpg'
import aboutImg2 from '../assets/aboutImg2.jpg'

// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const About = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto space-y-10" id='about'>
            <h2 className="md:text-5xl text-3xl text-center font-extrabold mb-20">Sección de Noticias de la Facultad de Ingeniería</h2>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <motion.div
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}
                    className='md:w-1/2'>
                    <img src={aboutImg} alt="" />
                </motion.div>
                {/*Content*/}
                <motion.div
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}
                    className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold mb-5 leading-normal'>Ponencia de Nuestros Egresados.</h2>
                    <p className='text-tartiary text-lg mb-7'>anfaja djafdi ni  dfndfnjd difjdif d ji  dfdjfdjfjd jdfjaisduasfksa sdsndns sndsd sji  jds j sdkasdi sidsji s jsi si j isjdiasndsid sjdsdsj</p>
                </motion.div>
            </div>
            {/*2da part*/}
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
                <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}
                    className='md:w-1/2'>
                    <img src={aboutImg2} alt="" />
                </motion.div>
                {/*Content*/}
                <motion.div
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}
                    className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold mb-5 leading-normal'>Ponencias Internacionales.</h2>
                    <p className='text-tartiary text-lg mb-7'>anfaja djafdi ni  dfndfnjd difjdif d ji  dfdjfdjfjd jdfjaisduasfksa sdsndns sndsd sji  jds j sdkasdi sidsji s jsi si j isjdiasndsid sjdsdsj</p>
                </motion.div>
            </div>
        </div>
    )
}

export default About
