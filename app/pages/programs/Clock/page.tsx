import AppPageLayout from '@/app/Components/AppPageLayout'
import type { AppData } from '@/app/types/app.type'

const app: AppData = {
	name: 'OREL Часы',
	tagline: 'Многофункциональные часы с таймером и секундомером',
	version: '1.1',
	releaseDate: '1 ноября 2025',
	icon: 'https://istoriya-islama.github.io/OREL/Components/img/clock.ico',
	heroCover: '/clock.jpg',
	heroIsVideo: false,
	downloadUrl:
		'https://istoriya-islama.github.io/OREL/OREL Clock 1.1 Matterhorn installer.exe',
	description: 'Многофункциональные часы с таймером и секундомером.',
	features: [
		{
			icon: '⌚',
			title: 'Точное время',
			desc: 'Высокая точность и синхронизация с интернетом',
		},
		{
			icon: '⏱️',
			title: 'Секундомер и таймер',
			desc: 'Секундомер и таймер с возможностью настройки',
		},
	],
	screenshots: [
		'/Screns/clock.png',
		'/Screns/clock 2.png',
		'/Screns/clock 3.png',
	],
	changelog: [
		{
			version: '1.1',
			date: '1 ноя 2025',
			changes: [
				'Добавлено много анимаций',
				'Новый дизайн',
				'Добавлена светлая и тёмная тема',
			],
		},
		{
			version: '1.0',
			date: '4 июн 2025',
			changes: [
				'Исправлены баги',
				'Объединение OREL Время, OREL Таймер 1.0, OREL Секундомер',
				'Новый дизайн',
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

export default function ClockPage() {
	return <AppPageLayout app={app} />
}
