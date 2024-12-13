import { motion } from "motion/react";
import { SlideRight } from "../../utility/animation";
import { SlideUp } from "../../utility/animation";

const Pricing = () => {
  const PricingData = [
    {
      id: 1,
      title: 'Capstone Project Assistance',
      bp: 'Basic Package',
      bpPrice: 'Price: ₱1,500',
      bpInclude: 'Includes:',
      bpOffer1: '30-minute consultation',
      bpOffer2: 'Topic selection guidance',
      bpOffer3: 'Basic research tips',
      sp: 'Standard Package',
      spPrice: 'Price: ₱3,000',
      spInclude: 'Includes:',
      spOffer1: 'Everything in the Basic Package',
      spOffer2: '2 hours of one-on-one support',
      spOffer3: 'Help with literature review (up to 5 sources)',
      pp: 'Premium Package',
      ppPrice: 'Price: ₱5,000',
      ppInclude: 'Includes:',
      ppOffer1: 'Everything in the Standard Package',
      ppOffer2: '4 hours of one-on-one support',
      ppOffer3: 'Draft review (up to 15 pages)',
      additional: 'Additional Services',
      add1: 'Extra Consultation: ₱500/hour',
      add2: 'Editing Services: ₱200 per page',
      delay: 1.3,
    },
    {
      id: 2,
      title: 'Thesis Writing Support',
      bp: 'Basic Package',
      bpPrice: 'Price: ₱1,800',
      bpInclude: 'Includes:',
      bpOffer1: '30-minute consultation to discuss your thesis',
      bpOffer2: 'Help with choosing a topic',
      bpOffer3: 'Basic research tips',
      sp: 'Standard Package',
      spPrice: 'Price: ₱3,500',
      spInclude: 'Includes:',
      spOffer1: 'Everything in the Basic Package',
      spOffer2: '2 hours of one-on-one support',
      spOffer3: 'Help with literature review (up to 7 sources)',
      pp: 'Premium Package',
      ppPrice: 'Price: ₱6,000',
      ppInclude: 'Includes:',
      ppOffer1: 'Everything in the Standard Package',
      ppOffer2: '4 hours of personal support for your thesis',
      ppOffer3: 'Feedback on draft (up to 20 pages)',
      additional: 'Additional Services',
      add1: 'Additional Consultation: ₱600/hour',
      add2: 'Editing Services: ₱250 per page',
      delay: 1.8,
    },
    {
      id: 3,
      title: 'Research Paper Writing',
      bp: 'Basic Package',
      bpPrice: 'Price: ₱1,700',
      bpInclude: 'Includes:',
      bpOffer1: '30-minute consultation to discuss your research needs',
      bpOffer2: 'Assistance with topic selection',
      bpOffer3: 'Basic research techniques and resources',
      sp: 'Standard Package',
      spPrice: 'Price: ₱3,200',
      spInclude: 'Includes:',
      spOffer1: 'Everything in the Basic Package',
      spOffer2: '2 hours of personalized support for developing your outline',
      spOffer3: 'Help with literature review (up to 5 sources)',
      pp: 'Premium Package',
      ppPrice: 'Price: ₱5,500',
      ppInclude: 'Includes:',
      ppOffer1: 'Everything in the Standard Package',
      ppOffer2: '4 hours of dedicated support for writing and editing',
      ppOffer3: 'Detailed feedback on draft (up to 15 pages)',
      additional: 'Additional Services',
      add1: 'Extra Consultation: ₱600/hour',
      add2: 'Editing Services: ₱250 per page',
      delay: 2.3,
    },
    {
      id: 4,
      title: 'CRUD Application Development',
      bp: 'Basic Package',
      bpPrice: 'Price: ₱2,000',
      bpInclude: 'Includes:',
      bpOffer1: 'Basic CRUD functionality for one data model',
      bpOffer2: 'Simple user interface design',
      bpOffer3: 'Deployment assistance',
      sp: 'Standard Package',
      spPrice: 'Price: ₱4,500',
      spInclude: 'Includes:',
      spOffer1: 'Up to three data models with full CRUD operations',
      spOffer2: 'Enhanced responsive UI design',
      spOffer3: '2 hours of post-launch support',
      pp: 'Premium Package',
      ppPrice: 'Price: ₱8,000',
      ppInclude: 'Includes:',
      ppOffer1: 'Up to five data models with advanced CRUD features',
      ppOffer2: '4 hours of post-launch support and maintenance',
      ppOffer3: 'Integration with third-party APIs (if applicable)',
      additional: 'Additional Services',
      add1: 'Extra Consultation: ₱600/hour',
      add2: 'Additional Data Models: ₱1,000 per model',
      delay: 2.0,
    },
    {
      id: 5,
      title: 'Database Design and Management',
      bp: 'Basic Package',
      bpPrice: 'Price: ₱2,500',
      bpInclude: 'Includes:',
      bpOffer1: 'Data modeling for one entity',
      bpOffer2: 'Basic schema design',
      bpOffer3: 'Documentation of the database structure',
      sp: 'Standard Package',
      spPrice: 'Price: ₱5,000',
      spInclude: 'Includes:',
      spOffer1: 'Data modeling for up to three entities',
      spOffer2: 'Enhanced schema design with relationships',
      spOffer3: '2 hours of implementation support',
      pp: 'Premium Package',
      ppPrice: 'Price: ₱9,000',
      ppInclude: 'Includes:',
      ppOffer1: 'Data modeling for up to five entities',
      ppOffer2: 'Advanced schema design with normalization',
      ppOffer3: 'Data integrity checks and optimization recommendations',
      additional: 'Additional Services',
      add1: 'Extra Consultation: ₱600/hour',
      add2: 'Additional Entities: ₱1,200 per entity',
      delay: 2.5,
    },
    {
      id: 6,
      title: 'System Design Consulting',
      bp: 'Basic Package',
      bpPrice: 'Price: ₱3,000',
      bpInclude: 'Includes:',
      bpOffer1: 'Initial consultation to assess system requirements',
      bpOffer2: 'Basic system architecture design',
      bpOffer3: 'Documentation of system specifications',
      sp: 'Standard Package',
      spPrice: 'Price: ₱6,000',
      spInclude: 'Includes:',
      spOffer1: 'Everything in the Basic Package',
      spOffer2: 'Detailed design of up to two system components',
      spOffer3: '2 hours of implementation support',
      pp: 'Premium Package',
      ppPrice: 'Price: ₱10,000',
      ppInclude: 'Includes:',
      ppOffer1: 'Comprehensive design for up to four system components',
      ppOffer2: '4 hours of implementation support and maintenance',
      ppOffer3: 'Ongoing consultation for system optimization',
      additional: 'Additional Services',
      add1: 'Extra Consultation: ₱700/hour',
      add2: 'Additional Components: ₱1,500 per component',
      delay: 3.0,
    }
  ];
  return (
    <>
      <section>
        <div className="container py-14 px-4">
            <div className="text-center space-y-4">
                <motion.h2 
                variants={SlideUp(0.3)}
                initial="hidden"
                whileInView="visible"
                className="md:text-6xl text-4xl font-semibold font-roboto text-primary">Our Pricing</motion.h2>
                <motion.p 
                variants={SlideUp(0.6)}
                initial="hidden"
                whileInView="visible"
                className="text-gray-500 leading-relaxed max-w-2xl m-auto">Our pricing offers simple packages for thesis writing, research paper help, CRUD application development, and database management, with expert support and guidance.</motion.p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
                  {
                    PricingData.map((item) => {
                      return (
                        <motion.div 
                        variants={SlideRight(item.delay)}
                        initial="hidden"
                        whileInView="visible"
                        key={item.id} className="size-full custom-shadow rounded-lg border-b-4 border-primary overflow-hidden hover:shadow-2xl duration-300">
                          <div className="bg-primary py-2 text-center text-white">
                          <small className="font-semibold capitalize">Referral Discount: ₱180 off for each friend referred.</small>
                        </div>
                        <div className="px-5 py-6">
                          <div>
                            <h2 className="text-3xl font-roboto font-medium text-primary">{item.title}</h2>
                            <div className="mt-3 space-y-2">
                              <div>
                                <h4 className="text-xl font-medium text-color">Basic Package</h4>
                                <span className="text-primary">{item.bpPrice}</span>
                              </div>
                              <div>
                                <span className="text-lg font-medium text-color">{item.bpInclude}</span>
                                <ul className="ml-8 mt-1.5">
                                  <li className="text-gray-500 list-disc">{item.bpOffer1}</li>
                                  <li className="text-gray-500 list-disc">{item.bpOffer2}</li>
                                  <li className="text-gray-500 list-disc">{item.bpOffer3}</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="mt-3 space-y-2">
                              <div>
                                <h4 className="text-xl font-medium text-color">{item.sp}</h4>
                                <span className="text-primary">{item.spPrice}</span>
                              </div>
                              <div>
                                <span className="text-lg font-medium text-color">{item.spInclude}</span>
                                <ul className="ml-8 mt-1.5">
                                  <li className="text-gray-500 list-disc">{item.spOffer1}</li>
                                  <li className="text-gray-500 list-disc">{item.spOffer2}</li>
                                  <li className="text-gray-500 list-disc">{item.spOffer3}</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="mt-3 space-y-2">
                              <div>
                                <h4 className="text-xl font-medium text-color">{item.pp}</h4>
                                <span className="text-primary">{item.ppPrice}</span>
                              </div>
                              <div>
                                <span className="text-lg font-medium text-color">{item.ppInclude}</span>
                                <ul className="ml-8 mt-1.5">
                                  <li className="text-gray-500 list-disc">{item.ppOffer1}</li>
                                  <li className="text-gray-500 list-disc">{item.ppOffer2}</li>
                                  <li className="text-gray-500 list-disc">{item.ppOffer3}</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="mt-3 space-y-2">
                              <div>
                                <h4 className="text-xl font-medium text-color">{item.additional}</h4>
                              </div>
                              <div>
                                <ul className="ml-8 mt-1.5">
                                  <li className="text-gray-500 list-disc">{item.add1}</li>
                                  <li className="text-gray-500 list-disc">{item.add2}</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        </motion.div>
                      )
                    })
                  }
            </div>
        </div>
      </section>
    </>
  )
}

export default Pricing
