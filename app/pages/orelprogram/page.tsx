import Header from '@/app/Components/Header'
import ProgramCard from '@/app/Components/ProgramCard'

const programs = [
	{
		icon: (
			<img
				src='https://istoriya-islama.github.io/OREL/Components/img/newCalculator.ico'
				alt='Calculator'
				className='w-10 h-10 object-contain group-hover:scale-110 transition-transform'
			/>
		),
		title: 'OREL Калькулятор',
		description: 'Мощный калькулятор для сложных вычислений',
		href: '/pages/programs/Calculator',
		badge: 'v2.9',
	},
	{
		icon: (
			<img
				src='https://istoriya-islama.github.io/OREL/Components/img/newWeather.ico'
				alt='Weather'
				className='w-10 h-10 object-contain group-hover:scale-110 transition-transform'
			/>
		),
		title: 'OREL Погода',
		description:
			'Точный прогноз погоды с подробными метеоданными и умными рекомендациями',
		href: '/pages/programs/Weather',
		badge: 'v2.4',
	},
	{
		icon: (
			<img
				src='https://istoriya-islama.github.io/OREL/Components/img/clock.ico'
				alt='Clock'
				className='w-10 h-10 object-contain group-hover:scale-110 transition-transform'
			/>
		),
		title: 'OREL Часы',
		description: 'Многофункциональные часы с таймером и секундомером',
		href: '/pages/programs/Clock',
		badge: 'v1.1',
	},
	{
		icon: (
			<img
				src='https://istoriya-islama.github.io/OREL/Components/img/newNotepad.ico'
				alt='Notepad'
				className='w-10 h-10 object-contain group-hover:scale-110 transition-transform'
			/>
		),
		title: 'OREL Блокнот',
		description: 'Удобный текстовый редактор для заметок и быстрых записей',
		href: '/pages/programs/Notepad',
		badge: 'v1.3',
	},
	{
		icon: (
			<img
				src='https://istoriya-islama.github.io/OREL/Components/img/azan.ico'
				alt='Azan'
				className='w-10 h-10 object-contain group-hover:scale-110 transition-transform'
			/>
		),
		title: 'OREL Азан',
		description: 'Точное время намазов с азаном и напоминаниями для мусульман',
		href: '/pages/programs/Azan',
		badge: 'v1.1',
	},
	{
		icon: (
			<img
				src='https://istoriya-islama.github.io/OREL/Components/img/newPaint.ico'
				alt='Paint'
				className='w-10 h-10 object-contain group-hover:scale-110 transition-transform'
			/>
		),
		title: 'OREL Paint',
		description: 'Графический редактор для рисования',
		href: '/pages/programs/Paint',
		badge: 'v2.0',
	},
	{
		icon: (
			<img
				src='https://istoriya-islama.github.io/OREL/Components/img/sreenshot.ico'
				alt='Screenshot'
				className='w-10 h-10 object-contain group-hover:scale-110 transition-transform'
			/>
		),
		title: 'OREL Скриншот',
		description: 'Быстрое создание скриншотов и видео с экрана',
		href: '/pages/programs/Screenshot',
		badge: 'v2.1',
	},
	{
		icon: (
			<img
				src='https://istoriya-islama.github.io/OREL/Components/img/trans.ico'
				alt='Translator'
				className='w-10 h-10 object-contain group-hover:scale-110 transition-transform'
			/>
		),
		title: 'OREL Переводчик',
		description: 'Мгновенный перевод текста на множество языков мира',
		href: '/pages/programs/Translator',
		badge: 'v2.0',
	},
]

export default function OrelProgram() {
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
				<Header activityPage='orelprogram' />

				<div className='max-w-4xl mx-auto px-4 py-8 md:py-12'>
					<div className='mb-8'>
						<p className='text-gray-700 text-xs uppercase tracking-widest mb-2'>
							Официальные
						</p>
						<h1 className='text-3xl md:text-4xl font-black text-white mb-2'>
							OREL Программы
						</h1>
						<p className='text-gray-600 text-sm'>
							Программы разработанные командой OREL
						</p>
					</div>

					<ul className='flex flex-col divide-y divide-gray-900'>
						{programs.map((p, i) => (
							<ProgramCard key={i} {...p} />
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
