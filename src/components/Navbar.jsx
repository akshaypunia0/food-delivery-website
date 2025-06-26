import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';


const Navbar = () => {

    let { input, setInput, category, setCategory, showCart, setShowCart } = useContext(dataContext)

    useEffect(() => {
        const  newList = food_items.filter((item) =>item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
        setCategory(newList)
    }, [input])

    return (
        <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center
            rounded-md shadow-md'>
                <MdFastfood className='w-[30px] h-[30px] text-green-500' />
            </div>
            <form className='w-[50%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]'
                onSubmit={(e) => e.preventDefault()}>
                <FaSearch className='w-[20px] h-[20px] text-green-500' />
                <input type="text"
                    placeholder='search items...'
                    className='w-[100%] outline-none text-[16px] md:text-[20px]'
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
            </form>
            <div 
            className='w-[60px] h-[60px] bg-white flex justify-center items-center
            rounded-md shadow-md relative'
            onClick={() => setShowCart(true)}>
                <span className='absolute top-0 right-2 text-green-500 font-bold text-[18px]'>0</span>
                <LuShoppingBag 
                className='w-[30px] h-[30px] text-green-500 cursor-pointer' 
                />
            </div>
        </div>
    )
}

export default Navbar