'use client'
import { useEffect, useState } from 'react'
import { FiDownloadCloud } from 'react-icons/fi'

export interface AppFeature {
	icon: string
	title: string
	desc: string
}

export interface AppChangelogEntry {
	version: string
	date: string
	changes: string[]
}

export interface AppReview {
	id?: number
	author: string
	rating: number
	text: string
	date: string
	isUserReview?: boolean
	sessionId?: string
}

export interface AppData {
	name: string
	tagline: string
	version: string
	releaseDate: string
	icon: string
	heroCover: string
	heroIsVideo?: boolean
	downloadUrl: string
	description: string
	features: AppFeature[]
	screenshots?: string[]
	changelog?: AppChangelogEntry[]
	reviews?: AppReview[]
}

interface AppPageTemplateProps {
	app: AppData
}

function Stars({
	rating,
	size = 'sm',
}: {
	rating: number
	size?: 'sm' | 'lg'
}) {
	const cls = size === 'sm' ? 'text-sm' : 'text-lg'
	return (
		<span className={cls}>
			{[1, 2, 3, 4, 5].map(i => (
				<span
					key={i}
					className={
						i <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-600'
					}
				>
					★
				</span>
			))}
		</span>
	)
}

function StarPicker({
	value,
	onChange,
}: {
	value: number
	onChange: (v: number) => void
}) {
	const [hovered, setHovered] = useState(0)
	return (
		<div className='flex gap-1'>
			{[1, 2, 3, 4, 5].map(i => (
				<button
					key={i}
					type='button'
					onClick={() => onChange(i)}
					onMouseEnter={() => setHovered(i)}
					onMouseLeave={() => setHovered(0)}
					className='text-2xl transition-transform hover:scale-125'
				>
					<span
						className={
							(hovered || value) >= i ? 'text-yellow-400' : 'text-gray-600'
						}
					>
						★
					</span>
				</button>
			))}
		</div>
	)
}

function Divider() {
	return (
		<div className='max-w-6xl mx-auto px-6 md:px-12'>
			<div className='border-t border-gray-800' />
		</div>
	)
}

