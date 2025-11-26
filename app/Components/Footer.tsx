import Link from 'next/link'
import { BiSupport } from 'react-icons/bi'
import { GoHome } from 'react-icons/go'

export default function Footer() {
	return (
		<footer className='relative p-6 border-b border-gray-800 bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-between text-white select-none overflow-hidden'>
			{/* Декоративные элементы фона */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-0 left-1/4 w-32 h-32 bg-gray-700 rounded-full blur-3xl"></div>
				<div className="absolute top-0 right-1/4 w-32 h-32 bg-gray-600 rounded-full blur-3xl"></div>
			</div>

			{/* Логотип */}
			<div className="relative z-10">
				<h1 className='font-extrabold uppercase text-xl tracking-wider bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent'>
					orel store
				</h1>
			</div>

			{/* Навигация */}
			<nav className='relative z-10 float-right w-9.5/12'>
				<ul className='flex justify-between items-center gap-4'>
					{/* Иконки */}
					<li className='mr-2.5 p-3 rounded-xl bg-gray-800/30 border border-gray-700 transition-all duration-300 hover:bg-gray-700/50 hover:scale-110 hover:rotate-12'>
						<a href='https://istoriya-islama.github.io/OREL/'>
							<GoHome size={10} />
						</a>
					</li>

					<li className='mr-1 p-3 rounded-xl bg-gray-800/30 border border-gray-700 transition-all duration-300 hover:bg-gray-700/50 hover:scale-110 hover:rotate-12'>
						<a href='https://t.me/obr_orel_bot'>
							<BiSupport size={10} />
						</a>
					</li>
				</ul>
			</nav>

			{/* Нижняя декоративная линия */}
			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
		</footer>
	)
}