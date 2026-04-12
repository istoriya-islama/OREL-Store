import Cover from '@/app/Components/Cover'
import Header from '@/app/Components/Header'
import ProgramCard from '@/app/Components/ProgramCard'

const programs = [
	{
		icon: (
			<img
				src='https://istoriya-islama.github.io/OREL/Components/img/newCalculator.ico'
				alt='Calculator'
				className='w-8 h-8 md:w-12 md:h-12 group-hover:rotate-12 transition-transform'
			/>
		),
		title: 'OREL Калькулятор',
		description: 'Мощный калькулятор для сложных вычислений',
		href: '/pages/programs/Calculator',
	},
	{
		icon: (
			<img
				src='https://istoriya-islama.github.io/OREL/Components/img/newWeather.ico'
				alt='Weather'
				className='w-8 h-8 md:w-12 md:h-12 group-hover:rotate-12 transition-transform'
			/>
		),
		title: 'OREL Погода',
		description:
			'Точный прогноз погоды с подробными метеоданными и умными рекомендациями',
		href: '/pages/programs/Weather',
	},
	{
		icon: (
			<img
				src='https://istoriya-islama.github.io/OREL/Components/img/clock.ico'
				alt='Clock'
				className='w-8 h-8 md:w-12 md:h-12 group-hover:rotate-12 transition-transform'
			/>
		),
		title: 'OREL Часы',
		description: 'Многофункциональные часы с таймером и секундомером',
		href: '/pages/programs/Clock',
	},
	{
		icon: (
			<img
				src='https://istoriya-islama.github.io/OREL/Components/img/newNotepad.ico'
				alt='Notepad'
				className='w-8 h-8 md:w-12 md:h-12 group-hover:rotate-12 transition-transform'
			/>
		),
		title: 'OREL Блокнот',
		description: 'Удобный текстовый редактор для заметок и быстрых записей',
		href: '/pages/programs/Notepad',
	},
	{
		icon: (
			<img
				src='https://istoriya-islama.github.io/OREL/Components/img/azan.ico'
				alt='Azan'
				className='w-8 h-8 md:w-12 md:h-12 group-hover:scale-110 transition-transform'
			/>
		),
		title: 'OREL Азан',
		description: 'Точное время намазов с азаном и напоминаниями для мусульман',
		href: '/pages/programs/Azan',
	},
	{
		icon: (
			<img
				src='https://istoriya-islama.github.io/OREL/Components/img/newPaint.ico'
				alt='Paint'
				className='w-8 h-8 md:w-12 md:h-12 group-hover:rotate-12 transition-transform'
			/>
		),
		title: 'OREL Paint',
		description: 'Графический редактор для рисования',
		href: '/pages/programs/Paint',
	},
	{
		icon: (
			<img
				src='https://istoriya-islama.github.io/OREL/Components/img/sreenshot.ico'
				alt='Screenshot'
				className='w-8 h-8 md:w-12 md:h-12 group-hover:rotate-12 transition-transform'
			/>
		),
		title: 'OREL Скриншот',
		description: 'Быстрое создание скриншотов и видео с экрана',
		href: '/pages/programs/Screenshot',
	},
	{
		icon: (
			<img
				src='https://istoriya-islama.github.io/OREL/Components/img/trans.ico'
				alt='Translator'
				className='w-8 h-8 md:w-12 md:h-12 group-hover:rotate-12 transition-transform'
			/>
		),
		title: 'OREL Переводчик',
		description: 'Мгновенный перевод текста на множество языков мира',
		href: '/pages/programs/Translator',
	},
]

export default function OrelProgram() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden'>
			{/* Фон */}
			<div className='fixed inset-0 opacity-5 pointer-events-none'>
				<div className='absolute top-10 left-4 w-48 h-48 sm:top-20 sm:left-10 sm:w-96 sm:h-96 bg-gray-700 rounded-full blur-3xl' />
				<div className='absolute bottom-10 right-4 w-48 h-48 sm:bottom-20 sm:right-10 sm:w-96 sm:h-96 bg-gray-600 rounded-full blur-3xl' />
			</div>
			<div
				className='fixed inset-0 opacity-5 pointer-events-none'
				style={{
					backgroundImage:
						'linear-gradient(rgba(75, 85, 99, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(75, 85, 99, 0.3) 1px, transparent 1px)',
					backgroundSize: 'clamp(30px, 5vw, 50px) clamp(30px, 5vw, 50px)',
				}}
			/>

			<div className='relative z-10'>
				<Header activityPage={'orelprogram'} />
				<Cover namePage={'OREL Программы'} />

				<div className='max-w-6xl mx-auto px-4 py-8 md:py-12'>
					<h2 className='text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center'>
						Доступные Программы
					</h2>

					<ul className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6'>
						{programs.map((p, i) => (
							<ProgramCard key={i} {...p} />
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
