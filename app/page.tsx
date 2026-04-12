'use client'

import Cover from './Components/Cover'
import Header from './Components/Header'
import PopularProgram from './Components/PopularProgram'

export default function Home() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden'>
			{/* Декоративные фоновые элементы — уменьшены для мобилки */}
			<div className='fixed inset-0 opacity-5 pointer-events-none'>
				<div className='absolute top-10 left-4 w-48 h-48 sm:w-96 sm:h-96 sm:left-10 sm:top-20 bg-gray-700 rounded-full blur-3xl'></div>
				<div className='absolute bottom-10 right-4 w-48 h-48 sm:w-96 sm:h-96 sm:bottom-20 sm:right-10 bg-gray-600 rounded-full blur-3xl'></div>
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-[600px] sm:h-[600px] bg-gray-800 rounded-full blur-3xl'></div>
			</div>

			{/* Сетка на фоне — мельче на мобилке */}
			<div
				className='fixed inset-0 opacity-5 pointer-events-none'
				style={{
					backgroundImage:
						'linear-gradient(rgba(75, 85, 99, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(75, 85, 99, 0.3) 1px, transparent 1px)',
					backgroundSize: 'clamp(30px, 5vw, 50px) clamp(30px, 5vw, 50px)',
				}}
			/>

			{/* Контент */}
			<div className='relative z-10 flex flex-col min-h-screen'>
				<Header activityPage={'home'} />
				<main className='flex-1 px-4 sm:px-6 lg:px-8'>
					<Cover namePage={'Главная'} />
					<PopularProgram />
				</main>
			</div>

			{/* Градиентная виньетка */}
			<div className='fixed inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-black/50' />
		</div>
	)
}
