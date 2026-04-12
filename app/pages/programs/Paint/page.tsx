import AppPageLayout from '@/app/Components/AppPageLayout'
import type { AppData } from '@/app/types/app.type'

const app: AppData = {
	name: 'OREL Paint',
	tagline: 'Графический редактор для рисования',
	version: '2.0',
	releaseDate: '29 июня 2025',
	icon: 'https://istoriya-islama.github.io/OREL/Components/img/newPaint.ico',
	heroCover: '/Paint.jpg',
	heroIsVideo: false,
	downloadUrl:
		'https://istoriya-islama.github.io/OREL/OREL Paint 2.0 installer.exe',
	description: 'Графический редактор для рисования с удобными инструментами.',
	features: [
		{
			icon: '🎨',
			title: 'Рисование',
			desc: 'Удобные инструменты для творчества',
		},
		{ icon: '🖌️', title: 'Графический редактор', desc: 'Поддержка кистей' },
	],
	screenshots: ['/Screns/paint.png'],
	changelog: [
		{
			version: '2.0',
			date: '29 июн 2025',
			changes: [
				'Добавлено много новых функций',
				'Новый дизайн',
				'Добавлена светлая и тёмная тема',
				'Исправлены баги',
			],
		},
		{ version: '1.0', date: '4 июн 2025', changes: ['Новый дизайн'] },
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

export default function PaintPage() {
	return <AppPageLayout app={app} />
}
