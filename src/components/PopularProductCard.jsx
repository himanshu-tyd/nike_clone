import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full sm:items-center ' >
        <img src={imgURL} alt={name} className='w-[280px] h-[280px] hover:scale-105 duration-75 cursor-pointer ' />

        <div className='flex mt-8 justify-start gap-2.5' >
            <img src={star} alt='star' width={24} height={24} />
            <p className='font-montserrat text text-xl leading-normal text-slate-gray ' >(4.5)</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin' >{name}</h3>
        <p className='mt-2 font-semibold font-montserrat text-coral-red leading-normal text-2xl' >{price}</p>
    </div> 
)}

export default PopularProductCard;