import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
const ResponsiveMenu = ({open}) => {
    return (
        <AnimatePresence mode='wait'>
            {open && (
                <motion.div
                    initial={{ opacity: 0,y:-100 }}
                    animate={{ opacity: 1,y:0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className='absolute top-20 left-0 w-full h-screen z-20'>
                    <div className='text-xl font-semibold bg-primary text-white py-10 m-6 rounded-3xl '>
                        <ul className='flex flex-col justify-center items-center gap-10'>
                            <li className='hover:bg-white hover:text-primary rounded-xl p-2 hover:border cursor-pointer'>home</li>
                            <li className='hover:bg-white hover:text-primary rounded-xl p-2 hover:border cursor-pointer '>About</li>
                            <li className='hover:bg-white hover:text-primary rounded-xl p-2 hover:border cursor-pointer'>Service </li>
                            <li className='hover:bg-white hover:text-primary rounded-xl p-2 hover:border cursor-pointer'>Contact </li>
                        </ul>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
    )
}

export default ResponsiveMenu