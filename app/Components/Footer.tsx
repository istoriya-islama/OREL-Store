import { BiSupport } from 'react-icons/bi'
import { GoHome } from 'react-icons/go'

export default function Footer() {
	return (
		<footer className='border-t border-gray-900 bg-black/60 backdrop-blur-sm'>
			<div className='max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4'>
				<div>
					<span className='font-black uppercase text-lg tracking-widest text-white'>
						OREL
						<span className='text-gray-600 font-light normal-case tracking-normal text-sm ml-1'>
							store
						</span>
					</span>
					<p className='text-gray-700 text-xs mt-0.5'>
						Магазин приложений OREL
					</p>
				</div>

				<div className='flex items-center gap-2'>
					<a
						href='https://istoriya-islama.github.io/OREL/'
						aria-label='Главный сайт'
						className='p-2.5 rounded-xl border border-gray-900 text-gray-600 hover:text-white hover:border-gray-800 hover:bg-gray-900 transition-all active:scale-95'
					>
						<GoHome size={16} />
					</a>
					<a
						href='https://t.me/obr_orel_bot'
						aria-label='Поддержка'
						className='p-2.5 rounded-xl border border-gray-900 text-gray-600 hover:text-white hover:border-gray-800 hover:bg-gray-900 transition-all active:scale-95'
					>
						<BiSupport size={16} />
					</a>
					<a
						href='https://t.me/obr_orel_bot'
						className='ml-2 px-4 py-2 rounded-xl text-sm border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-900 transition-all'
					>
						Написать отзыв → Поддержка
					</a>
				</div>
			</div>
		</footer>
	)
}
