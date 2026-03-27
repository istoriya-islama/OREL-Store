// Пример использования AppPageTemplate на TypeScript

import AppPageTemplate from '@/app/Components/AppPageTemplate'
import Header from '@/app/Components/Header'
import type { AppData } from '@/app/types/app.type'

// ─── Данные приложения ────────────────────
// TypeScript сам подскажет какие поля обязательные, а какие нет

const calculatorApp: AppData = {
	name: 'OREL Погода',
	tagline:
		'Точный прогноз погоды с подробными метеоданными и с умнами рекомандациями',
	version: '2.3',
	releaseDate: '10 декобря 2025',
	icon: 'https://istoriya-islama.github.io/OREL/Components/img/newWeather.ico',
	heroCover: '/weather.jpg',
	heroIsVideo: false,
	downloadUrl:
		'https://istoriya-islama.github.io/OREL/OREL Weather 2.4 Taiga installer.exe',
	description:
		'Точный прогноз погоды с подробными метеоданными и с умнами рекомандациями.',
	features: [
		{
			icon: '🌤️',
			title: 'Точный прогноз',
			desc: 'Высокоточные данные в реальном времени',
		},
		{
			icon: '🤖',
			title: 'AI-помощник',
			desc: 'Персональные погодные рекомендации и интеллектуальный прогноз на завтра',
		},
		{
			icon: '🎨',
			title: 'Гибкие режимы (темы)',
			desc: 'Можно выбрать любой режим из достпуных',
		},
		{
			icon: '📊',
			title: 'Расширенная аналитика',
			desc: 'Температура, ветер, влажность и другие показатели',
		},
		{
			icon: '🌙',
			title: 'Тёмная тема',
			desc: 'Максимальный комфорт для глаз в любое время суток',
		},
		{
			icon: '☀️',
			title: 'Светлая тема',
			desc: 'Максимальный комфорт для глаз в любое время суток',
		},
	],
	screenshots: [
		'/Screns/weather.png',
		'/Screns/weather 2.png',
		'/Screns/weather 3.png',
		'/Screns/weather 4.png',
		'/Screns/weather 5.png',
		'/Screns/weather 6.png',
		'/Screns/weather 7.png',
	],
	changelog: [
		{
			version: '2.4',
			date: '27 марта 2026',
			changes: [
				'Добавленно дневного часа',
				'Вчера Ai',
				'Дополнительные настройки Режим и (Темы)',
				'Выход OREL Погода 1.0 Ai',
				'Исправлены баги',
			],
		},
		{
			version: '2.3',
			date: '10 дек 2025',
			changes: [
				'Добавленно много анимаций',
				'Завтра Ai',
				'Режимы (Темы)',
				'Умные рекомендации',
				'Исправлены баги',
			],
		},
		{
			version: '2.2',
			date: '12 авг 2025',
			changes: ['Исправлены баги', 'Новый дезайн', 'Завтра/Вчера'],
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
export default function WeatherPage() {
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
