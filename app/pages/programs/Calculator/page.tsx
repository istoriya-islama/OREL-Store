import AppPageLayout from '@/app/Components/AppPageLayout'
import type { AppData } from '@/app/types/app.type'

const app: AppData = {
	name: 'OREL Калькулятор',
	tagline: 'Мощный калькулятор для сложных вычислений',
	version: '2.9',
	releaseDate: '9 марта 2026',
	icon: 'https://istoriya-islama.github.io/OREL/Components/img/newCalculator.ico',
	heroCover: '/calculator.jpg',
	heroIsVideo: false,
	downloadUrl:
		'https://istoriya-islama.github.io/OREL/OREL Calculator 2.9 Amber installer.exe',
	description:
		'OREL Калькулятор — профессиональный инструмент для быстрых вычислений.',
	features: [
		{ icon: '⚡', title: 'Молниеносно', desc: 'Мгновенный результат' },
		{ icon: '🔢', title: 'Научный режим', desc: 'Тригонометрия, логарифмы' },
		{ icon: '🎨', title: 'Тёмный дизайн', desc: 'Комфортно для глаз' },
	],
	screenshots: ['/Screns/calculator.png', '/Screns/calculator 2.png'],
	changelog: [
		{
			version: '2.9',
			date: '9 марта 2026',
			changes: [
				'Новый дизайн',
				'Добавлены новые функции в режиме Инженерного калькулятора',
				'Добавлены горячие клавиши',
				'Растягивание окон',
				'Кодовое имя: Янтарь',
				'Исправлены баги',
			],
		},
		{ version: '2.8.4', date: '24 окт 2025', changes: ['Исправлены баги'] },
		{
			version: '2.8.3',
			date: '30 мая 2025',
			changes: ['Исправлены баги', 'Новый дизайн'],
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

export default function CalculatorPage() {
	return <AppPageLayout app={app} />
}
