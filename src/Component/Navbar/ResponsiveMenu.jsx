import { motion, AnimatePresence } from "motion/react"

const ResponsiveMenu = ({ open }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {open &&
            <motion.div 
            initial={{ opacity: 0 , y: -100 }}
            animate={{ opacity: 1 , y: 0 }}
            exit={{ opacity: 0 , y:-100 }}
            transition={{ duration: 0.3 }}
            className="absolute h-screen w-full left-0 z-[20] md:hidden">
                <div className="bg-primary m-4 rounded-lg">
                    <ul className="py-8 flex items-center justify-center flex-col gap-8 text-white font-semibold text-base uppercase">
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Pricing</li>
                    </ul>
                </div>
            </motion.div>
        }
      </AnimatePresence>
    </>
  )
}

export default ResponsiveMenu
