// Пример использования AppPageTemplate на TypeScript

import AppPageTemplate from '@/app/Components/AppPageTemplate'
import Header from '@/app/Components/Header'
import type { AppData } from '@/app/types/app.type'

// ─── Данные приложения ────────────────────
// TypeScript сам подскажет какие поля обязательные, а какие нет

const calculatorApp: AppData = {
	name: 'All IT sf - Search Utility',
	tagline: 'Быстрый и мощный инструмент для поиска файлов и папок в терминале',
	version: '0.2.0',
	releaseDate: '13 ноября 2025',
	icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRlcm1pbmFsLWljb24gbHVjaWRlLXRlcm1pbmFsIj48cGF0aCBkPSJNMTIgMTloOCIvPjxwYXRoIGQ9Im00IDE3IDYtNi02LTYiLz48L3N2Zz4=',
	heroCover:
		'https://placehold.co/1200x600/1a1a1a/444?text=sf+-+Search+Utility',
	heroIsVideo: false,
	downloadUrl:
		'https://github.com/istoriya-islama/sf---Search-Utility/releases/download/v0.2.0/sf.exe',
	description:
		'Быстрый и мощный инструмент для поиска файлов и папок в терминале.',
	features: [
		{
			icon: '⚡',
			title: 'Молниеносный поиск',
			desc: 'Ищет файлы и папки по имени практически мгновенно',
		},
		{
			icon: '🔍',
			title: 'Поиск с шаблонами',
			desc: 'Поддержка glob-паттернов для гибкого поиска',
		},
		{
			icon: '🌈',
			title: 'Цветной вывод',
			desc: 'Результаты поиска выделяются ярким цветом для удобства',
		},
		{
			icon: '💚',
			title: 'Красивые статистики',
			desc: 'Общая информация выводится зелёным для лучшей читаемости',
		},
		{
			icon: '🖥️',
			title: 'Поддержка Windows ANSI',
			desc: 'Автоматическое включение цветного вывода в терминалах Windows',
		},
		{
			icon: '🛠️',
			title: 'Кроссплатформенность',
			desc: 'Работает на Windows, Linux и macOS',
		},
	],

	screenshots: [
		'/Screns/scren1.png',
		'/Screns/scren2.png',
		'/Screns/scren3.png',
	],
	changelog: [
		{
			version: '0.2.0',
			date: '13 ноя 2025',
			changes: [
				'🌈 Цветной вывод в терминале — Результаты поиска теперь отображаются ярко-синим цветом с жирным стилем',
				'💚 Зелёная статистика — Сводная информация показывается зелёным цветом для лучшей читаемости',
				'🖥️ Поддержка ANSI в Windows — Автоматическое включение цветов в терминалах Windows',
			],
		},
		{
			version: '0.1.0',
			date: '10 окт 2025',
			changes: [
				'🔍 Поиск файлов и папок по имени',
				'⚡ Молниеносная производительность',
				'🎯 Поддержка glob-шаблонов',
				'📊 Статистика поиска',
				'🌐 Кроссплатформенная поддержка',
			],
		},
	],
	reviews: [
		{
			author: 'OREL Store Admin',
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
