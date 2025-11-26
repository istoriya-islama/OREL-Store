import Cover from '@/app/Components/Cover'
import Header from '@/app/Components/Header'

export default function Program() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden'>
			<div className='fixed inset-0 opacity-5 pointer-events-none'>
				<div className='absolute top-20 left-10 w-96 h-96 bg-gray-700 rounded-full blur-3xl'></div>
				<div className='absolute bottom-20 right-10 w-96 h-96 bg-gray-600 rounded-full blur-3xl'></div>
			</div>
			<div
				className='fixed inset-0 opacity-5 pointer-events-none'
				style={{
					backgroundImage:
						'linear-gradient(rgba(75, 85, 99, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(75, 85, 99, 0.3) 1px, transparent 1px)',
					backgroundSize: '50px 50px',
				}}
			></div>
			<div className='relative z-10'>
				<Header activityPage={'program'} />
				<Cover namePage={'Программы'} />

				<div className='max-w-6xl mx-auto px-4 py-12'>
					<h2 className='text-3xl font-bold text-white mb-8 text-center'>
						Доступные Программы
					</h2>

					<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						<li className='bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 hover:scale-105 transition-all duration-300 cursor-pointer group'>
							<div className='w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
								<img
									src='https://istoriya-islama.github.io/OREL/Components/img/newCalculator.ico'
									alt='Calculator'
									className='w-12 h-12 group-hover:rotate-12 transition-transform'
								/>
							</div>

							<h3 className='text-xl font-bold text-white mb-2'>
								OREL Калькулятор
							</h3>

							<p className='text-gray-400 text-sm'>
								Мощный калькулятор для сложных вычеслений
							</p>

							<div className='mt-4 pt-4 border-t   border-gray-700'>
								<a
									href=''
									className='inline-flex items-center gap-2 text-gray-500 text-sm group-hover:text-gray-300 transition-colors group-hover:gap-3'
								>
									Открыть <span className='transition-all'>→</span>
								</a>
							</div>
						</li>
						<li className='bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 hover:scale-105 transition-all duration-300 cursor-pointer group'>
							<div className='w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
								<img
									src='https://istoriya-islama.github.io/OREL/Components/img/newWeather.ico'
									alt='Calculator'
									className='w-12 h-12 group-hover:rotate-12 transition-transform'
								/>
							</div>

							<h3 className='text-xl font-bold text-white mb-2'>OREL Погода</h3>

							<p className='text-gray-400 text-sm'>
								Точный прогноз погоды с подробными метеоданными и с умнами
								рекомандациями
							</p>

							<div className='mt-4 pt-4 border-t   border-gray-700'>
								<a
									href=''
									className='inline-flex items-center gap-2 text-gray-500 text-sm group-hover:text-gray-300 transition-colors group-hover:gap-3'
								>
									Открыть <span className='transition-all'>→</span>
								</a>
							</div>
						</li>
						<li className='bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 hover:scale-105 transition-all duration-300 cursor-pointer group'>
							<div className='w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
								<img
									src='https://istoriya-islama.github.io/OREL/Components/img/clock.ico'
									alt='Calculator'
									className='w-12 h-12 group-hover:rotate-12 transition-transform'
								/>
							</div>

							<h3 className='text-xl font-bold text-white mb-2'>OREL Часы</h3>

							<p className='text-gray-400 text-sm'>
								Многофункциональные часы с таймером и секундомером
							</p>

							<div className='mt-4 pt-4 border-t   border-gray-700'>
								<a
									href=''
									className='inline-flex items-center gap-2 text-gray-500 text-sm group-hover:text-gray-300 transition-colors group-hover:gap-3'
								>
									Открыть <span className='transition-all'>→</span>
								</a>
							</div>
						</li>
						<li className='bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 hover:scale-105 transition-all duration-300 cursor-pointer group'>
							<div className='w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
								<img
									src='https://istoriya-islama.github.io/OREL/Components/img/newNotepad.ico'
									alt='Calculator'
									className='w-12 h-12 group-hover:rotate-12 transition-transform'
								/>
							</div>

							<h3 className='text-xl font-bold text-white mb-2'>
								OREL Блокнот
							</h3>

							<p className='text-gray-400 text-sm'>
								Удобный текстовый редактор для заметок и быстрых записей
							</p>

							<div className='mt-4 pt-4 border-t   border-gray-700'>
								<a
									href=''
									className='inline-flex items-center gap-2 text-gray-500 text-sm group-hover:text-gray-300 transition-colors group-hover:gap-3'
								>
									Открыть <span className='transition-all'>→</span>
								</a>
							</div>
						</li>
						<li className='bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 hover:scale-105 transition-all duration-300 cursor-pointer group'>
							<div className='w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
								<img
									src='https://istoriya-islama.github.io/OREL/Components/img/azan.ico'
									alt='Calculator'
									className='w-12 h-12 group-hover:scale-110 transition-transform'
								/>
							</div>

							<h3 className='text-xl font-bold text-white mb-2'>OREL Азан</h3>

							<p className='text-gray-400 text-sm'>
								Точное время намазов с азаном и напоминаниями для мусульман
							</p>

							<div className='mt-4 pt-4 border-t   border-gray-700'>
								<a
									href=''
									className='inline-flex items-center gap-2 text-gray-500 text-sm group-hover:text-gray-300 transition-colors group-hover:gap-3'
								>
									Открыть <span className='transition-all'>→</span>
								</a>
							</div>
						</li>
						<li className='bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 hover:scale-105 transition-all duration-300 cursor-pointer group'>
							<div className='w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
								<img
									src='https://istoriya-islama.github.io/OREL/Components/img/newPaint.ico'
									alt='Calculator'
									className='w-12 h-12 group-hover:rotate-12 transition-transform'
								/>
							</div>

							<h3 className='text-xl font-bold text-white mb-2'>OREL Paint</h3>

							<p className='text-gray-400 text-sm'>
								Графический редактор для рисования
							</p>

							<div className='mt-4 pt-4 border-t   border-gray-700'>
								<a
									href=''
									className='inline-flex items-center gap-2 text-gray-500 text-sm group-hover:text-gray-300 transition-colors group-hover:gap-3'
								>
									Открыть <span className='transition-all'>→</span>
								</a>
							</div>
						</li>
						<li className='bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 hover:scale-105 transition-all duration-300 cursor-pointer group'>
							<div className='w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
								<img
									src='https://istoriya-islama.github.io/OREL/Components/img/sreenshot.ico'
									alt='Calculator'
									className='w-12 h-12 group-hover:rotate-12 transition-transform'
								/>
							</div>

							<h3 className='text-xl font-bold text-white mb-2'>
								OREL Скриншот
							</h3>

							<p className='text-gray-400 text-sm'>
								Быстрое создание скриншотов и видео с экрана
							</p>

							<div className='mt-4 pt-4 border-t   border-gray-700'>
								<a
									href=''
									className='inline-flex items-center gap-2 text-gray-500 text-sm group-hover:text-gray-300 transition-colors group-hover:gap-3'
								>
									Открыть <span className='transition-all'>→</span>
								</a>
							</div>
						</li>
						<li className='bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 hover:scale-105 transition-all duration-300 cursor-pointer group'>
							<div className='w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
								<img
									src='https://istoriya-islama.github.io/OREL/Components/img/trans.ico'
									alt='Calculator'
									className='w-12 h-12 group-hover:rotate-12 transition-transform'
								/>
							</div>

							<h3 className='text-xl font-bold text-white mb-2'>
								OREL Переводчик
							</h3>

							<p className='text-gray-400 text-sm'>
								Мгновенный перевод текста на множество языков мира
							</p>

							<div className='mt-4 pt-4 border-t   border-gray-700'>
								<a
									href=''
									className='inline-flex items-center gap-2 text-gray-500 text-sm group-hover:text-gray-300 transition-colors group-hover:gap-3'
								>
									Открыть <span className='transition-all'>→</span>
								</a>
							</div>
						</li>
                        <li className='bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 hover:scale-105 transition-all duration-300 cursor-pointer group'>
							<div className='w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
								<img
									src='https://istoriya-islama.github.io/historiislam/img/istoriya.png'
									alt='Calculator'
									className='w-12 h-12 drop-shadow-lg group-hover:drop-shadow-2xl transition-all'
								/>
							</div>

							<h3 className='text-xl font-bold text-white mb-2'>
								AiIstoriya История ИИ Desktop
							</h3>

							<p className='text-gray-400 text-sm'>
								Интерактивный экскурс в развитие искусственного интеллекта от истоков до наших дней
							</p>

							<div className='mt-4 pt-4 border-t   border-gray-700'>
								<span
									className='inline-flex items-center gap-2 text-gray-500 text-sm group-hover:text-gray-300 transition-colors group-hover:gap-3'
								>
									Скоро выйдет <span className='transition-all'>...</span>
								</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
