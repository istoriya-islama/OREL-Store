import AppPageLayout from '@/app/Components/AppPageLayout'
import type { AppData } from '@/app/types/app.type'

const app: AppData = {
	name: 'OREL Погода',
	tagline:
		'Точный прогноз погоды с подробными метеоданными и умными рекомендациями',
	version: '2.4',
	releaseDate: '27 марта 2026',
	icon: 'https://istoriya-islama.github.io/OREL/Components/img/newWeather.ico',
	heroCover: '/weather.jpg',
	heroIsVideo: false,
	downloadUrl:
		'https://istoriya-islama.github.io/OREL/OREL Weather 2.4 Taiga installer.exe',
	description:
		'Точный прогноз погоды с подробными метеоданными и умными рекомендациями.',
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
			desc: 'Можно выбрать любой режим из доступных',
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
				'Добавлено дневных часов',
				'Вчера AI',
				'Дополнительные настройки: Режим и Темы',
				'Выход OREL Погода 1.0 AI',
				'Исправлены баги',
			],
		},
		{
			version: '2.3',
			date: '10 дек 2025',
			changes: [
				'Добавлено много анимаций',
				'Завтра AI',
				'Режимы (Темы)',
				'Умные рекомендации',
				'Исправлены баги',
			],
		},
		{
			version: '2.2',
			date: '12 авг 2025',
			changes: ['Исправлены баги', 'Новый дизайн', 'Завтра/Вчера'],
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

export default function WeatherPage() {
	return <AppPageLayout app={app} />
}
