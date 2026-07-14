'use client'

import Header from './Components/Header'
import { useState, useEffect } from 'react'

const featuredApps = [
	{
		name: 'OREL Погода',
		tagline: 'Точный прогноз с AI-рекомендациями',
		icon: 'https://istoriya-islama.github.io/OREL/Components/img/newWeather.ico',
		href: '/pages/programs/Weather',
		badge: 'v2.4',
		accent: 'from-slate-900 to-gray-950',
	},
	{
		name: 'OREL Калькулятор',
		tagline: 'Мощный научный калькулятор',
		icon: 'https://istoriya-islama.github.io/OREL/Components/img/newCalculator.ico',
		href: '/pages/programs/Calculator',
		badge: 'v2.9',
		accent: 'from-zinc-900 to-gray-950',
	},
	{
		name: 'OREL Часы',
		tagline: 'Таймер, секундомер, мировое время',
		icon: 'https://istoriya-islama.github.io/OREL/Components/img/clock.ico',
		href: '/pages/programs/Clock',
		badge: 'v1.1',
		accent: 'from-neutral-900 to-gray-950',
	},
]

const quickLinks = [
	{
		name: 'OREL Блокнот',
		icon: 'https://istoriya-islama.github.io/OREL/Components/img/newNotepad.ico',
		href: '/pages/programs/Notepad',
	},
	{
		name: 'OREL Азан',
		icon: 'https://istoriya-islama.github.io/OREL/Components/img/azan.ico',
		href: '/pages/programs/Azan',
	},
	{
		name: 'OREL Paint',
		icon: 'https://istoriya-islama.github.io/OREL/Components/img/newPaint.ico',
		href: '/pages/programs/Paint',
	},
	{
		name: 'OREL Скриншот',
		icon: 'https://istoriya-islama.github.io/OREL/Components/img/sreenshot.ico',
		href: '/pages/programs/Screenshot',
	},
	{
		name: 'OREL Переводчик',
		icon: 'https://istoriya-islama.github.io/OREL/Components/img/trans.ico',
		href: '/pages/programs/Translator',
	},
]

function Clock() {
	const [time, setTime] = useState('')
	useEffect(() => {
		const update = () => {
			const n = new Date()
			setTime(`${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}`)
		}
		update()
		const id = setInterval(update, 1000)
		return () => clearInterval(id)
	}, [])
	return <span className='font-mono tabular-nums'>{time}</span>
}

export default function Home() {
	return (
		<div className='min-h-screen bg-black text-white'>
			{/* Subtle grid bg */}
			<div className='fixed inset-0 pointer-events-none opacity-[0.03]'
				style={{
					backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
					backgroundSize: '40px 40px',
				}}
			/>

			<div className='relative z-10'>
				<Header activityPage='home' />

				<main className='max-w-4xl mx-auto px-4 py-8 md:py-12'>

					{/* ── Hero ── */}
					<div className='mb-10 p-6 md:p-10 rounded-3xl bg-gray-950 border border-gray-900 relative overflow-hidden'>
						<div className='absolute top-0 right-0 w-64 h-64 bg-gray-800/10 rounded-full blur-3xl pointer-events-none' />
						<p className='text-gray-600 text-xs uppercase tracking-widest mb-3'>OREL Store</p>
						<h1 className='text-3xl md:text-5xl font-black leading-tight mb-3'>
							Магазин<br />
							<span className='text-gray-600'>приложений</span>
						</h1>
						<p className='text-gray-500 text-sm md:text-base mb-6 max-w-sm'>
							Программы для Windows от команды OREL. Скачивайте, используйте, оставляйте отзывы.
						</p>
						<div className='flex gap-3'>
							<a href='/pages/orelprogram'
								className='px-5 py-2.5 bg-white text-black rounded-xl font-bold text-sm hover:bg-gray-100 active:scale-95 transition-all'>
								OREL Программы
							</a>
							<a href='/pages/program'
								className='px-5 py-2.5 border border-gray-800 text-gray-400 rounded-xl font-semibold text-sm hover:text-white hover:border-gray-700 hover:bg-gray-900 transition-all'>
								Все программы
							</a>
						</div>

						{/* Live clock */}
						<div className='absolute top-6 right-6 text-right hidden sm:block'>
							<p className='text-gray-700 text-xs uppercase tracking-widest mb-1'>Время</p>
							<p className='text-gray-400 text-2xl font-light'><Clock /></p>
						</div>
					</div>

					{/* ── Рекомендуем ── */}
					<section className='mb-10'>
						<div className='flex items-baseline justify-between mb-4'>
							<h2 className='text-white font-bold text-lg'>Рекомендуем</h2>
							<a href='/pages/orelprogram' className='text-gray-600 text-sm hover:text-gray-400 transition-colors'>Все →</a>
						</div>

						<div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
							{featuredApps.map((app, i) => (
								<a
									key={i}
									href={app.href}
									className={`group p-5 rounded-2xl bg-gradient-to-br ${app.accent} border border-gray-900 hover:border-gray-800 transition-all duration-200 active:scale-[0.98] block`}
								>
									<div className='flex items-start justify-between mb-8'>
										<img src={app.icon} alt={app.name} className='w-12 h-12 rounded-xl border border-gray-800 bg-gray-900' />
										<span className='text-xs text-gray-600 bg-gray-900 border border-gray-800 px-2.5 py-1 rounded-full'>{app.badge}</span>
									</div>
									<h3 className='text-white font-bold text-sm mb-0.5'>{app.name}</h3>
									<p className='text-gray-600 text-xs leading-relaxed'>{app.tagline}</p>
								</a>
							))}
						</div>
					</section>

					{/* ── Быстрый доступ ── */}
					<section className='mb-10'>
						<div className='flex items-baseline justify-between mb-4'>
							<h2 className='text-white font-bold text-lg'>Быстрый доступ</h2>
						</div>
						<div className='flex gap-4 overflow-x-auto pb-2'>
							{quickLinks.map((app, i) => (
								<a
									key={i}
									href={app.href}
									className='flex-shrink-0 flex flex-col items-center gap-2 w-20 group active:scale-95 transition-all'
								>
									<div className='w-16 h-16 rounded-2xl bg-gray-950 border border-gray-900 group-hover:border-gray-800 flex items-center justify-center transition-all overflow-hidden'>
										<img src={app.icon} alt={app.name} className='w-10 h-10 object-contain' />
									</div>
									<span className='text-gray-600 text-xs text-center leading-tight group-hover:text-gray-400 transition-colors line-clamp-2'>
										{app.name.replace('OREL ', '')}
									</span>
								</a>
							))}
						</div>
					</section>

					{/* ── Режимы ── */}
					<section>
						<div className='p-6 rounded-2xl bg-gray-950 border border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4'>
							<div>
								<h2 className='text-white font-bold text-base mb-1'>Режимы OREL</h2>
								<p className='text-gray-600 text-sm'>Специальные режимы работы — скоро</p>
							</div>
							<a
								href='/pages/modes'
								className='flex-shrink-0 px-5 py-2.5 border border-gray-800 text-gray-500 rounded-xl text-sm font-semibold hover:text-white hover:border-gray-700 hover:bg-gray-900 transition-all'
							>
								Посмотреть →
							</a>
						</div>
					</section>
				</main>
			</div>
		</div>
	)
}