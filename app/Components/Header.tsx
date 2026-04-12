'use client'

import Link from 'next/link'
import { useState } from 'react'
import { BiSupport } from 'react-icons/bi'
import { GoHome } from 'react-icons/go'
import { IoApps, IoClose, IoMenu } from 'react-icons/io5'

export default function Header({ activityPage }: { activityPage: string }) {
	const [menuOpen, setMenuOpen] = useState(false)

	const navLinks = [
		{ label: 'Главная', href: '/', key: 'home' },
		{ label: 'Программы', href: '/pages/program', key: 'program' },
		{ label: 'OREL Программы', href: '/pages/orelprogram', key: 'orelprogram' },
		{ label: 'Режимы', href: '/pages/modes', key: 'modes' },
	]

	const iconLinks = [
		{ href: 'https://istoriya-islama.github.io/OREL/', icon: <GoHome size={20} /> },
		{ href: 'https://orel-insider.onrender.com/', icon: <IoApps size={20} /> },
		{ href: 'https://t.me/obr_orel_bot', icon: <BiSupport size={20} /> },
	]

	return (
		<>
			<header className='relative border-b border-gray-800 bg-gradient-to-r from-black via-gray-900 to-black text-white select-none overflow-hidden'>
				{/* Декоративный фон */}
				<div className='absolute inset-0 opacity-10 pointer-events-none'>
					<div className='absolute top-0 left-1/4 w-32 h-32 bg-gray-700 rounded-full blur-3xl' />
					<div className='absolute top-0 right-1/4 w-32 h-32 bg-gray-600 rounded-full blur-3xl' />
				</div>

				{/* ── Мобильная шапка ── */}
				<div className='relative z-10 flex items-center justify-between px-4 py-4 md:hidden'>
					{/* Бургер слева */}
					<button
						onClick={() => setMenuOpen(v => !v)}
						className='p-2 rounded-xl bg-gray-800/40 border border-gray-700 transition-all active:scale-95'
						aria-label='Открыть меню'
					>
						{menuOpen ? <IoClose size={22} /> : <IoMenu size={22} />}
					</button>

					{/* Лого по центру */}
					<h1 className='absolute left-1/2 -translate-x-1/2 font-extrabold uppercase text-2xl tracking-wider bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent'>
						orel store
					</h1>

					{/* Иконки справа */}
					{ /*<div className='flex gap-2'>
						{iconLinks.map((item, i) => (
							<a
								key={i}
								href={item.href}
								className='p-2 rounded-xl bg-gray-800/30 border border-gray-700 transition-all active:scale-95'
							>
								{item.icon}
							</a>
						))}
					</div> */}
				</div>

				{/* ── Десктопная шапка ── */}
				<div className='relative z-10 hidden md:flex items-center justify-between px-6 py-5'>
					<h1 className='font-extrabold uppercase text-3xl tracking-wider bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent'>
						orel store
					</h1>

					<nav>
						<ul className='flex items-center gap-4'>
							{navLinks.map(link => (
								<li key={link.key}>
									<a
										href={link.href}
										className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:bg-gray-800/50 hover:scale-105 block ${
											activityPage === link.key
												? 'bg-gray-800/70 border-b-2 border-gray-600 shadow-lg'
												: ''
										}`}
									>
										{link.label}
									</a>
								</li>
							))}

							{iconLinks.map((item, i) => (
								<li key={i}>
									<a
										href={item.href}
										className='p-3 rounded-xl bg-gray-800/30 border border-gray-700 transition-all duration-300 hover:bg-gray-700/50 hover:scale-110 hover:rotate-12 block'
									>
										{item.icon}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>

				{/* Нижняя линия */}
				<div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent' />
			</header>

			{/* ── Мобильное выдвижное меню ── */}
			<div
				className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
					menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
				}`}
			>
				{/* Затемнение фона */}
				<div
					className='absolute inset-0 bg-black/70 backdrop-blur-sm'
					onClick={() => setMenuOpen(false)}
				/>

				{/* Панель меню */}
				<div
					className={`absolute top-0 left-0 h-full w-72 bg-gradient-to-b from-gray-900 via-gray-950 to-black border-r border-gray-800 flex flex-col transition-transform duration-300 ${
						menuOpen ? 'translate-x-0' : '-translate-x-full'
					}`}
				>
					{/* Шапка меню */}
					<div className='flex items-center justify-between px-5 py-5 border-b border-gray-800'>
						<h2 className='font-extrabold uppercase text-xl tracking-wider bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent'>
							orel store
						</h2>
						<button
							onClick={() => setMenuOpen(false)}
							className='p-2 rounded-xl bg-gray-800/50 border border-gray-700 active:scale-95 transition-all'
						>
							<IoClose size={20} />
						</button>
					</div>

					{/* Ссылки */}
					<nav className='flex-1 px-4 py-6'>
						<ul className='flex flex-col gap-2'>
							{navLinks.map(link => (
								<li key={link.key}>
									<a
										href={link.href}
										onClick={() => setMenuOpen(false)}
										className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 active:scale-95 ${
											activityPage === link.key
												? 'bg-gray-800/80 border border-gray-600 text-white'
												: 'text-gray-400 hover:bg-gray-800/40 hover:text-white'
										}`}
									>
										{activityPage === link.key && (
											<span className='w-1.5 h-1.5 rounded-full bg-white' />
										)}
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</nav>

					{/* Иконки внизу */}
					<div className='px-4 py-5 border-t border-gray-800'>
						<p className='text-gray-600 text-xs uppercase tracking-widest mb-3'>Ссылки</p>
						<div className='flex gap-3'>
							{iconLinks.map((item, i) => (
								<a
									key={i}
									href={item.href}
									className='p-3 rounded-xl bg-gray-800/30 border border-gray-700 transition-all hover:bg-gray-700/50 active:scale-95'
								>
									{item.icon}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}