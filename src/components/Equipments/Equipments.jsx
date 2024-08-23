import React from 'react'
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { motion } from 'framer-motion';
import { SlideLeft } from '../../utility/animation';
const EquipmentData = [{
    id: 1,
    title: "Yoga Equipments",
    desc: "Yoga is a group of physical, mental, and spiritual practices or disciplines that originated in ancient India .",
    icon: <GrYoga />,
    delay:0.3
     },
    {
       id: 2,
    title: "Muscle Equipments",
    desc: "Yoga is a group of physical, mental, and spiritual practices or disciplines that originated in ancient India .",
    icon: < FaDumbbell/>,
    delay:0.3
    },
{  id: 3,
    title: "Fitness Equipments",
    desc: "Yoga is a group of physical, mental, and spiritual practices or disciplines that originated in ancient India .",
    icon: <GiGymBag />,
    delay:0.3}]
const Equipments = () => {

  return (
      <div>
          <div className='container py-24'>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair'>
                  <div className='space-y-3 p-6'>
                      <h1 className='text-3xl md:text-4xl font-bold '>What we offer for you</h1>
                      <p className='text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, labore.</p>
                  </div>
                  {
                      EquipmentData.map((data) => {
                          return (
                              <motion.div 
                                  variants={SlideLeft(data.delay)}
                                  initial='hidden'    
                                whileInView='visible'
                                  key={data.id} className='space-y-4  p-6 bg-[#fbfbfb] hover:bg-white rounded-xl hover:shadow-[0 0 22px 0 rgba(0,0,0,0.15)]'>
                                <div style={{color:'orange'}} className='text-4xl'>{ data.icon}</div>
                                  <div className='text-2xl font-semibold '>{ data.title}</div>
                                  <div className='text-primary'>{ data.desc}</div>
                              </motion.div>
                          )
                      })
                  }
              </div>
          </div>
      </div>
  )
}

export default Equipments