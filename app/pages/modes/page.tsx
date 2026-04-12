import Cover from '@/app/Components/Cover'
import Header from '@/app/Components/Header'

export default function Modes() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden'>
			{/* Фон */}
			<div className='fixed inset-0 opacity-5 pointer-events-none'>
				<div className='absolute top-10 left-4 w-48 h-48 sm:top-20 sm:left-10 sm:w-96 sm:h-96 bg-gray-700 rounded-full blur-3xl' />
				<div className='absolute bottom-10 right-4 w-48 h-48 sm:bottom-20 sm:right-10 sm:w-96 sm:h-96 bg-gray-600 rounded-full blur-3xl' />
			</div>
			<div
				className='fixed inset-0 opacity-5 pointer-events-none'
				style={{
					backgroundImage:
						'linear-gradient(rgba(75, 85, 99, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(75, 85, 99, 0.3) 1px, transparent 1px)',
					backgroundSize: 'clamp(30px, 5vw, 50px) clamp(30px, 5vw, 50px)',
				}}
			/>

			<div className='relative z-10'>
				<Header activityPage={'modes'} />
				<Cover namePage={'Режимы'} />

				<div className='max-w-6xl mx-auto px-4 py-8 md:py-12'>
					<h2 className='text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center'>
						Доступные Режимы
					</h2>

					<ul className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6'>
						<li className='bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-4 md:p-6 hover:bg-gray-800/70 hover:scale-105 transition-all duration-300 cursor-pointer group'>
							<div className='w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform'>
								<img
									src='https://istoriya-islama.github.io/ORELm/Components/img/logo.png'
									alt='Mode'
									className='w-8 h-8 md:w-12 md:h-12 group-hover:rotate-12 transition-transform rounded-xl'
								/>
							</div>

							<h3 className='text-base md:text-xl font-bold text-white mb-1 md:mb-2 leading-tight'>
								Скоро будет доступно!
							</h3>

							<p className='text-gray-400 text-xs md:text-sm'>Подождите...</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
