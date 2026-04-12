import Header from '@/app/Components/Header'
import AppPageTemplate from '@/app/Components/AppPageTemplate'
import type { AppData } from '@/app/types/app.type'

interface AppPageLayoutProps {
	app: AppData
}

export default function AppPageLayout({ app }: AppPageLayoutProps) {
	return (
		<div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden'>
			{/* Фоновые шары — уменьшены на мобилке */}
			<div className='fixed inset-0 opacity-5 pointer-events-none'>
				<div className='absolute top-10 left-4 w-48 h-48 sm:top-20 sm:left-10 sm:w-96 sm:h-96 bg-gray-700 rounded-full blur-3xl' />
				<div className='absolute bottom-10 right-4 w-48 h-48 sm:bottom-20 sm:right-10 sm:w-96 sm:h-96 bg-gray-600 rounded-full blur-3xl' />
			</div>

			{/* Сетка — адаптивный размер ячеек */}
			<div
				className='fixed inset-0 opacity-5 pointer-events-none'
				style={{
					backgroundImage:
						'linear-gradient(rgba(75,85,99,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(75,85,99,0.3) 1px, transparent 1px)',
					backgroundSize: 'clamp(30px, 5vw, 50px) clamp(30px, 5vw, 50px)',
				}}
			/>

			<div className='relative z-10'>
				<Header activityPage='program' />
				<AppPageTemplate app={app} />
				<div className='h-8 md:h-16' />
			</div>
		</div>
	)
}