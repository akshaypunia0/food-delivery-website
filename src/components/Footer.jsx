import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-full h-[80px] items-center px-5 md:px-8 sticky bottom-0 bg-gray-300 shadow-lg flex justify-center'>
            <div className='w-[70%] h-[100%] flex items-center '>
                <div className='w-[50%] h-[80%]  border-r-1 border-gray-600 flex items-center'>
                    <span className='text-xl text-gray-900'>© 2025 Akshay chaudhary. All rights reserved.</span>
                </div>
                <div className='w-[50%] h-[80%] flex gap-10 items-center justify-center'>
                    <div className='flex gap-3'>
                        <span className='text-[25px]'><a href="https://github.com/akshaypunia0" target='_blank'><FaGithub /></a></span>
                        <span className='text-lg font-semibold'><a href="https://github.com/akshaypunia0" target='_blank'>Github</a></span>
                    </div>
                    <div className='flex gap-3'>
                        <span className='text-[25px] text-blue-800'><a href="https://www.linkedin.com/in/akshay-punia" target='_blank'><FaLinkedin /></a></span>
                        <span className='text-lg font-semibold'><a href="https://www.linkedin.com/in/akshay-punia" target='_blank'>LinkedIn</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer