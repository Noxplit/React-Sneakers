import React from 'react'
import SneakerItems from '../SneakerItems'
import Skeleton from '../Skeleton'
import axios from 'axios'
import Cart from '../Cart'
import Header from '../Header'
import { useEffect } from 'react'
import { ImCancelCircle } from 'react-icons/im'

const Main = ({
	setCartOpen,
	addToCard,
	setSearchValue,
	searchValue,
	addToFavorite,
	onRemoveCart,
}) => {
	const [items, setItems] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(true)
	const renderSketelton = (
		<div>
			<h1 className='text-center text-2xl font-bold'>Загрузка...</h1>
			<div className=' flex flex-wrap'>
				{items.map(id => (
					<Skeleton key={id} />
				))}
			</div>
		</div>
	)

	const renderItems = (
		<div className='flex flex-wrap'>
			{items
				.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
				.map((item, id) => (
					<SneakerItems
						{...item}
						key={id}
						onFavorite={obj => addToFavorite(obj)}
						onPlus={obj => addToCard(obj)}
					/>
				))}
		</div>
	)

	useEffect(() => {
		async function fetchAxios() {
			setIsLoading(false)
			const itemsResp = await axios.get('https://629a74376f8c03a978565cd5.mockapi.io/items')
			setItems(itemsResp.data)

			setIsLoading(true)
		}

		fetchAxios()
	}, [])
	return (
		<div className='wrapper rounded-2xl'>
			<div>
				<Header setCartOpen={setCartOpen} />
			</div>
			<div>
				<Cart onRemoveCart={onRemoveCart} setCartOpen={setCartOpen} />
			</div>

				
          
          <div className=' widthMiddle  text-2xl font-bold pl-7'>
          
					{searchValue ? `Поиск по запросу '${searchValue}'` : 'Все кроссовки'}
				
				<div className='flex'>
					<input
						value={searchValue}
						onChange={e => setSearchValue(e.target.value)}
						type='text'
						placeholder='Поиск...'
						className='border-2 rounded-md mr-10 searchWidth320'
					/>
					<ImCancelCircle
						onClick={() => setSearchValue('')}
						size={20}
						className=' text-gray-300 mr-10 mt-1 cursor-pointer'
					/>
          </div>
				
        </div>
			{isLoading ? renderItems : renderSketelton}
		</div>
	)
}

export default Main
