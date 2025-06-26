import React from 'react'
import image1 from '../assets/image1.avif'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";

const Card = ({name, image, id, price, type}) => {
  return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-400'>
        <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
            <img src={image} alt="" className='object-cover'/>
        </div>

        <div className='text-2xl font-semibold'>
            {name}
        </div>

        <div className='w-full flex justify-between items-center '>
            <div className='text-lg font-bold text-green-500'>{price}/-</div>
            <div className='text-lg font-semibold text-green-500 flex gap-2 items-center justify-center'> {type == 'veg' ? <LuLeafyGreen /> : <GiChickenOven/>} <span>{type}</span></div>
        </div>
        <button className='w-[100%] p-3 bg-green-400 rounded-md text-white hover:bg-green-500 font-semibold transition cursor-pointer'>Add to dish</button>
    </div>
  )
}

export default Card