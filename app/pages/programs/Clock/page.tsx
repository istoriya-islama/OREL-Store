// Пример использования AppPageTemplate на TypeScript

import AppPageTemplate from '@/app/Components/AppPageTemplate'
import Header from '@/app/Components/Header'
import type { AppData } from '@/app/types/app.type'

// ─── Данные приложения ────────────────────
// TypeScript сам подскажет какие поля обязательные, а какие нет

const calculatorApp: AppData = {
    name: 'OREL Часы',
    tagline:
        'Многофункциональные часы с таймером и секундомером',
    version: '1.1',
    releaseDate: '1 ноября 2025',
    icon: 'https://istoriya-islama.github.io/OREL/Components/img/clock.ico',
    heroCover: '/clock.jpg',
    heroIsVideo: false,
    downloadUrl:
        'https://istoriya-islama.github.io/OREL/OREL Clock 1.1 Matterhorn installer.exe',
    description:
        'Многофункциональные часы с таймером и секундомером.',
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
                'Добавленно много анимаций',
                'Новый дезайн',
                'Добавлена светлая и темная тема',
            ],
        },
        {
            version: '1.0',
            date: '4 июн 2025',
            changes: ['Исправлены баги', 'Обьедение OREL Время, OREL Таймер 1.0, OREL Секундамер', 'Новый дезайн'],
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

// ─── Страница ─────────────────────────────
export default function WeatherPage() {
    return (
        <div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden'>
            <div className='fixed inset-0 opacity-5 pointer-events-none'>
                <div className='absolute top-20 left-10 w-96 h-96 bg-gray-700 rounded-full blur-3xl' />
                <div className='absolute bottom-20 right-10 w-96 h-96 bg-gray-600 rounded-full blur-3xl' />
            </div>
            <div
                className='fixed inset-0 opacity-5 pointer-events-none'
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(75,85,99,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(75,85,99,0.3) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />
            <div className='relative z-10'>
                <Header activityPage='program' />

                {/* Просто передаёшь данные — всё остальное само */}
                <AppPageTemplate app={calculatorApp} />

                <div className='h-16' />
            </div>
        </div>
    )
}
