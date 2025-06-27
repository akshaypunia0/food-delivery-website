import React from 'react'
import image1 from '../assets/image1.avif'
import { RiDeleteBin6Line } from "react-icons/ri";

const Card2 = () => {
    return (
        <div className='w-[full] h-[110px] p-2 flex justify-between shadow-lg'>
            <div className='w-[70%] h-full flex'>
                <div className='w-[50%] h-full overflow-hidden rounded-lg'>
                    <img src={image1} alt="" className='object-cover' />
                </div>
                <div className='w-[50%] h-full flex flex-col gap-5 items-center'>
                    <div className='text-lg text-gray-600 font-semibold'>
                        Pancake
                    </div>
                    <div className='w-[110px] h-[40px] bg-slate-300 flex rounded-lg overflow-hidden shadow-lg border-2 border-green-500 font-semibold text-xl'>
                        <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-500 hover:bg-gray-100'>-</button>
                        <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-500'>2</span>
                        <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-500 hover:bg-gray-100'>+</button>
                    </div>
                </div>
            </div>

            <div className='w-[30%] h-full p-2 flex flex-col items-end justify-start gap-6'>
                <span className='text-xl text-green-400 font-semibold'>
                    Rs 399/-
                </span>
                <RiDeleteBin6Line className='w-[30px] h-[30px] text-red-500'/>
            </div>
        </div>
    )
}

export default Card2