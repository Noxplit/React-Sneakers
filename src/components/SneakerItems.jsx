import React from 'react'
import {BsPlusSquare} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'



const SneakerItems = ({id,items,price,title, onPlus, onFavorite}) => {
  const [favorite, setFavorite] = React.useState(false)
  const [cart, setCart] = React.useState(false)
  function Plus() {
    setCart(!cart)
    onPlus({items,price,title,id})

  }
  function Favorite() {
    setFavorite(!favorite)
    onFavorite({items,price,title,id})
  }
  return (
        <div className='item m-5 ml-9 '>
            <img  src={items} className='mx-auto' width={133} height={112} alt="" />
            <div className='text-center' >{title}</div>
            <div className=' text-gray-300 pl-2 pt-3 '>Цена:</div>
            <div className='flex justify-between p-3'>
            <span className='font-bold'>{price} руб.</span>
            <BsPlusSquare size={20} className={cart && ' bg-emerald-400 '}  onClick={Plus} />
            <AiOutlineHeart size={20} className={favorite && 'rounded-2xl bg-red-300'}  onClick={Favorite} />
            </div>
            
          </div>
  )
}

export default SneakerItems