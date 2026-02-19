// Пример использования AppPageTemplate на TypeScript

import AppPageTemplate from '@/app/Components/AppPageTemplate'
import Header from '@/app/Components/Header'
import type { AppData } from '@/app/types/app.type'

// ─── Данные приложения ────────────────────
// TypeScript сам подскажет какие поля обязательные, а какие нет

const calculatorApp: AppData = {
	name: 'OREL Блокнот',
	tagline: 'Простой и удобный блокнот для заметок',
	version: '1.3',
	releaseDate: '13 июня 2025',
	icon: 'https://istoriya-islama.github.io/OREL/Components/img/newNotepad.ico',
	heroCover: '/notepad.jpg',
	heroIsVideo: false,
	downloadUrl:
		'https://istoriya-islama.github.io/OREL/OREL Notepad 1.3 installer.exe',
	description: 'Простой и удобный блокнот для заметок.',
	features: [
		{
			icon: '📝',
			title: 'Удобное редактирование',
			desc: 'Быстрое и комфортное написание текста',
		},
		{
			icon: '💾',
			title: 'Управление файлами',
			desc: 'Сохранение, открытие и закрытие документов',
		},
		{
			icon: '📂',
			title: 'Открытие вне приложения',
			desc: 'Просмотр файлов в системных программах',
		},
		{
			icon: '✂️',
			title: 'Базовые операции',
			desc: 'Вырезать, копировать и вставить текст',
		},
		{
			icon: '⌨️',
			title: 'Горячие клавиши',
			desc: 'Быстрая работа с помощью сочетаний клавиш',
		},
		{
			icon: '🎨',
			title: 'Гибкие темы',
			desc: 'Светлая, тёмная, светлая лайм и тёмная лайм',
		},
		{
			icon: '🔤',
			title: 'Выбор шрифта',
			desc: '5 стильных вариантов оформления текста',
		},
		{
			icon: '🔎',
			title: 'Размер текста',
			desc: 'Настройка масштаба для комфортного чтения',
		},
	],
	screenshots: [
		'/Screns/notepad.png',
		'/Screns/notepad 2.png',
		'/Screns/notepad 3.png',
	],
	changelog: [
		{
			version: '1.3',
			date: '13 июн 2025',
			changes: [
				'Горачии клавеши',
				'Размер шрифта',
                'Можно открывать файлы вне приложение'
			],
		},
		{
			version: '1.2',
			date: '2 июн 2024',
			changes: [
				'Добавлено +1 шрифт',
				'Добавленно Дополтельные фукции',
				'Добавленно Вырезать, Копировать и Вставить',
			],
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
