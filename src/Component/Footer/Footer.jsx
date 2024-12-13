import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { NavbarMenu } from "../../mockData/data";
import { FaRegCopyright } from "react-icons/fa6";
import { motion } from "motion/react";
import { SlideRight } from '../../utility/animation';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-white">
            <div className="container px-4 py-4 text-white font-medium space-y-3">
                <div className="flex items-center justify-center gap-4">
                  <motion.div 
                  variants={SlideRight(2.2)}
                  initial="hidden"
                  whileInView="visible"
                  className="border-2 border-primary hover:bg-blue-50 p-2 rounded-full">
                    <FaFacebook className="text-xl text-primary cursor-pointer" />
                  </motion.div>
                  <motion.div 
                  variants={SlideRight(2.4)}
                  initial="hidden"
                  whileInView="visible"
                  className="border-2 border-primary hover:bg-blue-50 p-2 rounded-full">
                    <FaSquareInstagram className="text-xl text-primary cursor-pointer" />
                  </motion.div>
                  <motion.div 
                  variants={SlideRight(2.6)}
                  initial="hidden"
                  whileInView="visible"
                  className="border-2 border-primary hover:bg-blue-50 p-2 rounded-full">
                    <FaLinkedin className="text-xl text-primary cursor-pointer" />
                  </motion.div>
                  <motion.div 
                  variants={SlideRight(2.8)}
                  initial="hidden"
                  whileInView="visible"
                  className="border-2 border-primary hover:bg-blue-50 p-2 rounded-full">
                    <FaSquareXTwitter className="text-xl text-primary cursor-pointer" />
                  </motion.div>
                </div>
                <ul className='flex items-center justify-center gap-8'>
                  {
                      NavbarMenu.map((item) => {
                          return <li key={item.id}>
                          <a className='font-medium md:text-lg text-base text-primary' href={item.link}>{item.title}</a>
                      </li>
                      })
                  }
                </ul>
            </div>
        </div>
        <div className="bg-primary text-white">
         <div className="flex items-center justify-center gap-1 py-2">
          <FaRegCopyright className="text-sm" /> 
          <small className="font-medium">All Rights Reserved.</small>
         </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
