import React from 'react'
import { Link } from 'react-router-dom'

const Order = () => {




  return (
    <div className='wrapper text-center  favorite '>
      <img src="/img/order.png" alt="" className='mx-auto' width={100}/>
      <div className='font-bold text-2xl pt-10'>Ваш заказ №{Math.floor(Math.random() * 256)} успешно оформлен</div>
      <div className='text-gray-400 pt-2'>Ваш заказ скоро будет передан курьерской доставке</div>
      <Link to='/'><div  className=' font-bold rounded-2xl bg-emerald-400 text-white text-center p-3  mx-auto cursor-pointer mt-10 w-1/4'>
									Вернуться назад
								</div></Link>
      </div>
  )
}

export default Order