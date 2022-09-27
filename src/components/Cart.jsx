import React from 'react'
import { useEffect } from 'react'
import { ImCancelCircle } from 'react-icons/im'
import AppContext from './Context'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Cart = ({ setCartOpen, onRemoveCart }) => {
	const { cartItems, setCartItems, totalPrice, cartOpen } = React.useContext(AppContext)
	const taxPrice = (totalPrice / 100) * 5

	
  

	useEffect(() => {
		async function axiosCart() {
			const cartResp = await axios.get('https://629a74376f8c03a978565cd5.mockapi.io/cart')
			setCartItems(cartResp.data)
		}
		axiosCart()
	}, [])
	return (
		<div>
			<div className={cartOpen ? 'overlay overlayVisible' : 'overlay overlayHidden'}>
				<div className='drawer flex flex-col '>
					<div>
						<div className='flex justify-between p-3'>
							<h3 className='text-center font-bold  text-2xl'>Корзина</h3>
							<ImCancelCircle
								onClick={() => setCartOpen(false)}
								className='rounded-sm delete text-gray-300 cursor-pointer '
								size={30}
							/>
						</div>
					</div>
					{cartItems.length === 0 ? (
						<div>
							<img src='/img/cartEmpty.png' alt='' className='mx-auto pt-10' />
							<div className='text-center text-2xl font-bold'>Корзина пустая</div>
							<div className='text-gray-400 text-center pt-5'>
								Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
							</div>
							<div
								onClick={() => setCartOpen(false)}
								className=' font-bold rounded-2xl bg-emerald-400 text-white text-center p-3  mx-auto cursor-pointer mt-4'>
								Вернуться назад
							</div>
						</div>
					) : (
						<>
							{cartItems.map((obj, id) => (
								<div key={id} className='item  ml-9  '>
									<img src={obj.items} className='mx-auto' width={100} height={100} alt='' />
									<div className='text-center'>{obj.title}</div>
									<div className='flex justify-between p-3'>
										<span className='font-bold text-center'>{obj.price} руб.</span>
										<ImCancelCircle
											onClick={() => onRemoveCart(obj.id)}
											className='rounded-sm delete text-gray-300'
											size={25}
										/>
									</div>
								</div>
							))}

							<div className='m-5'>
								<div className='flex justify-between font-bold '>
									<div>Итого:</div>
									<div>{Math.ceil(totalPrice)} руб.</div>
								</div>
								<div className='flex justify-between font-bold '>
									<div>Налог 5%: </div>
									<div>{Math.ceil(taxPrice)} руб. </div>
								</div>
								<Link to='/order'>
									<div  className=' font-bold rounded-2xl bg-emerald-400 text-white text-center p-3  mx-auto cursor-pointer mt-4'>
										Оформить заказ
									</div>
								</Link>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default Cart
