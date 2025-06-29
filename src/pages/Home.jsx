import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import Categories from '../Categories'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'


const Home = () => {


    let { category, setCategory, input, showCart, setShowCart } = useContext(dataContext)

    let items = useSelector(state => state.cart) //getting data which is stored in initialStage on utton click

    let subtotal = items.reduce((total, item) => total + item.price, 0)
    let deliveryFee = 40

    if (subtotal === 0) {
        deliveryFee = 0
    }

    let taxes = subtotal * (0.5 / 100)

    let total = Math.floor(subtotal + deliveryFee + taxes)


    function filter(category) {
        if (category === 'All') {
            setCategory(food_items)
        }
        else {
            let newList = food_items.filter((item) => (item.food_category === category))
            setCategory(newList)
        }
    }

    return (
        <div className='bg-slate-200 w-full min-h-screen'>
            <Navbar items={items} />

            {
                input ? null : <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]' >
                    {Categories.map((item) => (
                        <div key={item.id} className='w-[140px] h-[140px] bg-white flex flex-col items-start gap-5 p-5 text-[15px] 
                font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200'
                            onClick={() => filter(item.name)}>
                            {item.icon}
                            {item.name}
                        </div>
                    ))}
                </div>
            }


            <div className='w-full flex flex-wrap gap-[20px] px-5 justify-center items-center pt-8 pb-8'>
                {category.map((item) => (
                    <div key={item.id}><Card name={item.food_name}
                        image={item.food_image}
                        id={item.id}
                        price={item.price}
                        type={item.food_type} /></div>
                ))}
            </div>



            <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto
                ${showCart ? "translate-x-0" : "translate-x-full"}`}>
                <header className='w-[100%] flex justify-between items-center'>
                    <span className='text-green-400 text-[18px] font-semibold'>Order items</span>
                    <RxCross2
                        className=' w-[30px] h-[30px] text-green-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600'
                        onClick={() => setShowCart(false)} />
                </header>

                <div>
                    {items.map((item) => (
                        <Card2 key={item.id} name={item.name} price={item.price} image={item.image} qty={item.qty} id={item.id} />
                    ))}
                </div>

                <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8'>
                    <div className='w-full flex justify-between items-center'>
                        <span className='text-lg text-green-600 font-semibold'>Subtotal</span>
                        <span className='text-lg text-green-600 font-semibold'>Rs {subtotal}/-</span>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <span className='text-lg text-green-600 font-semibold'>Delivery fee</span>
                        <span className='text-lg text-green-600 font-semibold'>Rs {deliveryFee}/-</span>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <span className='text-lg text-green-600 font-semibold'>Taxes</span>
                        <span className='text-lg text-green-600 font-semibold'>Rs {taxes}/-</span>
                    </div>
                </div>

                <div className='w-full border-gray-400 flex flex-col gap-4 p-8'>
                    <div className='w-full flex justify-between items-center'>
                        <span className='text-2xl text-green-600 font-semibold'>Total</span>
                        <span className='text-2xl text-green-600 font-semibold'>Rs {total}/-</span>
                    </div>
                </div>

                <button className='w-[80%] p-3 bg-green-400 rounded-md text-white hover:bg-green-500
        font-semibold transition cursor-pointer '>Place order</button>

            </div>
        </div>

    )
}

export default Home