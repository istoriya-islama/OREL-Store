'use client'

import { useState } from 'react'
import type { AppData } from '@/app/types/app.type'
import { BiSupport } from 'react-icons/bi'

function StarRating({ rating }: { rating: number }) {
	return (
		<div className='flex gap-0.5'>
			{[1, 2, 3, 4, 5].map(i => (
				<svg key={i} className={`w-3.5 h-3.5 ${i <= rating ? 'text-yellow-400' : 'text-gray-700'}`} fill='currentColor' viewBox='0 0 20 20'>
					<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
				</svg>
			))}
		</div>
	)
}

function RatingBar({ label, value, max = 5 }: { label: string; value: number; max?: number }) {
	const pct = (value / max) * 100
	return (
		<div className='flex items-center gap-3'>
			<span className='text-gray-600 text-xs w-3'>{label}</span>
			<div className='flex-1 h-1.5 bg-gray-900 rounded-full overflow-hidden'>
				<div className='h-full bg-gray-500 rounded-full transition-all' style={{ width: `${pct}%` }} />
			</div>
		</div>
	)
}

export default function AppPageTemplate({ app }: { app: AppData }) {
	const [activeScreenshot, setActiveScreenshot] = useState(0)
	const [activeTab, setActiveTab] = useState<'info' | 'changelog' | 'reviews'>('info')

	const avgRating = app.reviews?.length
		? Math.round((app.reviews.reduce((s, r) => s + r.rating, 0) / app.reviews.length) * 10) / 10
		: null

	return (
		<div className='max-w-4xl mx-auto px-4 py-8 md:py-12'>

			{/* ── Hero карточка ── */}
			<div className='flex flex-col sm:flex-row gap-6 items-start mb-8 p-5 bg-gray-950 border border-gray-900 rounded-3xl'>
				<img
					src={app.icon}
					alt={app.name}
					className='w-24 h-24 rounded-2xl border border-gray-800 flex-shrink-0 bg-gray-900'
				/>
				<div className='flex-1 min-w-0'>
					<h1 className='text-2xl sm:text-3xl font-bold text-white leading-tight mb-1'>{app.name}</h1>
					<p className='text-gray-500 text-sm mb-3'>{app.tagline}</p>
					<div className='flex flex-wrap gap-2 text-xs text-gray-600'>
						<span className='px-3 py-1.5 bg-gray-900 rounded-xl border border-gray-800'>v{app.version}</span>
						<span className='px-3 py-1.5 bg-gray-900 rounded-xl border border-gray-800'>{app.releaseDate}</span>
						{avgRating && (
							<span className='px-3 py-1.5 bg-gray-900 rounded-xl border border-gray-800 flex items-center gap-1.5'>
								<svg className='w-3 h-3 text-yellow-400' fill='currentColor' viewBox='0 0 20 20'>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
								<span className='text-gray-300'>{avgRating}</span>
							</span>
						)}
					</div>
				</div>
				{app.downloadUrl && app.downloadUrl !== '#' && (
					<a
						href={app.downloadUrl}
						className='flex-shrink-0 px-6 py-3 bg-white text-black font-bold text-sm rounded-2xl hover:bg-gray-100 active:scale-95 transition-all shadow-lg'
					>
						Скачать
					</a>
				)}
			</div>

			{/* ── Скриншоты ── */}
			{app.screenshots && app.screenshots.length > 0 && (
				<div className='mb-8'>
					<div className='overflow-hidden rounded-2xl border border-gray-900 bg-gray-950 aspect-video flex items-center justify-center mb-3'>
						<img
							src={app.screenshots[activeScreenshot]}
							alt={`Скриншот ${activeScreenshot + 1}`}
							className='max-h-full max-w-full object-contain'
						/>
					</div>
					{app.screenshots.length > 1 && (
						<div className='flex gap-2 overflow-x-auto pb-1'>
							{app.screenshots.map((src, i) => (
								<button
									key={i}
									onClick={() => setActiveScreenshot(i)}
									className={`flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${
										i === activeScreenshot ? 'border-gray-500' : 'border-gray-900 opacity-50 hover:opacity-75'
									}`}
								>
									<img src={src} alt='' className='w-full h-full object-cover' />
								</button>
							))}
						</div>
					)}
				</div>
			)}

			{/* ── Вкладки ── */}
			<div className='flex gap-1 mb-6 bg-gray-950 border border-gray-900 rounded-2xl p-1'>
				{([
					{ key: 'info', label: 'Описание' },
					{ key: 'changelog', label: 'Обновления' },
					{ key: 'reviews', label: 'Отзывы' },
				] as const).map(tab => (
					<button
						key={tab.key}
						onClick={() => setActiveTab(tab.key)}
						className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
							activeTab === tab.key ? 'bg-gray-800 text-white border border-gray-700' : 'text-gray-600 hover:text-gray-400'
						}`}
					>
						{tab.label}
					</button>
				))}
			</div>

			{/* ── Описание ── */}
			{activeTab === 'info' && (
				<div>
					<p className='text-gray-400 text-sm leading-relaxed mb-8 p-5 bg-gray-950 border border-gray-900 rounded-2xl'>
						{app.description}
					</p>

					{app.features.length > 0 && (
						<div>
							<h2 className='text-white font-bold text-lg mb-4'>Возможности</h2>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
								{app.features.map((f, i) => (
									<div key={i} className='flex gap-4 p-4 bg-gray-950 border border-gray-900 rounded-2xl hover:border-gray-800 transition-colors'>
										<span className='text-2xl flex-shrink-0'>{f.icon}</span>
										<div>
											<h3 className='text-white font-semibold text-sm mb-0.5'>{f.title}</h3>
											<p className='text-gray-600 text-xs leading-relaxed'>{f.desc}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			)}

			{/* ── Changelog ── */}
			{activeTab === 'changelog' && (
				<div className='flex flex-col gap-4'>
					{app.changelog?.map((entry, i) => (
						<div key={i} className='p-5 bg-gray-950 border border-gray-900 rounded-2xl'>
							<div className='flex items-center justify-between mb-3'>
								<span className='text-white font-bold text-sm'>v{entry.version}</span>
								<span className='text-gray-600 text-xs'>{entry.date}</span>
							</div>
							<ul className='flex flex-col gap-1.5'>
								{entry.changes.map((c, j) => (
									<li key={j} className='flex items-start gap-2 text-gray-500 text-sm'>
										<span className='text-gray-700 mt-1 flex-shrink-0'>•</span>
										{c}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			)}

			{/* ── Отзывы — В РАЗРАБОТКЕ ── */}
			{activeTab === 'reviews' && (
				<div>
					{/* Существующие отзывы */}
					{app.reviews && app.reviews.length > 0 && (
						<div className='mb-6'>
							{/* Сводка */}
							<div className='flex gap-6 items-center p-5 bg-gray-950 border border-gray-900 rounded-2xl mb-4'>
								<div className='text-center'>
									<div className='text-5xl font-black text-white mb-1'>{avgRating}</div>
									<StarRating rating={Math.round(avgRating ?? 0)} />
									<p className='text-gray-700 text-xs mt-1'>{app.reviews.length} отзывов</p>
								</div>
								<div className='flex-1 flex flex-col gap-1.5'>
									{[5, 4, 3, 2, 1].map(star => {
										const count = app.reviews?.filter(r => r.rating === star).length ?? 0
										return <RatingBar key={star} label={String(star)} value={count} max={app.reviews?.length ?? 1} />
									})}
								</div>
							</div>

							<div className='flex flex-col gap-3'>
								{app.reviews.map((r, i) => (
									<div key={i} className='p-5 bg-gray-950 border border-gray-900 rounded-2xl'>
										<div className='flex items-start justify-between mb-2'>
											<div>
												<p className='text-white font-semibold text-sm'>{r.author}</p>
												<StarRating rating={r.rating} />
											</div>
											<span className='text-gray-700 text-xs'>{r.date}</span>
										</div>
										<p className='text-gray-500 text-sm leading-relaxed mt-2'>{r.text}</p>
									</div>
								))}
							</div>
						</div>
					)}

					{/* Баннер — комментарии в разработке */}
					<div className='p-6 bg-gray-950 border border-gray-900 rounded-2xl text-center'>
						<div className='w-14 h-14 bg-gray-900 border border-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4'>
							<BiSupport size={28} className='text-gray-500' />
						</div>
						<h3 className='text-white font-bold text-base mb-2'>Система отзывов в разработке</h3>
						<p className='text-gray-600 text-sm leading-relaxed mb-5 max-w-xs mx-auto'>
							Хотите оставить отзыв о программе? Напишите нам в техническую поддержку — ваш отзыв обязательно появится здесь.
						</p>
						<a
							href='https://t.me/obr_orel_bot'
							className='inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-white text-sm font-semibold hover:bg-gray-700 active:scale-95 transition-all'
						>
							<BiSupport size={16} />
							Написать отзыв → Поддержка
						</a>
					</div>
				</div>
			)}
		</div>
	)
}