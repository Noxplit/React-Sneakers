import './App.css'


import Main from './components/pages/Main'
import React from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Favorite from './components/pages/Favorite'
import Order from './components/pages/Order'
import AppContext from './components/Context'

function App() {
	const [cartItems, setCartItems] = React.useState([])
	const [cartOpen, setCartOpen] = React.useState(false)
	const [searchValue, setSearchValue] = React.useState('')
	const [favorite, setFavorite] = React.useState([])
	const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

	function addToCard(obj) {
		axios.post('https://629a74376f8c03a978565cd5.mockapi.io/cart', obj)

		setCartItems(prev => [...prev, obj])
	}

	function onRemoveCart(id) {
		axios.delete(`https://629a74376f8c03a978565cd5.mockapi.io/cart/${id}`)
		setCartItems(prev => prev.filter(item => item.id !== id))
	}
	function addToFavorite(obj) {
		axios.post('https://629a74376f8c03a978565cd5.mockapi.io/favorites', obj)

		setFavorite(prev => [...prev, obj])
	}

	function onRemoveCartFavorite(id) {
		axios.delete(`https://629a74376f8c03a978565cd5.mockapi.io/favorites/${id}`)
		setFavorite(prev => prev.filter(item => item.id !== id))
	}

	return (
		<AppContext.Provider value={{ cartItems, favorite, setCartItems, totalPrice, cartOpen }}>
			<>
				<div className='App'></div>
				<Routes>
					<Route path='/order' element={<Order />} />
					<Route
						path='/'
						element={
							<Main
								setCartOpen={setCartOpen}
								cartOpen={cartOpen}
								onRemoveCart={onRemoveCart}
								searchValue={searchValue}
								setSearchValue={setSearchValue}
								addToCard={obj => addToCard(obj)}
								addToFavorite={obj => addToFavorite(obj)}
							/>
						}
					/>
					<Route
						path='/favorite'
						element={<Favorite RemoveFavorite={onRemoveCartFavorite} setFavorite={setFavorite} />}
					/>
					<Route path='/order' element={<Order />} />
				</Routes>
			</>
		</AppContext.Provider>
	)
}

export default App
