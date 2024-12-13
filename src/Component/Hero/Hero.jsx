import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const Hero = () => {
  return (
    <>
      <section>
        <div className="container">
            <div className="flex items-center justify-center min-h-[88vh]">
                <div className="max-w-3xl m-auto space-y-6 text-center py-10 px-4">
                  <motion.h2 
                  variants={SlideUp(0.5)}
                  initial="hidden"
                  animate="visible"
                  className="capitalize font-semibold md:text-7xl text-4xl text-color font-roboto tracking-wide">Turn Your Ideas Into Reality with Our <span className="text-primary font-roboto">Expertise.</span></motion.h2>
                  <motion.p 
                  variants={SlideUp(1.5)}
                  initial="hidden"
                  animate="visible"
                  className="text-gray-500 leading-relaxed md:text-lg">Our team is dedicated to bringing your vision to life through simple, creative solutions. We work closely with you to ensure your goals are achieved successfully.</motion.p>
                  <motion.div 
                  variants={SlideUp(2.5)}
                  initial="hidden"
                  animate="visible"
                  className="space-x-3">
                    <button className="primary-btn">Get Started</button>
                    <button className="secondary-btn">Contact Us</button>
                  </motion.div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Hero
