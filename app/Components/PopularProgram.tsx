import { useEffect, useState } from 'react'

export default function PopularProgram() {
	const [activeIndex, setActiveIndex] = useState(0)
	const [ctrlPressed, setCtrlPressed] = useState(false)

	const sections = [
		{
			title: 'OREL Калькулятор',
			items: ['Мощный калькулятор', 'Сложные вычисления', 'Быстрая работа'],
			url: '',
			color: 'from-gray-800 to-gray-900',
		},
		{
			title: 'OREL Погода',
			items: ['Точный прогноз', 'Метеоданные', 'Умные рекомендации'],
			url: '',
			color: 'from-slate-800 to-slate-900',
		},
		{
			title: 'OREL Часы',
			items: ['Секундомер', 'Таймер', 'Многофункциональность'],
			url: '',
			color: 'from-zinc-800 to-zinc-900',
		},
		{
			title: 'OREL Блокнот',
			items: ['Быстрые заметки', 'Текстовый редактор', 'Удобный интерфейс'],
			url: '',
			color: 'from-neutral-800 to-neutral-900',
		},
		{
			title: 'OREL Азан',
			items: ['Время намазов', 'Азан', 'Напоминания'],
			url: '',
			color: 'from-stone-800 to-stone-900',
		},
		{
			title: 'OREL Paint',
			items: ['Рисование', 'Графический редактор', 'Простота'],
			url: '',
			color: 'from-gray-700 to-gray-900',
		},
		{
			title: 'OREL Скриншот',
			items: ['Скриншоты', 'Запись экрана', 'Быстро и удобно'],
			url: '',
			color: 'from-slate-700 to-slate-900',
		},
		{
			title: 'OREL Переводчик',
			items: ['Мгновенный перевод', 'Много языков', 'Высокая точность'],
			url: '',
			color: 'from-zinc-700 to-zinc-900',
		},
	]

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Control') {
				setCtrlPressed(true)
			}

			if (e.ctrlKey) {
				if (e.key === 'ArrowRight') {
					e.preventDefault()
					setActiveIndex(prev => (prev + 1) % sections.length)
				} else if (e.key === 'ArrowLeft') {
					e.preventDefault()
					setActiveIndex(prev => (prev - 1 + sections.length) % sections.length)
				}
			}
		}

		const handleKeyUp = (e: KeyboardEvent) => {
			if (e.key === 'Control') {
				setCtrlPressed(false)
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		window.addEventListener('keyup', handleKeyUp)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
			window.removeEventListener('keyup', handleKeyUp)
		}
	}, [sections.length])

	return (
		<div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-8 relative overflow-hidden'>
			{/* Подсказка */}
			<div
				className={`absolute top-8 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full transition-all duration-300 ${
					ctrlPressed
						? 'bg-gray-700 text-white shadow-lg shadow-gray-700/50 scale-110'
						: 'bg-gray-800/50 backdrop-blur-md text-gray-400 border border-gray-700'
				}`}
			>
				<p className='text-sm font-medium'>
					{ctrlPressed
						? '✓ CTRL зажат - используйте ← →'
						: 'Зажмите CTRL + стрелки ← →'}
				</p>
			</div>

			<div className='relative w-[700px] h-[700px]'>
				{/* Центральный активный элемент */}
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20'>
					<div
						className={`w-95 h-95 rounded-3xl bg-gradient-to-br ${sections[activeIndex].color} p-8 shadow-2xl flex flex-col items-center justify-center transform transition-all duration-500`}
					>
						<h2 className='text-white font-bold text-3xl mb-6 text-center'>
							{sections[activeIndex].title}
						</h2>
						<ul className='space-y-4 w-full'>
							{sections[activeIndex].items.map((item, idx) => (
								<li
									key={idx}
									className='text-white text-lg flex items-center gap-3 bg-black/40 backdrop-blur-sm rounded-xl p-3 hover:bg-black/60 transition-all border border-gray-700'
								>
									<span className='w-2 h-2 rounded-full bg-white'></span>
									{item}
								</li>
							))}
						</ul><br/>
						<a
							href={sections[activeIndex].url}
							className='flex items-center gap-3 w-full'
						>
							<span className='px-4 py-2 rounded-xl transition-all duration-300 hover:bg-gray-800/50 hover:scale-105 bg-gray-800/70 border-b-2 border-gray-600 shadow-lg mx-auto'>
								Перейти
							</span>
						</a>
					</div>
				</div>

				{/* Круговые элементы вокруг */}
				{sections.map((section, index) => {
					const angle = index * 45 - 90
					const radian = (angle * Math.PI) / 180
					const radius = 280
					const x = Math.cos(radian) * radius
					const y = Math.sin(radian) * radius

					const isActive = index === activeIndex
					const opacity = isActive ? 0 : 0.4
					const scale = isActive ? 0 : 0.6

					return (
						<div
							key={index}
							className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500'
							style={{
								transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`,
								opacity: opacity,
							}}
						>
							{/* Линия к центру */}
							<div
								className={`absolute w-1 bg-gradient-to-b ${section.color} opacity-30`}
								style={{
									height: '140px',
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
								<span className='text-white font-bold text-lg'>
									{index + 1}
								</span>
							</div>
						</div>
					)
				})}

				{/* Декоративные круги */}
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border-2 border-gray-800'></div>
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] rounded-full border border-gray-900'></div>

				{/* Индикатор позиции */}
				<div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2'>
					{sections.map((_, idx) => (
						<div
							key={idx}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								idx === activeIndex ? 'bg-gray-400 w-8' : 'bg-gray-700'
							}`}
						/>
					))}
				</div>

				{/* Стрелки подсказки */}
				{ctrlPressed && (
					<>
						<div className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-6xl animate-pulse'>
							←
						</div>
						<div className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 text-6xl animate-pulse'>
							→
						</div>
					</>
				)}
			</div>
		</div>
	)
}
