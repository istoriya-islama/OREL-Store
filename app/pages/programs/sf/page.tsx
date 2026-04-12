import AppPageLayout from '@/app/Components/AppPageLayout'
import type { AppData } from '@/app/types/app.type'

const app: AppData = {
	name: 'All IT sf - Search Utility',
	tagline: 'Быстрый и мощный инструмент для поиска файлов и папок в терминале',
	version: '0.3.0',
	releaseDate: '19 марта 2026',
	icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRlcm1pbmFsLWljb24gbHVjaWRlLXRlcm1pbmFsIj48cGF0aCBkPSJNMTIgMTloOCIvPjxwYXRoIGQ9Im00IDE3IDYtNi02LTYiLz48L3N2Zz4=',
	heroCover:
		'https://placehold.co/1200x600/1a1a1a/444?text=sf+-+Search+Utility',
	heroIsVideo: false,
	downloadUrl:
		'https://github.com/istoriya-islama/sf---Search-Utility/releases/download/v0.3.0/',
	description:
		'Молниеносный CLI-инструмент для поиска файлов с поддержкой фильтров, glob-шаблонов, JSON-вывода и статистики.',
	features: [
		{
			icon: '🔍',
			title: 'Поиск файлов и папок',
			desc: 'Поиск по имени с поддержкой шаблонов (glob: *, ?, [])',
		},
		{
			icon: '⚡',
			title: 'Молниеносная скорость',
			desc: 'Очень быстрый поиск даже в больших директориях',
		},
		{
			icon: '📏',
			title: 'Фильтр по размеру',
			desc: 'Поддержка K, M, G (+100M, -1G, 500K)',
		},
		{
			icon: '📅',
			title: 'Фильтр по дате',
			desc: 'Фильтрация по дате изменения файлов',
		},
		{
			icon: '🚫',
			title: 'Исключения',
			desc: 'Исключение путей с помощью --exclude (можно несколько)',
		},
		{
			icon: '🗂️',
			title: 'JSON вывод',
			desc: 'Вывод в формате JSON для скриптов и автоматизации',
		},
		{
			icon: '📊',
			title: 'Статистика',
			desc: 'Показывает размеры файлов и общий итог (--stats)',
		},
		{
			icon: '🌈',
			title: 'Цветной вывод',
			desc: 'Удобное отображение результатов с цветами',
		},
		{
			icon: '🖥️',
			title: 'Поддержка Windows ANSI',
			desc: 'Автоматическое включение цветного вывода в Windows',
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
			version: '0.3.0',
			date: '19 марта 2026',
			changes: [
				'Фильтр по размеру: +100M (больше), -1G (меньше), 500K (точно)',
				'Фильтр по дате: -7 (за последние 7 дней), +30 (старше 30 дней)',
				'Исключения: пропуск путей с помощью --exclude (можно повторять)',
				'JSON вывод: формат для машинной обработки с --json (для скриптов и пайплайнов)',
				'Режим статистики: показывает размеры файлов и общий итог с помощью --stats'
			],
		},
		{
			version: '0.2.0',
			date: '13 ноя 2025',
			changes: [
				'Цветной вывод в терминале — результаты поиска отображаются ярко-синим цветом',
				'Зелёная статистика — сводная информация показывается зелёным цветом',
				'Поддержка ANSI в Windows — автоматическое включение цветов в терминалах',
			],
		},
		{
			version: '0.1.0',
			date: '10 окт 2025',
			changes: [
				'Поиск файлов и папок по имени',
				'Молниеносная производительность',
				'Поддержка glob-шаблонов',
				'Статистика поиска',
				'Кроссплатформенная поддержка',
			],
		},
	],
	reviews: [
		{
			author: 'OREL Store Admin',
			rating: 5,
			text: 'CLI программа огонь!',
			date: '19 марта 2026',
		},
	],
}

export default function SfPage() {
	return <AppPageLayout app={app} />
}
