import { useState } from "react";
import { FaCaretRight } from "react-icons/fa6";
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Pricing = () => {

    const [isYearly, setIsYearly] = useState(false);

    const packages = [
        { name: "Start", monthlyPrice: 19, yearlyPrice: 199, description: "asdafascdc cdc cdcd d ffefef df fdfdf" },
        { name: "Advance", monthlyPrice: 39, yearlyPrice: 399, description: "asdafascdc cdc cdcd d ffefef df fdfdf" },
        { name: "Premium", monthlyPrice: 59, yearlyPrice: 599, description: "asdafascdc cdc cdcd d ffefef df fdfdf" },
    ]

    return (
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto py-10" id="pricing">
            <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-extrabold mb-2">Actividades Académicas</h2>
                <p className="text-tartiary md:w-1/3 mx-auto px-4">asdasd sd  sdsds  sdsd sdsef f f ffdf df fdefd asfegerg fdff df fd dfdfaasds as asdas asdasd</p>
                {/*tooggle pricing */}
                <div className="mt-16">
                    <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                        <span className="mr-8 text-2xl font-semibold">Monthly</span>
                        <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
                            <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${isYearly ? "bg-primary ml-8" : "bg-gray-500"}`}></div>
                        </div>
                        <span className="ml-8 text-2xl font-semibold">Yearly</span>
                    </label>
                    <input type="checkbox" id="toggle" className="hidden" checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
                </div>
            </div>
            {/*pricing cards*/}
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.5 }}
                className="grid sm:grid-cols2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
                {
                    packages.map((pkg, index) => <div key={index} className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl">
                        <h3 className="text-3xl font-bold text-center">{pkg.name}</h3>
                        <p className="text-tartiary text-center my-5">{pkg.description}</p>
                        <p className="mt-5 text-center text-secondary text-4xl font-bold">
                            {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`} <span className="text-base text-tartiary font-medium">/ {isYearly ? 'year' : 'month'}</span>
                        </p>
                        <ul className="mt-4 space-y-2 px-4">
                            <li className="flex gap-3 items-center"><FaCaretRight />Video Games</li>
                            <li className="flex gap-3 items-center"><FaCaretRight />Javascript</li>
                            <li className="flex gap-3 items-center"><FaCaretRight />Typescript</li>
                            <li className="flex gap-3 items-center"><FaCaretRight />PySpark</li>
                            <li className="flex gap-3 items-center"><FaCaretRight />AWS</li>
                        </ul>
                        <div className="w-full mx-auto mt-8 flex  items-center justify-center">
                            <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Get Started</button>
                        </div>
                    </div>)
                }
            </motion.div>
        </div>
    )
}

export default Pricing
