import React from 'react'
import { useEffect } from 'react'
import { ImCancelCircle } from 'react-icons/im'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AppContext from '../Context'
import Header from '../Header'

const Favorite = ({ RemoveFavorite, setFavorite}) => {

  const {favorite, setCartOpen} = React.useContext(AppContext)
  useEffect((
    
  ) => {
    axios.get('https://629a74376f8c03a978565cd5.mockapi.io/favorites').then((res) => {setFavorite(res.data)})
  }, [])
  return (
    <div className="wrapper">
			<Header setCartOpen={setCartOpen} />
        {favorite.length > 0 ? <>
          <div className="pl-10  text-2xl  font-bold">Мои закладки</div>
      <div className='flex flex-wrap'>
          {favorite.map((items, id) =>(
              <div className='item  m-5 ml-9 ' key={id}>
              <img  src={items.items} className='mx-auto' width={133} height={112} alt="" />
              <div className='text-center' >{items.title}</div>
              <div className=' text-gray-300 pl-2 pt-3 '>Цена:</div>
              <div className='flex justify-between p-3'>
              <span className='font-bold'>{items.price}</span>
              <ImCancelCircle  onClick={() => RemoveFavorite(items.id)}
                        className='rounded-sm delete text-gray-300'
                        size={25}/>
              
              </div>
              </div>
              
      ))}
       </div>
 </> :    <div className=' favorite  '>
  <img src="/img/smile.png" className='mx-auto' alt="" width={60} />
  <h1 className="pl-10  text-2xl  font-bold text-center">Закладок нет :(</h1>
  <div className='text-gray-400 text-center'>Вы ничего не добавляли в закладки</div>
  <Link to='/'><div  className=' button font-bold rounded-2xl bg-emerald-400 text-white text-center p-3  mx-auto cursor-pointer mt-4'>
								Вернуться назад
							</div></Link></div>
  }
      
      
            
         
		</div>
  )
}

export default Favorite