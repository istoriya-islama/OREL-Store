import AppPageTemplate from '@/app/Components/AppPageTemplate'
import Header from '@/app/Components/Header'
import type { AppData } from '@/app/types/app.type'

interface AppPageLayoutProps {
	app: AppData
}

export default function AppPageLayout({ app }: AppPageLayoutProps) {
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
				<Header activityPage='program' />
				<AppPageTemplate app={app} />
				<div className='h-8' />
			</div>
		</div>
	)
}
