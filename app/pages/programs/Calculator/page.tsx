// Пример использования AppPageTemplate на TypeScript

import AppPageTemplate from '@/app/Components/AppPageTemplate'
import Header from '@/app/Components/Header'
import type { AppData } from '@/app/types/app.type'

// ─── Данные приложения ────────────────────
// TypeScript сам подскажет какие поля обязательные, а какие нет

const calculatorApp: AppData = {
	name: 'OREL Калькулятор',
	tagline: 'Мощный калькулятор для сложных вычислений',
	version: '2.8.4',
	releaseDate: '24 октября 2025',
	icon: 'https://istoriya-islama.github.io/OREL/Components/img/newCalculator.ico',
	heroCover: '/calculator.jpg',
	heroIsVideo: false,
	downloadUrl: 'https://istoriya-islama.github.io/OREL/Arhiv Calculator 2.8.4 installer.exe',
	description:
		'OREL Калькулятор — профессиональный инструмент для быстрых вычислений.',
	features: [
		{ icon: '⚡', title: 'Молниеносно', desc: 'Мгновенный результат' },
		{ icon: '🔢', title: 'Научный режим', desc: 'Тригонометрия, логарифмы' },
		{ icon: '🎨', title: 'Тёмный дизайн', desc: 'Комфортно для глаз' },
	],
	screenshots: [
		'/Screns/calculator.png',
		'/Screns/calculator 2.png',
	],
	changelog: [
		{
			version: '2.8.4',
			date: '24 окт 2025',
			changes: ['Исправлены баги'],
		},
        {
			version: '2.8.3',
			date: '30 мая 2025',
			changes: ['Исправлены баги', 'Новый дезайн'],
		},
	],
	reviews: [
		{
			author: 'Всё о программировании',
			rating: 4,
			text: 'Дизайн огонь!',
			date: '21 фев 2026',
		},
	],
}

// ─── Страница ─────────────────────────────
export default function CalculatorPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden'>
			<div className='fixed inset-0 opacity-5 pointer-events-none'>
				<div className='absolute top-20 left-10 w-96 h-96 bg-gray-700 rounded-full blur-3xl' />
				<div className='absolute bottom-20 right-10 w-96 h-96 bg-gray-600 rounded-full blur-3xl' />
			</div>
			<div
				className='fixed inset-0 opacity-5 pointer-events-none'
				style={{
					backgroundImage:
						'linear-gradient(rgba(75,85,99,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(75,85,99,0.3) 1px, transparent 1px)',
					backgroundSize: '50px 50px',
				}}
			/>
			<div className='relative z-10'>
				<Header activityPage='program' />

				{/* Просто передаёшь данные — всё остальное само */}
				<AppPageTemplate app={calculatorApp} />

				<div className='h-16' />
			</div>
		</div>
	)
}
