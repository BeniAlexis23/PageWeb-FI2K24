import Navbar from '../components/Navbar'
import Footer from '../shared/Footer'
import Almidon from '../assets/c-almidon.png'
import Roque from '../assets/e-roque.jpg'
import Asto from '../assets/l-asto.png'
import Vicente from '../assets/w-vicente.png'
import Oseda from '../assets/d-oseda.png'
import Duran from '../assets/a-duran.png'
import Angoma from '../assets/m-angoma.png'
import Pacheco from '../assets/a-pacheco.png'
import Larico from '../assets/g-larico.png'
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Nosotros = () => {
  return (
    <>
      <Navbar />
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-8">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h1 class="mt-24 mb-4 font-bold text-3xl md:text-4xl lg:text-5xl text-center font-heading text-gray-900">
            Autoridades de la Facultad de Ingeniería
          </h1>
        </motion.div>
        {/*Dr Almidon*/}
        <div class="flex items-center -mt-4 p-5 lg:p-5 overflow-hidden relative">
          <div class="w-full max-w-6xl rounded shadow-xl p-5 lg:p-5 mx-auto text-gray-800 relative md:text-left">
            <div class="md:flex items-center -mx-10">
              <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0 lg:ml-2">
                <div class="relative">
                  <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}
                  >
                    <img src={Almidon} class="w-full relative z-10" alt="" />
                  </motion.div>
                </div>
              </div>
              <div class="w-full md:w-1/2 px-10">
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                >
                  <div class="mb-10">
                    <h1 class="font-bold text-2xl mb-5">Cordinador (e) de la Facultad de Ingeniería <br />Dr. Carlos Alcides Almidón Ortiz</h1>
                    <p class="text-sm text-justify lg:mr-10">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis...</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        {/*Dr Roque*/}
        <div class="flex items-center -mt-4 p-5 lg:p-5 overflow-hidden relative">
          <div class="w-full max-w-6xl rounded shadow-xl p-5 lg:p-5 mx-auto text-gray-800 relative md:text-left">
            <div class="md:flex items-center -mx-10">
              <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0 lg:ml-2">
                <div class="relative">
                  <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}
                  >
                    <img src={Roque} class="w-full relative z-10" alt="" />
                  </motion.div>
                </div>
              </div>
              <div class="w-full md:w-1/2 px-10">
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                >
                  <div class="mb-10">
                    <h1 class="font-bold text-2xl mb-5">Director (e) del Departamento Académico de Ingenieria de Sistemas<br />Dr. Edwin Roque Tito</h1>
                    <p class="text-sm text-justify lg:mr-10">Docente Universitario de Pre y Posgrado, con experiencia en: Proyectos de desarrollo de software, implementación de sistemas de información en
                      todas sus etapas, administración de base de datos y sistemas operativos; orientados al logro de objetivos y cumplir metas organizacionales. Formación profesional en
                      constante actualización, aprovecho cada momento y espacio del que hacer universitario; Ingeniero de Sistemas de profesión, Magister Scientiae en Informática por
                      la Universidad Nacional del Altiplano, Doctor en Ingeniería de Sistemas por la Universidad Nacional Federico Villarreal, Maestría en Integración e Innovación de
                      TI en la PUCP y segunda Especialidad en Formulación y Evaluación de Proyectos de Inversión en la UNA; mi objetivo personal es formar parte de un gran equipo de trabajo,
                      donde pueda aportar mi experiencia en el área de Ingeniería de sistemas y telecomunicaciones, y continuar con mi desarrollo profesional.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        {/*Mg Asto*/}
        <div class="flex items-center -mt-4 p-5 lg:p-5 overflow-hidden relative">
          <div class="w-full max-w-6xl rounded shadow-xl p-5 lg:p-5 mx-auto text-gray-800 relative md:text-left">
            <div class="md:flex items-center -mx-10">
              <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0 lg:ml-2">
                <div class="relative">
                  <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}
                  >
                    <img src={Asto} class="w-full relative z-10" alt="" />
                  </motion.div>
                </div>
              </div>
              <div class="w-full md:w-1/2 px-10">
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                >
                  <div class="mb-10">
                    <h1 class="font-bold text-2xl mb-5">Director (e) de la Escuela Profesional de Ingeniería de Sistemas<br />Mg. Leonidas Asto Huamán</h1>
                    <p class="text-sm text-justify lg:mr-10">De profesión, Ingeniero Informático y Sistemas con maestría en Informática, candidato a doctor en Ingeniería de Sistemas. Docente, con experiencia
                      en universidades públicas y privadas. Asesor de tesis. Áreas de investigación: Machine Learning, Redes Neuronales, Interacción Humano Computador, IoT, Sistemas Inteligentes,
                      Procesamiento Natural y BI. Con capacidad analizar, diseñar, construir, evaluar, diagnosticar, auditar y mantener sistemas informáticos aplicados en las diferentes áreas del
                      conocimiento. Dedicado a la Administración de Sistemas GNU/Linux.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Plana Docentes*/}
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div class="text-center pb-12">
          <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Docentes Ordinarios
          </h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
          >
            <div class="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img class="object-center object-cover h-auto w-full" src={Vicente} alt="photo" />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Dr. Wagner Vicente Ramos</p>
                <p class="text-base text-gray-400 font-normal">Director General (e) de la Escuela de Posgrado de la UNDC</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
          >
            <div class="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img class="object-center object-cover h-auto w-full" src={Oseda} alt="photo" />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Ph.D. Dulio Oseda Gago</p>
                <p class="text-base text-gray-400 font-normal">Director (e) del Centro de Investigación Científica de la UNDC</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
          >
            <div class="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img class="object-center object-cover h-auto w-full" src={Duran} alt="photo" />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Mg. Amanda Durán Carhuamaca</p>
                <p class="text-base text-gray-400 font-normal">Director (e) de la Unidad de investigación de la Facultad de Ingeniería</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
          >
            <div class="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img class="object-center object-cover h-auto w-full" src={Angoma} alt="photo" />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Dra. Miriam Angoma Astucuri</p>
                <p class="text-base text-gray-400 font-normal">Director (e) de la Unidad de Posgrado de la Facultad de Ingeniería</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
          >
            <div class="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img class="object-center object-cover h-auto w-full" src={Pacheco} alt="photo" />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Mg. Alex Pacheco Pumaleque</p>
                <p class="text-base text-gray-400 font-normal">Director (e) de la Unidad de Innovación y Estudios Continuos de la Facultad de Ingeniería</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
          >
            <div class="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <img class="object-center object-cover h-auto w-full" src={Larico} alt="photo" />
              </div>
              <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Dr. Guido Larico Uchamaco</p>
                <p class="text-base text-gray-400 font-normal">Secretario Académico (e) de la Facultad de Ingeniería</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Nosotros
