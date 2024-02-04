import logo from '../assets/es-undc.png';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-secondary md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
            <div className='my-12 flex flex-col md:flex-row gap-10'>
                <div className='md:w-1/2 space-y-8'>
                    <a href="/" className='text-2xl font-semibold flex items-center space-x-3'>
                        <img src={logo} alt="" className='w-10 inline-block items-center' /> <span className='text-white'>UNDC-FI</span>
                    </a>
                    <p className='md:w-1/2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div>
                        <input type="email" name="email" id="email" placeholder='Your Email' className='py-2 px-4 rounded-md focus:outline-none' />
                        <input type="submit" value="Subscribe" className='px-4 py-2 bg-primary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-secondary duration-300 transition-all' />
                    </div>
                </div>
                {/*footer navigation*/}
                <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Platform</h4>
                        <ul className='space-y-3'>
                            <a href="/" className='block hover:text-gray-300'>Overview</a>
                            <a href="/" className='block hover:text-gray-300'>Feature</a>
                            <a href="/" className='block hover:text-gray-300'>About</a>
                            <a href="/" className='block hover:text-gray-300'>Pricing</a>
                        </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Help</h4>
                        <ul className='space-y-3'>
                            <a href="/" className='block hover:text-gray-300'>Overview</a>
                            <a href="/" className='block hover:text-gray-300'>Feature</a>
                            <a href="/" className='block hover:text-gray-300'>About</a>
                            <a href="/" className='block hover:text-gray-300'>Pricing</a>
                        </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Contacts</h4>
                        <ul className='space-y-3'>
                            <p className='hover:text-gray-300'>+51 910922965</p>
                            <p className='hover:text-gray-300'>Av. Mariscal Benavides</p>
                            <p className='hover:text-gray-300'>N° 322</p>
                            <p className='hover:text-gray-300'>San Vicente - Cañete</p>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
                <p><a href="https://github.com/BeniAlexis23" target='_blank'>@BeniAlexis23</a> 2024. All right reserved.</p>
                <div className='flex items-center space-x-5'>
                    <FaFacebookSquare className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300 size-8' />
                    <FaInstagramSquare className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300 size-8' />
                    <FaLinkedin className='w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300 size-8' />
                </div>
            </div>
        </div>
    )
}

export default Footer
