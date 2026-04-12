import AppPageLayout from '@/app/Components/AppPageLayout'
import type { AppData } from '@/app/types/app.type'

const app: AppData = {
	name: 'OREL Азан',
	tagline: 'Точное время намазов с азаном и напоминаниями для мусульман',
	version: '1.1',
	releaseDate: '17 июня 2025',
	icon: 'https://istoriya-islama.github.io/OREL/Components/img/azan.ico',
	heroCover: '/azan.jpg',
	heroIsVideo: false,
	downloadUrl: 'https://istoriya-islama.github.io/OREL/OREL Azan 1.1 installer.exe',
	description: 'Точное время намазов с азаном и напоминаниями для мусульман.',
	features: [
		{ icon: '⌚', title: 'Точный Азан', desc: 'Высокая точность и синхронизация с интернетом' },
	],
	screenshots: ['/Screns/azan.png'],
	changelog: [
		{ version: '1.1', date: '17 июн 2025', changes: ['Исправлены баги'] },
		{ version: '1.0', date: '14 июн 2025', changes: ['Новый дизайн'] },
	],
	reviews: [{ author: 'Всё о программировании', rating: 4, text: 'Дизайн огонь!', date: '21 фев 2026' }],
}

export default function AzanPage() {
	return <AppPageLayout app={app} />
}