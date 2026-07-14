import Header from '@/app/Components/Header'

export default function Modes() {
	return (
		<div className='min-h-screen bg-black'>
			<div
				className='fixed inset-0 opacity-[0.025] pointer-events-none'
				style={{
					backgroundImage:
						'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
					backgroundSize: '40px 40px',
				}}
			/>

			<div className='relative z-10'>
				<Header activityPage='modes' />

				<div className='max-w-4xl mx-auto px-4 py-8 md:py-12'>
					<div className='mb-8'>
						<p className='text-gray-700 text-xs uppercase tracking-widest mb-2'>
							Скоро
						</p>
						<h1 className='text-3xl md:text-4xl font-black text-white mb-2'>
							Режимы
						</h1>
						<p className='text-gray-600 text-sm'>
							Специальные режимы работы OREL Store
						</p>
					</div>

					{/* Placeholder */}
					<div className='flex flex-col items-center justify-center py-24 border border-gray-900 rounded-3xl bg-gray-950'>
						<img
							src='https://istoriya-islama.github.io/ORELm/Components/img/logo.png'
							alt='OREL'
							className='w-16 h-16 rounded-2xl border border-gray-800 mb-6 opacity-40'
						/>
						<h2 className='text-white font-bold text-xl mb-2'>
							Скоро будет доступно
						</h2>
						<p className='text-gray-600 text-sm text-center max-w-xs'>
							Режимы находятся в разработке. Следите за обновлениями в
							поддержке.
						</p>
						<a
							href='https://t.me/obr_orel_bot'
							className='mt-6 px-5 py-2.5 border border-gray-800 rounded-xl text-gray-500 text-sm font-semibold hover:text-white hover:border-gray-700 hover:bg-gray-900 transition-all'
						>
							Следить за обновлениями
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
