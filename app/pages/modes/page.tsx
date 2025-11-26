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
                <Header activityPage={'modes'} />
                <Cover namePage={'Режимы'} />

                <div className='max-w-6xl mx-auto px-4 py-12'>
                    <h2 className='text-3xl font-bold text-white mb-8 text-center'>
                        Доступные Режимы
                    </h2>

                    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <li className='bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 hover:scale-105 transition-all duration-300 cursor-pointer group'>
                            <div className='w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
                                <img
                                    src='https://istoriya-islama.github.io/ORELm/Components/img/logo.png'
                                    alt='Calculator'
                                    className='w-12 h-12 group-hover:rotate-12 transition-transform rounded-xl'
                                />
                            </div>

                            <h3 className='text-xl font-bold text-white mb-2'>
                                Скоро будет дотупно!
                            </h3>

                            <p className='text-gray-400 text-sm'>
                                Подождите...
                            </p>

                            {/*}<div className='mt-4 pt-4 border-t   border-gray-700'>
                                <a
                                    href=''
                                    className='inline-flex items-center gap-2 text-gray-500 text-sm group-hover:text-gray-300 transition-colors group-hover:gap-3'
                                >
                                    Открыть <span className='transition-all'>→</span>
                                </a>
                            </div> {*/}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
