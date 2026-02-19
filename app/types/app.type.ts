// ╔══════════════════════════════════════════════════════╗
// ║         Типы для AppPageTemplate — OREL              ║
// ║   Импорт: import type { AppData } from './app.types' ║
// ╚══════════════════════════════════════════════════════╝

export interface AppFeature {
	icon: string    // эмодзи или url картинки
	title: string
	desc: string
}

export interface AppChangelogEntry {
	version: string  // '2.1.0'
	date: string     // '15 фев 2025'
	changes: string[]
}

export interface AppReview {
	id?: number          // авто, не нужно заполнять вручную
	author: string
	rating: number       // 1–5
	text: string
	date: string
	isUserReview?: boolean  // авто, не нужно заполнять вручную
}

export interface AppData {
	name: string           // 'OREL Калькулятор'
	tagline: string        // короткий слоган
	version: string        // '2.1.0'
	releaseDate: string    // '15 февраля 2025'
	icon: string           // url иконки
	heroCover: string      // url картинки или видео (.mp4)
	heroIsVideo?: boolean  // true если heroCover — это .mp4 видео  
	downloadUrl: string   // ссылка "Скачать" — пусто или '#' чтобы скрыть
	description: string    // полное описание приложения
	features: AppFeature[]
	screenshots?: string[]         // необязательно
	changelog?: AppChangelogEntry[] // необязательно
	reviews?: AppReview[]           // стартовые отзывы (необязательно)
}