'use client';
import Link from 'next/link'
import { useState } from 'react';
import { TbMenuDeep } from "react-icons/tb";
import { motion } from 'framer-motion';
import { GrClose } from "react-icons/gr";


export default function Nav() {

  const [isOpen , setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <div className=' bg-slate-700  w-full h-screen flex  flex-col justify-start items-center fixed z-10'>
           <div className='w-full flex justify-end items-center p-2'>
           <motion.div initial={{scale: 0.4, opacity: 0.3}}  whileTap={{scale: 0.1, rotate: 320, opacity: 0.2}} whileInView={{scale: 1, opacity: 1}} ><GrClose onClick={() => setIsOpen(!isOpen)}   size={40} color='white' /></motion.div>
           </div>
            <div className='w-full h-[70%] mt-5 gap-7 flex flex-col justify-center items-center'>
              <motion.h1 initial={{scale: 0.3, opacity: 0.3}} whileInView={{scale: 1, opacity: 1}} transition={{duration: 1, ease: 'anticipate'}} className='text-white text-4xl'>link 1</motion.h1>
              <motion.h1 initial={{scale: 0.3, opacity: 0.3}} whileInView={{scale: 1, opacity: 1}} transition={{duration: 1, ease: 'anticipate'}} className='text-white text-4xl'>link 2</motion.h1>
              <motion.h1 initial={{scale: 0.3, opacity: 0.3}} whileInView={{scale: 1, opacity: 1}} transition={{duration: 1, ease: 'anticipate'}} className='text-white text-4xl'>link 3</motion.h1>
            </div>
          </div> }
      <div className='w-full h-content flex justify-between items-center absolute bg-transparent p-2 overflow-auto'>
          <h1 className='text-4xl text-white'>Logo</h1>
          <motion.div  initial={{scale: 0.4, opacity: 0.3}}  whileTap={{scale: 0.1, rotate: 320, opacity: 0.2}} whileInView={{scale: 1, opacity: 1}} ><TbMenuDeep onClick={() => setIsOpen(!isOpen)} className='md:hidden' size={45} color='white'  /></motion.div>
          <nav className='border text-white hidden border-orange-600 md:flex justify-between items-center w-[68%]'>
              <Link href={'/'}>Home</Link>
              <Link href={'/Services'}>Services</Link>
              <Link href={'/Contact'}>Contact</Link>
          </nav>
      </div>
    </>
  )
}


