'use client'

import { useEffect, useRef, useState } from 'react'

export default function PopularProgram() {
	const [activeIndex, setActiveIndex] = useState(0)
	const [ctrlPressed, setCtrlPressed] = useState(false)
	const touchStartX = useRef<number | null>(null)

	const sections = [
		{
			title: 'OREL Калькулятор',
			items: ['Мощный калькулятор', 'Сложные вычисления', 'Быстрая работа'],
			url: '/pages/programs/Calculator',
			color: 'from-gray-800 to-gray-900',
		},
		{
			title: 'OREL Погода',
			items: ['Точный прогноз', 'Метеоданные', 'Умные рекомендации'],
			url: '/pages/programs/Weather',
			color: 'from-slate-800 to-slate-900',
		},
		{
			title: 'OREL Часы',
			items: ['Секундомер', 'Таймер', 'Многофункциональность'],
			url: '/pages/programs/Clock',
			color: 'from-zinc-800 to-zinc-900',
		},
		{
			title: 'OREL Блокнот',
			items: ['Быстрые заметки', 'Текстовый редактор', 'Удобный интерфейс'],
			url: '/pages/programs/Notepad',
			color: 'from-neutral-800 to-neutral-900',
		},
		{
			title: 'OREL Азан',
			items: ['Время намазов', 'Азан', 'Напоминания'],
			url: '/pages/programs/Azan',
			color: 'from-stone-800 to-stone-900',
		},
		{
			title: 'OREL Paint',
			items: ['Рисование', 'Графический редактор', 'Простота'],
			url: '/pages/programs/Paint',
			color: 'from-gray-700 to-gray-900',
		},
		{
			title: 'OREL Скриншот',
			items: ['Скриншоты', 'Запись экрана', 'Быстро и удобно'],
			url: '/pages/programs/Screenshot',
			color: 'from-slate-700 to-slate-900',
		},
		{
			title: 'OREL Переводчик',
			items: ['Мгновенный перевод', 'Много языков', 'Высокая точность'],
			url: '/pages/programs/Translator',
			color: 'from-zinc-700 to-zinc-900',
		},
	]

	const goNext = () => setActiveIndex(prev => (prev + 1) % sections.length)
	const goPrev = () => setActiveIndex(prev => (prev - 1 + sections.length) % sections.length)

	// Клавиатура (десктоп)
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Control') setCtrlPressed(true)
			if (e.ctrlKey) {
				if (e.key === 'ArrowRight') { e.preventDefault(); goNext() }
				else if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev() }
			}
		}
		const handleKeyUp = (e: KeyboardEvent) => {
			if (e.key === 'Control') setCtrlPressed(false)
		}
		window.addEventListener('keydown', handleKeyDown)
		window.addEventListener('keyup', handleKeyUp)
		return () => {
			window.removeEventListener('keydown', handleKeyDown)
			window.removeEventListener('keyup', handleKeyUp)
		}
	}, [])

	// Свайп (мобилка)
	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartX.current = e.touches[0].clientX
	}
	const handleTouchEnd = (e: React.TouchEvent) => {
		if (touchStartX.current === null) return
		const delta = touchStartX.current - e.changedTouches[0].clientX
		if (Math.abs(delta) > 40) {
			delta > 0 ? goNext() : goPrev()
		}
		touchStartX.current = null
	}

	const active = sections[activeIndex]

	return (
		<div
			className='relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden'
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
		>
			{/* ══════════════════════════════════════════
			    МОБИЛЬНАЯ ВЕРСИЯ (< md)
			══════════════════════════════════════════ */}
			<div className='md:hidden flex flex-col items-center px-4 py-8 min-h-screen'>
				{/* Подсказка свайп */}
				<div className='mb-6 px-5 py-2.5 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400 text-xs'>
					Свайп ← → для переключения
				</div>

				{/* Активная карточка */}
				<div
					className={`w-full max-w-sm rounded-3xl bg-gradient-to-br ${active.color} p-6 shadow-2xl border border-gray-700/50 transition-all duration-500`}
				>
					<h2 className='text-white font-bold text-2xl mb-5 text-center'>{active.title}</h2>
					<ul className='space-y-3 mb-6'>
						{active.items.map((item, idx) => (
							<li
								key={idx}
								className='text-white text-sm flex items-center gap-3 bg-black/40 rounded-xl p-3 border border-gray-700'
							>
								<span className='w-1.5 h-1.5 rounded-full bg-white flex-shrink-0' />
								{item}
							</li>
						))}
					</ul>
					<a
						href={active.url}
						className='block w-full text-center py-3 rounded-xl bg-gray-800/70 border border-gray-600 text-white font-medium transition-all active:scale-95 hover:bg-gray-700/70'
					>
						Перейти
					</a>
				</div>

				{/* Стрелки навигации */}
				<div className='flex items-center gap-6 mt-6'>
					<button
						onClick={goPrev}
						className='p-4 rounded-2xl bg-gray-800/50 border border-gray-700 text-white text-xl transition-all active:scale-90 hover:bg-gray-700/50'
					>
						←
					</button>

					{/* Индикатор */}
					<div className='flex gap-1.5'>
						{sections.map((_, idx) => (
							<button
								key={idx}
								onClick={() => setActiveIndex(idx)}
								className={`h-2 rounded-full transition-all duration-300 ${
									idx === activeIndex ? 'bg-gray-400 w-6' : 'bg-gray-700 w-2'
								}`}
							/>
						))}
					</div>

					<button
						onClick={goNext}
						className='p-4 rounded-2xl bg-gray-800/50 border border-gray-700 text-white text-xl transition-all active:scale-90 hover:bg-gray-700/50'
					>
						→
					</button>
				</div>

				{/* Миниатюры всех программ */}
				<div className='grid grid-cols-4 gap-2 mt-6 w-full max-w-sm'>
					{sections.map((section, idx) => (
						<button
							key={idx}
							onClick={() => setActiveIndex(idx)}
							className={`aspect-square rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center border transition-all duration-300 ${
								idx === activeIndex
									? 'border-gray-400 scale-105'
									: 'border-gray-700/50 opacity-50'
							}`}
						>
							<span className='text-white font-bold text-sm'>{idx + 1}</span>
						</button>
					))}
				</div>
			</div>

			{/* ══════════════════════════════════════════
			    ДЕСКТОПНАЯ ВЕРСИЯ (≥ md) — оригинал
			══════════════════════════════════════════ */}
			<div className='hidden md:flex items-center justify-center min-h-screen p-8'>
				{/* Подсказка */}
				<div
					className={`absolute top-8 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full transition-all duration-300 ${
						ctrlPressed
							? 'bg-gray-700 text-white shadow-lg shadow-gray-700/50 scale-110'
							: 'bg-gray-800/50 backdrop-blur-md text-gray-400 border border-gray-700'
					}`}
				>
					<p className='text-sm font-medium'>
						{ctrlPressed ? '✓ CTRL зажат - используйте ← →' : 'Зажмите CTRL + стрелки ← →'}
					</p>
				</div>

				<div className='relative w-[700px] h-[700px]'>
					{/* Центральный активный элемент */}
					<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20'>
						<div
							className={`w-95 h-95 rounded-3xl bg-gradient-to-br ${active.color} p-8 shadow-2xl flex flex-col items-center justify-center transform transition-all duration-500`}
						>
							<h2 className='text-white font-bold text-3xl mb-6 text-center'>{active.title}</h2>
							<ul className='space-y-4 w-full'>
								{active.items.map((item, idx) => (
									<li
										key={idx}
										className='text-white text-lg flex items-center gap-3 bg-black/40 backdrop-blur-sm rounded-xl p-3 hover:bg-black/60 transition-all border border-gray-700'
									>
										<span className='w-2 h-2 rounded-full bg-white' />
										{item}
									</li>
								))}
							</ul>
							<br />
							<a href={active.url} className='flex items-center gap-3 w-full'>
								<span className='px-4 py-2 rounded-xl transition-all duration-300 hover:bg-gray-800/50 hover:scale-105 bg-gray-800/70 border-b-2 border-gray-600 shadow-lg mx-auto'>
									Перейти
								</span>
							</a>
						</div>
					</div>

					{/* Круговые элементы */}
					{sections.map((section, index) => {
						const angle = index * 45 - 90
						const radian = (angle * Math.PI) / 180
						const radius = 280
						const x = Math.cos(radian) * radius
						const y = Math.sin(radian) * radius
						const isActive = index === activeIndex

						return (
							<div
								key={index}
								className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500'
								style={{
									transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${isActive ? 0 : 0.6})`,
									opacity: isActive ? 0 : 0.4,
								}}
							>
								<div
									className='absolute w-1 opacity-30'
									style={{
										height: '140px',
										background: `linear-gradient(to bottom, transparent, gray)`,
										transform: `rotate(${angle + 90}deg)`,
										bottom: '50%',
										left: '50%',
										marginLeft: '-2px',
										transformOrigin: 'bottom',
									}}
								/>
								<div
									className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-xl`}
								>
									<span className='text-white font-bold text-lg'>{index + 1}</span>
								</div>
							</div>
						)
					})}

					{/* Декоративные круги */}
					<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border-2 border-gray-800' />
					<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] rounded-full border border-gray-900' />

					{/* Индикатор позиции */}
					<div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2'>
						{sections.map((_, idx) => (
							<div
								key={idx}
								className={`h-3 rounded-full transition-all duration-300 ${
									idx === activeIndex ? 'bg-gray-400 w-8' : 'bg-gray-700 w-3'
								}`}
							/>
						))}
					</div>

					{/* Стрелки при зажатом CTRL */}
					{ctrlPressed && (
						<>
							<div className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-6xl animate-pulse'>←</div>
							<div className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 text-6xl animate-pulse'>→</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}