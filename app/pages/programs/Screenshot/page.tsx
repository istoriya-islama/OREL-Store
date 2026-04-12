import AppPageLayout from '@/app/Components/AppPageLayout'
import type { AppData } from '@/app/types/app.type'

const app: AppData = {
	name: 'OREL Скриншот',
	tagline: 'Быстрое создание скриншотов и видео с экрана',
	version: '2.1',
	releaseDate: '27 мая 2025',
	icon: 'https://istoriya-islama.github.io/OREL/Components/img/sreenshot.ico',
	heroCover: '/screenshot.jpg',
	heroIsVideo: false,
	downloadUrl: 'https://mega.nz/file/B60FDCjR#HEXVpizNBBnuHGJQbn2xHMepBJJO4XPpUab9avCYqf0',
	description: 'Быстрое создание скриншотов и видео с экрана.',
	features: [
		{ icon: '📸', title: 'Скриншоты', desc: 'Быстрое создание скриншотов' },
		{ icon: '🎥', title: 'Видео', desc: 'Запись видео с экрана' },
	],
	screenshots: ['/Screns/screenshot.png'],
	changelog: [
		{
			version: '2.1',
			date: '27 мая 2025',
			changes: ['Добавлен GUI настроек', 'Исправлены баги'],
		},
		{
			version: '2.0',
			date: '27 мая 2025',
			changes: ['Новый дизайн', 'Добавлена функция записи видео с экрана', 'Добавлена светлая и тёмная тема', 'Исправлены баги', 'JSON Настройки'],
		},
	],
	reviews: [{ author: 'Всё о программировании', rating: 4, text: 'Дизайн огонь!', date: '21 фев 2026' }],
}

export default function ScreenshotPage() {
	return <AppPageLayout app={app} />
}