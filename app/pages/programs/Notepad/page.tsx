import AppPageLayout from '@/app/Components/AppPageLayout'
import type { AppData } from '@/app/types/app.type'

const app: AppData = {
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
				'Горячие клавиши',
				'Размер шрифта',
				'Можно открывать файлы вне приложения',
			],
		},
		{
			version: '1.2',
			date: '2 июн 2024',
			changes: [
				'Добавлен +1 шрифт',
				'Добавлены дополнительные функции',
				'Добавлены: Вырезать, Копировать и Вставить',
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

export default function NotepadPage() {
	return <AppPageLayout app={app} />
}
