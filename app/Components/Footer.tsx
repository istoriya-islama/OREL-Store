import { BiSupport } from 'react-icons/bi'
import { GoHome } from 'react-icons/go'

export default function Footer() {
	return (
		<footer className='relative px-4 py-4 sm:px-6 sm:py-6 border-t border-gray-800 bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-between text-white select-none overflow-hidden'>
			{/* Декоративный фон */}
			<div className='absolute inset-0 opacity-10'>
				<div className='absolute top-0 left-1/4 w-32 h-32 bg-gray-700 rounded-full blur-3xl' />
				<div className='absolute top-0 right-1/4 w-32 h-32 bg-gray-600 rounded-full blur-3xl' />
			</div>

			{/* Логотип */}
			<div className='relative z-10'>
				<h1 className='font-extrabold uppercase text-base sm:text-xl tracking-wider bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent'>
					orel store
				</h1>
			</div>

			{/* Иконки */}
			<nav className='relative z-10'>
				<ul className='flex items-center gap-2 sm:gap-4'>
					<li>
						<a
							href='https://istoriya-islama.github.io/OREL/'
							className='p-2.5 sm:p-3 rounded-xl bg-gray-800/30 border border-gray-700 transition-all duration-300 hover:bg-gray-700/50 hover:scale-110 hover:rotate-12 flex items-center justify-center active:scale-95'
						>
							<GoHome size={16} className='sm:w-[18px] sm:h-[18px]' />
						</a>
					</li>
					<li>
						<a
							href='https://t.me/obr_orel_bot'
							className='p-2.5 sm:p-3 rounded-xl bg-gray-800/30 border border-gray-700 transition-all duration-300 hover:bg-gray-700/50 hover:scale-110 hover:rotate-12 flex items-center justify-center active:scale-95'
						>
							<BiSupport size={16} className='sm:w-[18px] sm:h-[18px]' />
						</a>
					</li>
				</ul>
			</nav>

			{/* Верхняя декоративная линия */}
			<div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent' />
		</footer>
	)
}
