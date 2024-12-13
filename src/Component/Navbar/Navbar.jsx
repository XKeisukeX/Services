import { NavbarMenu } from '../../mockData/data';
import Logo from '../../assets/Logo.png';
import { useState } from 'react';
import { RiMenu4Line } from "react-icons/ri";
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {  
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className='text-white'>
        <div className="container py-4 px-4 flex items-center justify-between">
            <div>
                <img className='w-full md:h-10 h-[35px]' src={Logo} alt="" />
            </div>
            <ul className='md:flex items-center gap-8 hidden'>
                {
                    NavbarMenu.map((item) => {
                        return <li key={item.id} className='border-2 border-transparent hover:border-primary rounded-lg px-2 py-1'>
                        <a className='font-medium text-lg text-primary' href={item.link}>{item.title}</a>
                    </li>
                    })
                }
            </ul>
            <div onClick={() => {
              setOpen(!open)
            }} className='bg-blue-100 p-2 rounded-lg md:hidden block text-primary text-[1.4rem]'>
              <RiMenu4Line />
            </div>
        </div>
      </nav>
      <ResponsiveMenu open={open} />
    </>
  )
}

export default Navbar
