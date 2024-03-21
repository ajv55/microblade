'use client';
import { alex_brush } from '@/app/font/font';
import {motion} from 'framer-motion'


export default function About() {
  return (
    <div className=' bg-slate-100 w-full h-content flex flex-col justify-start items-center gap-32 overflow-hidden'>
        <h1 className='text-center text-3xl mt-32'>Welcome to <span className={`${alex_brush.className} text-6xl text-pink-500`}>[Microblading Studio Name]</span></h1>
        <h3 className='text-center text-md '>At [Microblading Studio Name], <span className='font-bold'>we&#39;re dedicated to helping you achieve the perfect brows you&#39;ve always dreamed of.</span> Our team of skilled artisans combines artistry with precision to <span className='font-bold'>deliver flawless results tailored to your unique facial features.</span></h3>
        <h2 className='text-center text-4xl'>Why Choose Us ?</h2>
        <div>
            <motion.div initial={{scale: 0.2, opacity: 0.2, x: '0%'}} animate={{x: '50%'}} transition={{duration: 0.6, ease: 'easeInOut'}} whileInView={{scale: 1, opacity: 1, x: '15%'}} className='bg-slate-700 w-[28rem] h-[24rem] rounded-lg overflow-auto flex flex-col justify-start items-start p-2'>
                <motion.h1 initial={{scale: 0.2, opacity: 0.3, y: '-100%'}} animate={{y: '40%'}} transition={{duration: 1.43, ease: 'easeInOut'}} whileInView={{scale: 1, opacity: 1, y: '0%'}} className='text-white text-4xl mt-11 px-3'>Expert Technicians</motion.h1>
                <motion.p initial={{scale: 0.2, opacity: 0.3, y: '-100%'}} animate={{y: '40%'}} transition={{duration: 1.43, ease: 'easeInOut'}} whileInView={{scale: 1, opacity: 1, y: '0%'}} className='text-white text-xl mt-11 w-56 px-3'>Our technicians are trained professionals with years of experience in the art of microblading.</motion.p>
            </motion.div>

            <motion.div initial={{scale: 0.2, opacity: 0.2, x: '-400%'}} animate={{x: '50%'}} transition={{duration: 0.6, ease: 'easeInOut'}} whileInView={{scale: 1, opacity: 1, x: '-15%'}} className='bg-slate-700 w-[28rem] h-[24rem] rounded-lg overflow-auto flex flex-col justify-start items-end p-2 mt-32'>
                <motion.h1 initial={{scale: 0.2, opacity: 0.3, y: '-100%'}} animate={{y: '40%'}} transition={{duration: 1.43, ease: 'easeInOut'}} whileInView={{scale: 1, opacity: 1, y: '0%'}} className='text-white text-4xl mt-11 mr-20'>Tailored Results</motion.h1>
                <motion.p initial={{scale: 0.2, opacity: 0.3, y: '-100%'}} animate={{y: '40%'}} transition={{duration: 1.43, ease: 'easeInOut'}} whileInView={{scale: 1, opacity: 1, y: '0%'}} className='text-white text-xl mt-11 w-56 mr-[87px]'>We understand that every client is unique, which is why we customize each treatment to suit your individual preferences and natural features.</motion.p>
            </motion.div>

            <motion.div initial={{scale: 0.2, opacity: 0.2, x: '0%'}} animate={{x: '50%'}} transition={{duration: 0.6, ease: 'easeInOut'}} whileInView={{scale: 1, opacity: 1, x: '15%'}} className='bg-slate-700 w-[28rem] h-[24rem] rounded-lg overflow-auto flex flex-col justify-start items-start p-2 mt-32'>
                <motion.h1 initial={{scale: 0.2, opacity: 0.3, y: '-100%'}} animate={{y: '40%'}} transition={{duration: 1.43, ease: 'easeInOut'}} whileInView={{scale: 1, opacity: 1, y: '0%'}} className='text-white text-4xl mt-11 px-3 w-72'>Highest Quality Products</motion.h1>
                <motion.p initial={{scale: 0.2, opacity: 0.3, y: '-100%'}} animate={{y: '40%'}} transition={{duration: 1.43, ease: 'easeInOut'}} whileInView={{scale: 1, opacity: 1, y: '0%'}} className='text-white text-xl mt-11 w-56 px-3'>We use only the finest quality pigments and tools to ensure stunning, long-lasting results.</motion.p>
            </motion.div>

            <motion.div initial={{scale: 0.2, opacity: 0.2, x: '-400%'}} animate={{x: '50%'}} transition={{duration: 0.6, ease: 'easeInOut'}} whileInView={{scale: 1, opacity: 1, x: '-15%'}} className='bg-slate-700 w-[28rem] h-[24rem] rounded-lg overflow-auto flex flex-col justify-start items-end p-2 mt-32 mb-32'>
                <motion.h1 initial={{scale: 0.2, opacity: 0.3, y: '-100%'}} animate={{y: '40%'}} transition={{duration: 1.43, ease: 'easeInOut'}} whileInView={{scale: 1, opacity: 1, y: '0%'}} className='text-white text-4xl mt-11  w-80'>Exceptional Customer Service</motion.h1>
                <motion.p initial={{scale: 0.2, opacity: 0.3, y: '-100%'}} animate={{y: '40%'}} transition={{duration: 1.43, ease: 'easeInOut'}} whileInView={{scale: 1, opacity: 1, y: '0%'}} className='text-white text-xl mt-11 w-56 mr-[87px]'>Your satisfaction is our top priority, and we strive to provide a welcoming and comfortable experience from start to finish.</motion.p>
            </motion.div>
        </div>
    </div>
  )
}