function Hero({
	app,
	avgRating,
	totalReviews,
}: {
	app: AppData
	avgRating: string
	totalReviews: number
}) {
	return (
		<section className='relative w-full overflow-hidden'>
			<div
				className='relative w-full'
				style={{ aspectRatio: '16/6', minHeight: 260 }}
			>
				{app.heroIsVideo ? (
					<video
						src={app.heroCover}
						autoPlay
						muted
						loop
						playsInline
						className='w-full h-full object-cover'
					/>
				) : (
					<img
						src={app.heroCover}
						alt='cover'
						className='w-full h-full object-cover'
					/>
				)}
				<div className='absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent' />
			</div>
			<div className='absolute bottom-0 left-0 right-0 px-6 pb-8 md:px-12'>
				<div className='max-w-6xl mx-auto flex items-end gap-6'>
					<div className='w-20 h-20 md:w-24 md:h-24 bg-gray-800/80 backdrop-blur border border-gray-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl'>
						<img
							src={app.icon}
							alt={app.name}
							className='w-14 h-14 md:w-16 md:h-16'
						/>
					</div>
					<div className='flex-1 min-w-0'>
						<h1 className='text-2xl md:text-4xl font-black text-white leading-tight drop-shadow-lg'>
							{app.name}
						</h1>
						<p className='text-gray-300 text-sm md:text-base mt-1 drop-shadow'>
							{app.tagline}
						</p>
						<div className='flex items-center gap-3 mt-2 flex-wrap'>
							<Stars rating={parseFloat(avgRating)} size='sm' />
							<span className='text-yellow-400 font-bold text-sm'>
								{avgRating}
							</span>
							<span className='text-gray-500 text-sm'>
								({totalReviews} отзывов)
							</span>
							<span className='text-gray-600 text-sm'>·</span>
							<span className='text-gray-400 text-sm'>v{app.version}</span>
						</div>
					</div>
					<div className='hidden md:flex flex-col gap-2 flex-shrink-0'>
						<a
							href={app.downloadUrl}
							className='px-6 py-2.5 bg-gray-800/80 backdrop-blur border border-gray-600 text-white font-semibold rounded-xl text-sm hover:bg-gray-700 transition-all text-center flex gap-2'
						>
							<FiDownloadCloud className='text-xl' /> Скачать
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

function MobileButtons({ app }: { app: AppData }) {
	return (
		<div className='flex md:hidden gap-3 px-6 mt-4'>
			<a
				href={app.downloadUrl}
				className='flex-1 py-3 bg-gray-800 border border-gray-600 text-white font-semibold rounded-xl text-sm text-center'
			>
				Скачать
			</a>
		</div>
	)
}

function AboutSection({ app }: { app: AppData }) {
	return (
		<section className='max-w-6xl mx-auto px-6 md:px-12 py-12'>
			<div className='grid md:grid-cols-2 gap-10'>
				<div>
					<h2 className='text-xl font-bold text-white mb-3'>О приложении</h2>
					<p className='text-gray-400 leading-relaxed'>{app.description}</p>
					<div className='mt-4 flex gap-4 text-sm text-gray-500'>
						<span>
							Версия: <span className='text-gray-300'>v{app.version}</span>
						</span>
						<span>
							Обновлено:{' '}
							<span className='text-gray-300'>{app.releaseDate}</span>
						</span>
					</div>
				</div>
				<div className='grid grid-cols-2 gap-4'>
					{app.features.map((f, i) => (
						<div
							key={i}
							className='bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-2xl p-4 hover:border-gray-600 transition-colors'
						>
							<div className='text-2xl mb-2'>{f.icon}</div>
							<div className='text-white font-semibold text-sm'>{f.title}</div>
							<div className='text-gray-500 text-xs mt-1'>{f.desc}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

function Gallery({ screenshots }: { screenshots: string[] }) {
	const [active, setActive] = useState(0)
	if (screenshots.length === 0) return null
	return (
		<section className='max-w-6xl mx-auto px-6 md:px-12 py-10'>
			<h2 className='text-xl font-bold text-white mb-6'>Скриншоты</h2>
			<div
				className='w-full rounded-2xl overflow-hidden border border-gray-700 mb-4'
				style={{ aspectRatio: '16/9' }}
			>
				<img
					src={screenshots[active]}
					alt={`Screenshot ${active + 1}`}
					className='w-full h-full object-cover transition-all duration-300'
				/>
			</div>
			<div className='flex gap-3 overflow-x-auto pb-2'>
				{screenshots.map((src, i) => (
					<button
						key={i}
						onClick={() => setActive(i)}
						style={{ height: 70 }}
						className={`flex-shrink-0 w-28 rounded-xl overflow-hidden border-2 transition-all ${active === i ? 'border-white scale-105' : 'border-gray-700 opacity-50 hover:opacity-80'}`}
					>
						<img
							src={src}
							alt={`thumb ${i + 1}`}
							className='w-full h-full object-cover'
						/>
					</button>
				))}
			</div>
		</section>
	)
}

function Changelog({ changelog }: { changelog: AppChangelogEntry[] }) {
	const [open, setOpen] = useState(0)
	if (changelog.length === 0) return null
	return (
		<section className='max-w-6xl mx-auto px-6 md:px-12 py-10'>
			<h2 className='text-xl font-bold text-white mb-6'>Что нового</h2>
			<div className='space-y-3'>
				{changelog.map((entry, i) => (
					<div
						key={i}
						className='bg-gray-800/40 border border-gray-700/50 rounded-2xl overflow-hidden'
					>
						<button
							onClick={() => setOpen(open === i ? -1 : i)}
							className='w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-800/60 transition-colors'
						>
							<div className='flex items-center gap-4'>
								<span className='text-white font-bold'>v{entry.version}</span>
								<span className='text-gray-500 text-sm'>{entry.date}</span>
							</div>
							<span
								className='text-gray-500 inline-block transition-transform duration-200'
								style={{
									transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
								}}
							>
								▾
							</span>
						</button>
						{open === i && (
							<div className='px-6 pb-4 border-t border-gray-700/50'>
								<ul className='mt-3 space-y-2'>
									{entry.changes.map((c, j) => (
										<li
											key={j}
											className='flex items-start gap-2 text-gray-400 text-sm'
										>
											<span className='text-green-400 mt-0.5'>✓</span>
											{c}
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	)
}

function ReviewCard({
	r,
	canDelete,
	onDelete,
}: {
	r: AppReview
	canDelete: boolean
	onDelete?: () => void
}) {
	return (
		<div className='bg-gray-800/40 border border-gray-700/50 rounded-2xl p-5 hover:bg-gray-800/60 transition-colors relative group'>
			{canDelete && (
				<button
					onClick={onDelete}
					className='absolute top-3 right-3 w-6 h-6 rounded-full bg-gray-700 text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-900 hover:text-red-400 flex items-center justify-center'
				>
					✕
				</button>
			)}
			<div className='flex items-center justify-between mb-3'>
				<div className='flex items-center gap-2'>
					<div className='w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white text-sm font-bold'>
						{r.author[0].toUpperCase()}
					</div>
					<span className='text-white text-sm font-semibold'>{r.author}</span>
					{r.isUserReview && (
						<span className='text-xs text-gray-500 bg-gray-700/60 px-2 py-0.5 rounded-full'>
							Вы
						</span>
					)}
				</div>
				<span className='text-gray-600 text-xs'>{r.date}</span>
			</div>
			<Stars rating={r.rating} size='sm' />
			<p className='text-gray-400 text-sm mt-2 leading-relaxed'>{r.text}</p>
		</div>
	)
}

// ─── sessionId чтобы знать свои отзывы ───
function getSessionId(): string {
	const key = 'orel-session-id'
	try {
		let id = sessionStorage.getItem(key)
		if (!id) {
			id = `s-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
			sessionStorage.setItem(key, id)
		}
		return id
	} catch {
		return `s-${Date.now()}`
	}
}

// ─── Reviews + форма (localStorage) ──────
// TODO: когда будет Supabase — заменить loadReviews/saveReviews

function Reviews({
	appName,
	defaultReviews,
	onRatingChange,
}: {
	appName: string
	defaultReviews: AppReview[]
	onRatingChange: (rating: string, count: number) => void
}) {
	const STORAGE_KEY = `orel-reviews-${appName}`

	const [savedReviews, setSavedReviews] = useState<AppReview[]>([])
	const [loaded, setLoaded] = useState(false)
	const [sessionId] = useState(() =>
		typeof window !== 'undefined' ? getSessionId() : `temp-${Date.now()}`,
	)

	const [author, setAuthor] = useState('')
	const [text, setText] = useState('')
	const [starValue, setStarValue] = useState(0)
	const [error, setError] = useState('')
	const [success, setSuccess] = useState(false)
	const [showForm, setShowForm] = useState(false)

	// ✅ localStorage — работает в dev и prod
	function loadReviews() {
		try {
			const raw = localStorage.getItem(STORAGE_KEY)
			if (raw) setSavedReviews(JSON.parse(raw) as AppReview[])
		} catch {}
		setLoaded(true)
	}

	function saveReviews(list: AppReview[]) {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
		} catch {}
	}

	useEffect(() => {
		loadReviews()
	}, [STORAGE_KEY])

	const allReviews = [...savedReviews, ...defaultReviews]
	const avgRating =
		allReviews.length > 0
			? (
					allReviews.reduce((s, r) => s + r.rating, 0) / allReviews.length
				).toFixed(1)
			: '—'

	useEffect(() => {
		if (loaded) onRatingChange(avgRating, allReviews.length)
	}, [savedReviews, loaded])

	function handleSubmit() {
		if (!author.trim()) return setError('Введите ваше имя')
		if (starValue === 0) return setError('Поставьте оценку')
		if (!text.trim()) return setError('Напишите отзыв')
		setError('')

		const dateStr = new Date().toLocaleDateString('ru-RU', {
			day: 'numeric',
			month: 'short',
			year: 'numeric',
		})
		const newReview: AppReview = {
			id: Date.now(),
			author: author.trim(),
			rating: starValue,
			text: text.trim(),
			date: dateStr,
			isUserReview: true,
			sessionId,
		}
		const updated = [newReview, ...savedReviews]
		setSavedReviews(updated)
		saveReviews(updated)
		setAuthor('')
		setText('')
		setStarValue(0)
		setSuccess(true)
		setShowForm(false)
		setTimeout(() => setSuccess(false), 3000)
	}

	function handleDelete(id: number) {
		const updated = savedReviews.filter(r => r.id !== id)
		setSavedReviews(updated)
		saveReviews(updated)
	}

	return (
		<section className='max-w-6xl mx-auto px-6 md:px-12 py-10'>
			<div className='flex items-center justify-between mb-6 flex-wrap gap-4'>
				<div className='flex items-center gap-4'>
					<h2 className='text-xl font-bold text-white'>Отзывы</h2>
					{success && (
						<span className='text-green-400 text-sm animate-pulse'>
							✓ Опубликовано!
						</span>
					)}
				</div>
				<div className='flex items-center gap-4'>
					<div className='flex items-center gap-2'>
						<span className='text-3xl font-black text-white'>{avgRating}</span>
						<div>
							<Stars rating={parseFloat(avgRating)} size='lg' />
							<div className='text-gray-500 text-xs text-right'>
								{allReviews.length} отзывов
							</div>
						</div>
					</div>
					<button
						onClick={() => setShowForm(!showForm)}
						className='px-4 py-2 bg-white text-black text-sm font-bold rounded-xl hover:bg-gray-200 transition-all hover:scale-105'
					>
						{showForm ? '✕ Закрыть' : '+ Написать отзыв'}
					</button>
				</div>
			</div>

			{showForm && (
				<div className='bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-6 mb-6'>
					<h3 className='text-white font-bold mb-4'>Ваш отзыв</h3>
					<div className='space-y-4'>
						<div>
							<label className='text-gray-400 text-xs mb-1 block'>
								Ваше имя
							</label>
							<input
								value={author}
								onChange={e => setAuthor(e.target.value)}
								placeholder='Например: Ислам К.'
								maxLength={40}
								className='w-full bg-gray-900/60 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-600 outline-none focus:border-gray-500 transition-colors'
							/>
						</div>
						<div>
							<label className='text-gray-400 text-xs mb-1 block'>Оценка</label>
							<StarPicker value={starValue} onChange={setStarValue} />
						</div>
						<div>
							<label className='text-gray-400 text-xs mb-1 block'>
								Текст отзыва
							</label>
							<textarea
								value={text}
								onChange={e => setText(e.target.value)}
								placeholder='Поделитесь впечатлениями...'
								rows={3}
								maxLength={300}
								className='w-full bg-gray-900/60 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-600 outline-none focus:border-gray-500 transition-colors resize-none'
							/>
							<div className='text-right text-gray-600 text-xs mt-1'>
								{text.length}/300
							</div>
						</div>
						{error && <p className='text-red-400 text-sm'>{error}</p>}
						<button
							onClick={handleSubmit}
							className='w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all hover:scale-[1.02]'
						>
							Опубликовать →
						</button>
					</div>
				</div>
			)}

			{!loaded ? (
				<div className='text-gray-600 text-sm text-center py-8'>
					Загрузка...
				</div>
			) : allReviews.length === 0 ? (
				<div className='text-center py-12 text-gray-600'>
					<div className='text-4xl mb-3'>💬</div>
					<p>Отзывов пока нет. Будьте первым!</p>
				</div>
			) : (
				<div className='grid md:grid-cols-3 gap-4'>
					{savedReviews.map(r => (
						<ReviewCard
							key={r.id}
							r={{ ...r, isUserReview: r.sessionId === sessionId }}
							canDelete={r.sessionId === sessionId}
							onDelete={() => handleDelete(r.id!)}
						/>
					))}
					{defaultReviews.map((r, i) => (
						<ReviewCard key={`def-${i}`} r={r} canDelete={false} />
					))}
				</div>
			)}
		</section>
	)
}

// ─── ГЛАВНЫЙ КОМПОНЕНТ ───────────────────
export default function AppPageTemplate({ app }: AppPageTemplateProps) {
	const initialAvg =
		app.reviews && app.reviews.length > 0
			? (
					app.reviews.reduce((s, r) => s + r.rating, 0) / app.reviews.length
				).toFixed(1)
			: '—'

	const [avgRating, setAvgRating] = useState(initialAvg)
	const [totalReviews, setTotalReviews] = useState(app.reviews?.length ?? 0)

	return (
		<div className='relative'>
			<Hero app={app} avgRating={avgRating} totalReviews={totalReviews} />
			<MobileButtons app={app} />
			<Divider />
			<AboutSection app={app} />
			{app.screenshots && app.screenshots.length > 0 && (
				<>
					<Divider />
					<Gallery screenshots={app.screenshots} />
				</>
			)}
			{app.changelog && app.changelog.length > 0 && (
				<>
					<Divider />
					<Changelog changelog={app.changelog} />
				</>
			)}
			<Divider />
			<Reviews
				appName={app.name}
				defaultReviews={app.reviews ?? []}
				onRatingChange={(rating, count) => {
					setAvgRating(rating)
					setTotalReviews(count)
				}}
			/>
		</div>
	)
}
