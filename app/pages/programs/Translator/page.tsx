import AppPageLayout from '@/app/Components/AppPageLayout'
import type { AppData } from '@/app/types/app.type'

const app: AppData = {
	name: 'OREL Переводчик',
	tagline: 'Мгновенный перевод текста на множество языков мира',
	version: '2.0',
	releaseDate: '7 апреля 2025',
	icon: 'https://istoriya-islama.github.io/OREL/Components/img/trans.ico',
	heroCover: '/traslate.jpg',
	heroIsVideo: false,
	downloadUrl: 'https://istoriya-islama.github.io/OREL/OREL Translator 2.0 installer.exe',
	description: 'Мгновенный перевод текста на множество языков мира.',
	features: [
		{ icon: '🌐', title: 'Перевод текста', desc: 'Быстрый перевод на множество языков' },
	],
	screenshots: ['/Screns/translator.png'],
	changelog: [
		{
			version: '2.0',
			date: '7 апр 2025',
			changes: ['Добавлено много новых языков', 'Новый дизайн', 'Добавлена светлая и тёмная тема', 'Исправлены баги'],
		},
		{ version: '1.0', date: '13 ноя 2023', changes: ['Новый дизайн'] },
	],
	reviews: [{ author: 'Всё о программировании', rating: 4, text: 'Дизайн огонь!', date: '21 фев 2026' }],
}

export default function TranslatorPage() {
	return <AppPageLayout app={app} />
}