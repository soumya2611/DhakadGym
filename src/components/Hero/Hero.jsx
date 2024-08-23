import React from 'react';
import { FaPlay } from "react-icons/fa6";
import HeroImage from "../../assets/dumbell.png";
import { motion } from 'framer-motion';
import { SlideRight } from '../../utility/animation';

const Hero = () => {
  return (
    <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[550px] relative'>
      {/* Brand Info */}
      <div className='flex flex-col justify-center py-14 md:py-0'>
        <div className='text-center md:text-left space-y-6 font-playfair'>
          <motion.h1
            variants={SlideRight(0.6)}
            initial='hidden'
            animate='visible'
            className='text-5xl lg:text-6xl sm:text-5xl font-bold leading-relaxed xl:leading-tight'>
            Gym gives you the perfect <span className='text-primary'>Health</span>{" "}
          </motion.h1>
          <motion.p
            variants={SlideRight(1.2)}
            initial='hidden'
            animate='visible'
            className='text-gray-600 xl:max-w-[500px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis, natus tempore voluptates alias ratione ut iusto provide.
          </motion.p>
          {/* Button Section */}
          <motion.div
            variants={SlideRight(1.5)}
            initial='hidden'
            animate='visible'
            className='flex justify-center gap-8 md:justify-start'>
            <button className='primary-btn flex items-center gap-2 mt-4'>
              Order Now
            </button>
            <button className='flex justify-center items-center gap-2 mt-4'>
              <FaPlay /> Watch Now
            </button>
          </motion.div>
        </div>
      </div>
      {/* Hero Image */}
      <div className='flex justify-center items-center'>
        <motion.img
          variants={SlideRight(0.9)}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.9, x: 0 }}
          transition={{ duration: 1.5 }}
          src={HeroImage}
          alt="Dumbell"
          className='w-[350px] md:w-[550px] xl:w-[600px] drop-shadow'
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Hero;
