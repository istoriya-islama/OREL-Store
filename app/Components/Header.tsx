import Link from 'next/link'
import { BiSupport } from 'react-icons/bi'
import { GoHome } from 'react-icons/go'
import { IoApps } from "react-icons/io5";

export default function Header({ activityPage }: { activityPage: string }) {
	return (
		<header className='relative p-6 border-b border-gray-800 bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-between text-white select-none overflow-hidden'>
			{/* Декоративные элементы фона */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-0 left-1/4 w-32 h-32 bg-gray-700 rounded-full blur-3xl"></div>
				<div className="absolute top-0 right-1/4 w-32 h-32 bg-gray-600 rounded-full blur-3xl"></div>
			</div>

			{/* Логотип */}
			<div className="relative z-10">
				<h1 className='font-extrabold uppercase text-3xl tracking-wider bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent'>
					orel store
				</h1>
			</div>

			{/* Навигация */}
			<nav className='relative z-10 float-right w-9.5/12'>
				<ul className='flex justify-between items-center gap-4'>
					<li className={`mr-8 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-gray-800/50 hover:scale-105 ${
						activityPage === "home" 
							? "bg-gray-800/70 border-b-2 border-gray-600 shadow-lg" 
							: "border-none"
					}`}>
						<Link href="/" className="font-medium">Главная</Link>
					</li>

					<li className={`mr-8 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-gray-800/50 hover:scale-105 ${
						activityPage === "program" 
							? "bg-gray-800/70 border-b-2 border-gray-600 shadow-lg" 
							: "border-none"
					}`}>
						<a href='/pages/program' className="font-medium">Программы</a>
					</li>

					<li className={`mr-8 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-gray-800/50 hover:scale-105 ${
						activityPage === "orelprogram" 
							? "bg-gray-800/70 border-b-2 border-gray-600 shadow-lg" 
							: "border-none"
					}`}>
						<a href='/pages/orelprogram' className="font-medium">OREL Программы</a>
					</li>

					<li className={`mr-4 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-gray-800/50 hover:scale-105 ${
						activityPage === "modes" 
							? "bg-gray-800/70 border-b-2 border-gray-600 shadow-lg" 
							: "border-none"
					}`}>
						<a href='/pages/modes' className="font-medium">Режимы</a>
					</li>

					{/* Иконки */}
					<li className='mr-2.5 p-3 rounded-xl bg-gray-800/30 border border-gray-700 transition-all duration-300 hover:bg-gray-700/50 hover:scale-110 hover:rotate-12'>
						<a href='https://istoriya-islama.github.io/OREL/'>
							<GoHome size={20} />
						</a>
					</li>

					<li className='mr-1 p-3 rounded-xl bg-gray-800/30 border border-gray-700 transition-all duration-300 hover:bg-gray-700/50 hover:scale-110 hover:rotate-12'>
						<a href='https://orel-insider.onrender.com/'>
							<IoApps size={20} />
						</a>
					</li>

					<li className='mr-1 p-3 rounded-xl bg-gray-800/30 border border-gray-700 transition-all duration-300 hover:bg-gray-700/50 hover:scale-110 hover:rotate-12'>
						<a href='https://t.me/obr_orel_bot'>
							<BiSupport size={20} />
						</a>
					</li>
				</ul>
			</nav>

			{/* Нижняя декоративная линия */}
			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
		</header>
	)
}