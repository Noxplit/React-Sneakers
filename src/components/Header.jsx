import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import AppContext from './Context'

const Header = ({setCartOpen}) => {

  const {totalPrice} = React.useContext(AppContext)

	return (
			<div className='headerWidth385 flex justify-between  pt-10 ' >
          <div>
           <Link to='/'><img src="/img/icon.png" alt="no logo" className='logo flex bg-white ml-10 mb-3 '  width={50}/></Link> 
        </div> 
      <div  >
      
      <Link to='/'> <div className='headerSneakers'>
				<h3 className='bg-white font-bold text-xl '>REACT SNEAKERS</h3>
				<div className='bg-white text-gray-300' >Магазин лучших кроссовок</div>
        </div>
        </Link>
        </div>

        <div className='flex bg-white' >

      <AiOutlineShoppingCart onClick={() => setCartOpen(true)} size={30} className='flex cartShopping bg-white mr-2  cursor-pointer' />
				<span className='flex bg-white mr-2 font-bold'>{totalPrice} руб.</span>
				<Link to='/favorite'><AiOutlineHeart size={30} className='flex bg-white mr-2 cursor-pointer' /></Link>
			
        </div>
			</div>
				
	)
}

export default Header
