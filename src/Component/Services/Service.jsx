import { IoNewspaperOutline } from "react-icons/io5";
import { GiPapers } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";
import { GrSystem } from "react-icons/gr";
import { RiUserCommunityLine } from "react-icons/ri";
import { motion } from "motion/react";
import { SlideUp } from "../../utility/animation";
import { SlideLeft } from "../../utility/animation";

const Service = () => {
    const ServiceData = [
        {
            id: 1,
            title: 'Capstone Project Assistance',
            description: 'Assisting students in planning, researching, and developing their capstone projects for successful completion and presentation.',
            icon: <GrSystem />,
            delay: 1.3,
        },
        {
            id: 2,
            title: 'Thesis Writing Support',
            description: 'Providing guidance on research, writing, and formatting for students developing and completing their thesis projects.',
            icon: <GiPapers />,
            delay: 1.8,
        },
        {
            id: 3,
            title: 'Research Paper Writing',
            description: 'Creating simple CRUD (Create, Read, Update, Delete) applications for students requiring web-based solutions.',
            icon: <IoNewspaperOutline />,
            delay: 2.3,
        },
        {
            id: 4,
            title: 'CRUD Application Development',
            description: 'Developing simple CRUD (Create, Read, Update, Delete) applications for students needing web-based solutions.',
            icon: <MdComputer />,
            delay: 2.0,
        },
        {
            id: 5,
            title: 'Database Design and Management',
            description: 'Assisting with designing and managing databases for school projects, research, and academic assignments.',
            icon: <FaDatabase />,
            delay: 2.5,
        },
        {
            id: 6,
            title: 'System Design Consulting',
            description: 'Assisting students in designing scalable and efficient systems for their projects or academic assignments.',
            icon: <RiUserCommunityLine />,
            delay: 3.0,
        },
    ]
  return (
    <>
      <section>
        <div className="container">
            <div className="px-4 py-14">
                <div className="text-center space-y-4">
                    <motion.h2 
                    variants={SlideUp(0.3)}
                    initial="hidden"
                    whileInView="visible"
                    className="md:text-6xl text-4xl font-semibold font-roboto text-primary">Our Services</motion.h2>
                    <motion.p 
                    variants={SlideUp(0.6)}
                    initial="hidden"
                    whileInView="visible"
                    className="text-gray-500 leading-relaxed max-w-2xl m-auto">We offer help with capstone projects, thesis writing, research papers, CRUD app development, database design, and system design to support student success.</motion.p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-14">
                    {
                        ServiceData.map((item) => {
                            return (
                               <motion.div 
                                variants={SlideLeft(item.delay)}
                                initial="hidden"
                                whileInView="visible"
                                key={item.id} className="rounded-lg custom-shadow h-full border-b-4 border-primary">
                                 <div className="px-5 py-6 space-y-2">
                                    <div className="bg-blue-50 rounded-lg p-2 inline-block">
                                        <div className="text-3xl text-primary">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <h4 className="font-medium md:text-3xl text-2xl text-primary font-roboto">{item.title}</h4>
                                    <p className="text-gray-500 leading-relaxed md:text-lg">{item.description}</p>
                                </div>
                               </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Service
