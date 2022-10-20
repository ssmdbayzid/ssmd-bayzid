import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import logo from '../../Image/logo 2.png'

/*
import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const Header = () => {
    return (
        <header className='z-50 w-screen p-6 px-16'>
          
            <div className='hidden md:flex justify-between'>
                <div className='flex gap-3 items-center cursor-pointer'>
                    <img src='https://i.ibb.co/5xGqjWX/logo.png' className='w-8' alt='' />
                    <p className='text-lg text-headingColor font-bold'>BroRest</p>
                </div>
                <div className='flex gap-8'>
                <ul className='flex gap-8 mr-3 items-center ml-auto '>
                    <Link to="/home" className='text-base text-textColor hover:text-headingColor  cursor-pointer duration-100 transition-all ease-in-out'>Home</Link>
                    <Link to="/menu" className='text-base text-textColor hover:text-headingColor  cursor-pointer duration-100 transition-all ease-in-out'>Menu</Link>
                    <Link to="/home" className='text-base text-textColor hover:text-headingColor  cursor-pointer duration-100 transition-all ease-in-out'>About Us</Link>
                    <Link to="/home" className='text-base text-textColor hover:text-headingColor  cursor-pointer duration-100 transition-all ease-in-out'>Service</Link>
                </ul>
                <div className='items-center justify-center cursor-pointer relative flex'>
                    <FaShoppingCart className='text-2xl'/>
                    <div className=' relative justify-center items-center h-5 w-5 -top-3 -left-2 rounded-full flex bg-[#FF0000]'>
                        <p className='text-xs text-white font-semibold'> 1  </p>
                    </div>
                </div>
                <motion.img whileTap={{scale: 0.5}}
                src='https://i.ibb.co/Wfdz7Ks/Avatar-Profile-PNG-Pic.png' className='w-10 h-10 min-h-[40px] min-w-[40px]' alt=''/>
                </div>
            </div>
        </header>
    );
};

export default Header;
*/

const Header = () => {


    const navbar = <>
        <a className='text-base text-white hover:text-gray-300  cursor-pointer duration-100 transition-all ease-in-out' href='/home'>Home</a>   
        <a className='text-base text-white hover:text-gray-300  cursor-pointer duration-100 transition-all ease-in-out' href='#about'>About</a> 
        <a className='text-base text-white hover:text-gray-300  cursor-pointer duration-100 transition-all ease-in-out' href='/project'>Project</a> 
        <a className='text-base text-white hover:text-gray-300  cursor-pointer duration-100 transition-all ease-in-out' href='https://drive.google.com/file/d/18IoPnhg3olutrF6N7nI4QVZnfQkawWni/view' target='_blank' download >My Resume</a>   
        <a className='text-base text-white hover:text-gray-300  cursor-pointer duration-100 transition-all ease-in-out' href='/blog'>Blogs</a>  
    </>

    return (
        <header className='w-screen p-6 px-16'>
          
            <div className='hidden md:flex items-center justify-between'>
                
                    <img src={logo} className='w-24 rounded' alt='' />

                    
                <div className='flex gap-8'>
                {navbar}
                
                {/* <motion.img whileTap={{scale: 0.5}} */}
                {/* src='https://i.ibb.co/Wfdz7Ks/Avatar-Profile-PNG-Pic.png' className='w-10 h-10 min-h-[40px] min-w-[40px]' alt=''/> */}
                </div>
            </div>    
            <div  className='block md:hidden justify-between'>
                <div>
                   <h1>Bayzid</h1>
                </div>
                <div>
                    <GiHamburgerMenu />
                </div>

            </div>
        </header>
    );
};

export default Header;