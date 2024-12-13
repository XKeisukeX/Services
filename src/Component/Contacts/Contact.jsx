import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { motion } from "motion/react";
import { SlideUp } from "../../utility/animation";

const Contact = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container px-4 py-14">
            <div className="text-center space-y-4">
                <motion.h2 
                variants={SlideUp(0.5)}
                initial="hidden"
                whileInView="visible"
                className="md:text-6xl text-4xl font-semibold font-roboto text-white capitalize">get in touch</motion.h2>
                <motion.p 
                variants={SlideUp(1.0)}
                initial="hidden"
                whileInView="visible"
                className="text-white leading-relaxed max-w-2xl m-auto">Reach out for research, thesis, or capstone project support. We are here to help students succeed academically!</motion.p>
            </div>
            <div className="max-w-6xl mx-auto text-center grid md:grid-cols-3 grid-cols-1 gap-8 mt-10">
                <div className="flex flex-col items-center gap-2 text-white">
                    <motion.div 
                     variants={SlideUp(1.5)}
                     initial="hidden"
                     whileInView="visible"
                    >
                        <div className="bg-blue-50 rounded-full inline-block">
                            <FaPhoneAlt className="text-5xl p-3 text-primary" />
                        </div>
                        <h4 className="text-4xl font-medium font-roboto">Phone</h4>
                    </motion.div>
                    <div className="space-y-3 mt-2">
                        <motion.div
                        variants={SlideUp(1.7)}
                        initial="hidden"
                        whileInView="visible"
                        >
                            <p className="text-lg font-semibold">Request for Proposal</p>
                            <ul>
                                <li>+1 (555) 123-4567</li>
                            </ul>
                        </motion.div>
                        <motion.div
                        variants={SlideUp(1.9)}
                        initial="hidden"
                        whileInView="visible"
                        >
                            <p className="text-lg font-semibold">Thesis & Dissertation Assistance</p>
                            <ul>
                                <li>+1 (555) 234-5678</li>
                            </ul>
                        </motion.div>
                        <motion.div
                        variants={SlideUp(2.1)}
                        initial="hidden"
                        whileInView="visible"
                        >
                            <p className="text-lg font-semibold">Capstone Project Inquiries</p>
                            <ul>
                                <li>+1 (555) 345-6789</li>
                            </ul>
                        </motion.div>
                        <motion.div
                        variants={SlideUp(2.3)}
                        initial="hidden"
                        whileInView="visible"
                        >
                            <p className="text-lg font-semibold">Academic Support & Research</p>
                            <ul>
                                <li>+1 (555) 456-7890</li>
                            </ul>
                        </motion.div>
                        <motion.div
                        variants={SlideUp(2.5)}
                        initial="hidden"
                        whileInView="visible"
                        >
                            <p className="text-lg font-semibold">Student Research Collaboration</p>
                            <ul>
                                <li>+1 (555) 567-8901</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2 text-white">
                    <motion.div
                    variants={SlideUp(1.5)}
                    initial="hidden"
                    whileInView="visible"
                    >
                        <div className="bg-blue-50 rounded-full inline-block">
                            <IoLocationSharp className="text-5xl p-2 text-primary" />
                        </div>
                        <h4 className="text-4xl font-medium font-roboto">Address</h4>
                    </motion.div>
                    <div className="space-y-3 mt-2">
                        <motion.div
                        variants={SlideUp(1.7)}
                        initial="hidden"
                        whileInView="visible"
                        >
                            <p className="text-lg font-semibold">456 Scholar Avenue, Floor 2</p>
                            <ul>
                                <li>Academic District, State, 67890</li>
                            </ul>
                        </motion.div>
                        <motion.div
                        variants={SlideUp(1.9)}
                        initial="hidden"
                        whileInView="visible"
                        >
                            <p className="text-lg font-semibold">789 Capstone Drive, Room 305</p>
                            <ul>
                                <li>Education Hub, State, 11223</li>
                            </ul>
                        </motion.div>
                        <motion.div
                        variants={SlideUp(2.1)}
                        initial="hidden"
                        whileInView="visible"
                        >
                            <p className="text-lg font-semibold">321 Study Street, Office 400</p>
                            <ul>
                                <li>Learning Center, State, 44556</li>
                            </ul>
                        </motion.div>
                        <motion.div
                        variants={SlideUp(2.3)}
                        initial="hidden"
                        whileInView="visible"
                        >
                            <p className="text-lg font-semibold">654 Knowledge Avenue, Suite 5</p>
                            <ul>
                                <li>Student Plaza, State, 78901</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2 text-white">
                    <motion.div
                    variants={SlideUp(1.5)}
                    initial="hidden"
                    whileInView="visible"
                    >
                        <div className="bg-blue-50 rounded-full inline-block">
                            <MdOutlineMailOutline className="text-5xl p-2 text-primary" />
                        </div>
                        <h4 className="text-4xl font-medium font-roboto">Email</h4>
                    </motion.div>
                    <div className="space-y-3 mt-2">
                        <motion.div
                        variants={SlideUp(1.7)}
                        initial="hidden"
                        whileInView="visible"
                        >
                            <p className="text-lg font-semibold">Request for Proposal</p>
                            <ul>
                                <li>researchsupport@yourorganization.com</li>
                            </ul>
                        </motion.div>
                        <motion.div
                        variants={SlideUp(1.9)}
                        initial="hidden"
                        whileInView="visible"
                        >
                            <p className="text-lg font-semibold">Thesis & Dissertation Assistance</p>
                            <ul>
                                <li>thesishelp@yourorganization.com</li>
                            </ul>
                        </motion.div>
                        <motion.div
                        variants={SlideUp(2.1)}
                        initial="hidden"
                        whileInView="visible"
                        >
                            <p className="text-lg font-semibold">Capstone Project Inquiries</p>
                            <ul>
                                <li>capstone@yourorganization.com</li>
                            </ul>
                        </motion.div>
                        <motion.div
                        variants={SlideUp(2.3)}
                        initial="hidden"
                        whileInView="visible"
                        >
                            <p className="text-lg font-semibold">Academic Support & Research</p>
                            <ul>
                                <li>academicresearch@yourorganization.com</li>
                            </ul>
                        </motion.div>
                        <motion.div
                        variants={SlideUp(2.5)}
                        initial="hidden"
                        whileInView="visible"
                        >
                            <p className="text-lg font-semibold">Student Research Collaboration</p>
                            <ul>
                                <li>studentresearch@yourorganization.com</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contact
