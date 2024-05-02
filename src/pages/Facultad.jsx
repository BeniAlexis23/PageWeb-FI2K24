import Navbar from '../components/Navbar'
import Footer from '../shared/Footer'
import Almidon from '../assets/c-almidon.png'
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Facultad = () => {
  return (
    <>
      <Navbar />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-8">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h1 className="mt-24 mb-4 font-bold text-3xl md:text-4xl lg:text-5xl text-center font-heading text-gray-900">
            Facultad de Ingeniería
          </h1>
        </motion.div>
        {/*Dr Almidon*/}
        <div className="flex items-center -mt-4 p-5 lg:p-5 overflow-hidden relative">
          <div className="w-full max-w-6xl rounded shadow-xl p-5 lg:p-5 mx-auto text-gray-800 relative md:text-left">
            <div className="md:flex items-center -mx-10">
              <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0 lg:ml-2">
                <div className="relative">
                  <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}
                  >
                    <img src={Almidon} className="w-full relative z-10" alt="" />
                  </motion.div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-10">
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                >
                  <div className="mb-10">
                    <h1 className="font-bold text-2xl mb-5">Cordinador (e) de la Facultad de Ingeniería <br />Dr. Carlos Alcides Almidón Ortiz</h1>
                    <p className="text-sm text-justify lg:mr-10">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis...</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <Footer />
    </>
  )
}

export default Facultad
