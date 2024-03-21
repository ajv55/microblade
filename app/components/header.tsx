'use client'
import {motion} from 'framer-motion';

//font 
import { dancing_script } from '@/app/font/font';

export default function Header() {

  return (
    <div style={{
      backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1.0), rgba(0, 0, 0, 0.3)), url("/microblading.gif")'
    }} className="bg-cover bg-right bg-no-repeat w-full h-screen gap-12 flex flex-col justify-center items-center p-1">
      <motion.h1 className={`${dancing_script.className} text-center  text-5xl md:text-8xl bg-gradient-to-r from-violet-600 to-fuchsia-300 text-transparent bg-clip-text`} initial={{scale: 0.3, opacity: 0.3, x: '100%'}} animate={{ x: "0%" }} transition={{duration: 1.25, ease: 'easeInOut'}} whileInView={{scale: 1, opacity: 1}} >Elevate Your Beauty with Exquisite Microblading</motion.h1>
      <motion.h1 className={`${dancing_script.className} text-center text-2xl md:text-5xl bg-gradient-to-r from-violet-600 to-fuchsia-200 text-transparent bg-clip-text`} initial={{scale: 0.3, opacity: 0.3, x: '-400%'}} animate={{ x: "0%" }} transition={{duration: 1.25, ease: 'easeInOut'}} whileInView={{scale: 1, opacity: 1}} >Crafting Flawless Brows Tailored Just for You</motion.h1>
      <motion.button initial={{scale: 0.3, opacity: 0.3, y: "400%"}} whileInView={{scale: 1, opacity: 1, y: "0%"}} animate={{y: "-100%", rotate: 0}} whileTap={{rotate: 50}} transition={{duration: 1.15, ease: 'backOut'}} className='bg-fuchsia-300 px-5 py-2 md:px-8 md:py-3 text-center text-lg md:text-2xl rounded-xl md:rounded-2xl shadow-md shadow-white'>Book Now!</motion.button>
    </div>
  )
}
