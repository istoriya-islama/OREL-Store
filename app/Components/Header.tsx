'use client'

import type { User } from '@/app/lib/api'
import { api } from '@/app/lib/api'
import { useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { BiSupport } from 'react-icons/bi'
import { GoHome } from 'react-icons/go'
import { HiUser } from 'react-icons/hi'
import { IoApps, IoClose, IoMenu } from 'react-icons/io5'

const PROFILE_URL =
	'https://orel-id.istoriyaislama.workers.dev/pages/user/profile'

// ── Auth Modal ──────────────────────────────────────────────
function AuthModal({
	mode,
	onClose,
	onSuccess,
}: {
	mode: 'login' | 'register'
	onClose: () => void
	onSuccess: (user: User) => void
}) {
	const [tab, setTab] = useState<'login' | 'register'>(mode)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const { executeRecaptcha } = useGoogleReCaptcha()

	const handleSubmit = async () => {
		setError('')
		setLoading(true)
		const recaptchaToken = await executeRecaptcha!('register')
		try {
			if (tab === 'register') {
				if (!name.trim()) {
					setError('Введите имя')
					setLoading(false)
					return
				}
				if (!email.includes('@')) {
					setError('Неверный email')
					setLoading(false)
					return
				}
				if (password.length < 6) {
					setError('Пароль минимум 8 символов')
					setLoading(false)
					return
				}
				await api.register({
					name: name,
					email: email,
					password: password,
					recaptchaToken,
				})
				// После регистрации — сразу логиним
				const res = await api.login({ email, password })
				onSuccess(res.user)
			} else {
				if (!email || !password) {
					setError('Заполните все поля')
					setLoading(false)
					return
				}
				const res = await api.login({ email, password })
				onSuccess(res.user)
			}
		} catch (err: unknown) {
			const message = err instanceof Error ? err.message : 'Произошла ошибка'
			setError(message)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div
			className='fixed inset-0 z-[100] flex items-center justify-center p-4'
			style={{ background: 'rgba(0,0,0,0.80)', backdropFilter: 'blur(8px)' }}
			onClick={onClose}
		>
			<div
				className='relative w-full max-w-sm bg-gray-950 border border-gray-800 rounded-3xl p-6 shadow-2xl'
				onClick={e => e.stopPropagation()}
			>
				<button
					onClick={onClose}
					className='absolute top-4 right-4 p-1.5 text-gray-600 hover:text-gray-300 transition-colors rounded-lg hover:bg-gray-800'
				>
					<IoClose size={18} />
				</button>

				<div className='mb-6'>
					<h2 className='text-white font-bold text-xl mb-1'>
						{tab === 'login' ? 'Добро пожаловать' : 'Создать аккаунт'}
					</h2>
					<p className='text-gray-600 text-sm'>OREL Store</p>
				</div>

				<div className='flex gap-1 mb-5 bg-gray-900 rounded-xl p-1'>
					{(['login', 'register'] as const).map(t => (
						<button
							key={t}
							onClick={() => {
								setTab(t)
								setError('')
							}}
							className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
								tab === t
									? 'bg-white text-black shadow-sm'
									: 'text-gray-500 hover:text-gray-300'
							}`}
						>
							{t === 'login' ? 'Войти' : 'Регистрация'}
						</button>
					))}
				</div>

				<div className='flex flex-col gap-3'>
					{tab === 'register' && (
						<input
							value={name}
							onChange={e => setName(e.target.value)}
							placeholder='Ваше имя'
							disabled={loading}
							className='w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-gray-600 transition-colors disabled:opacity-50'
						/>
					)}
					<input
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder='Email'
						type='email'
						disabled={loading}
						className='w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-gray-600 transition-colors disabled:opacity-50'
					/>
					<input
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder='Пароль'
						type='password'
						disabled={loading}
						onKeyDown={e => e.key === 'Enter' && handleSubmit()}
						className='w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-gray-600 transition-colors disabled:opacity-50'
					/>

					{error && <p className='text-red-400 text-xs text-center'>{error}</p>}

					<button
						onClick={handleSubmit}
						disabled={loading}
						className='w-full py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-100 active:scale-95 transition-all mt-1 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2'
					>
						{loading && (
							<svg
								className='animate-spin w-4 h-4'
								viewBox='0 0 24 24'
								fill='none'
							>
								<circle
									className='opacity-25'
									cx='12'
									cy='12'
									r='10'
									stroke='currentColor'
									strokeWidth='4'
								/>
								<path
									className='opacity-75'
									fill='currentColor'
									d='M4 12a8 8 0 018-8v8z'
								/>
							</svg>
						)}
						{loading
							? 'Загрузка...'
							: tab === 'login'
								? 'Войти'
								: 'Создать аккаунт'}
					</button>
				</div>
			</div>
		</div>
	)
}

// ── User Widget ─────────────────────────────────────────────
function UserWidget({
	user,
	mobile,
	userMenuOpen,
	setUserMenuOpen,
	onLogout,
	onOpenAuth,
}: {
	user: User | null
	mobile: boolean
	userMenuOpen: boolean
	setUserMenuOpen: (v: boolean) => void
	onLogout: () => void
	onOpenAuth: (mode: 'login' | 'register') => void
}) {
	if (user) {
		return (
			<div className='relative'>
				<button
					onClick={() => setUserMenuOpen(!userMenuOpen)}
					className={`flex items-center gap-2 ${
						mobile ? 'w-full px-4 py-3' : 'px-3 py-2'
					} rounded-xl bg-gray-900 border border-gray-800 text-white text-sm font-medium hover:bg-gray-800 transition-all active:scale-95`}
				>
					<div className='w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold flex-shrink-0'>
						{user.name.charAt(0).toUpperCase()}
					</div>
					<span className='max-w-[100px] truncate'>{user.name}</span>
				</button>

				{userMenuOpen && (
					<>
						<div
							className='fixed inset-0 z-10'
							onClick={() => setUserMenuOpen(false)}
						/>
						<div className='absolute right-0 top-full mt-2 w-44 bg-gray-950 border border-gray-800 rounded-xl shadow-2xl z-20 overflow-hidden'>
							<a
								href={PROFILE_URL}
								target='_blank'
								rel='noopener noreferrer'
								className='block w-full px-4 py-2.5 text-left text-sm text-gray-300 hover:bg-gray-900 transition-colors'
							>
								Профиль →
							</a>
							<div className='h-px bg-gray-800' />
							<button
								onClick={onLogout}
								className='w-full px-4 py-2.5 text-left text-sm text-red-400 hover:bg-gray-900 transition-colors'
							>
								Выйти
							</button>
						</div>
					</>
				)}
			</div>
		)
	}

	return (
		<div className={`flex ${mobile ? 'flex-col' : 'flex-row'} gap-2`}>
			<button
				onClick={() => onOpenAuth('login')}
				className={`${
					mobile
						? 'w-full py-2.5 rounded-xl text-center'
						: 'px-4 py-2 rounded-xl text-sm'
				} border border-gray-800 text-gray-400 font-medium hover:bg-gray-900 hover:text-white transition-all active:scale-95`}
			>
				Войти
			</button>
			<button
				onClick={() => onOpenAuth('register')}
				className={`${
					mobile
						? 'w-full py-2.5 rounded-xl text-center'
						: 'px-4 py-2 rounded-xl text-sm'
				} bg-white text-black font-bold hover:bg-gray-100 transition-all active:scale-95`}
			>
				Регистрация
			</button>
		</div>
	)
}

// ── Header ──────────────────────────────────────────────────
export default function Header({ activityPage }: { activityPage: string }) {
	const [menuOpen, setMenuOpen] = useState(false)
	const [authMode, setAuthMode] = useState<'login' | 'register' | null>(null)
	const [user, setUser] = useState<User | null>(null)
	const [userMenuOpen, setUserMenuOpen] = useState(false)

	// Проверяем текущего пользователя через API при монтировании
	useState(() => {
		api
			.getCurrentUser()
			.then(u => setUser(u))
			.catch(() => setUser(null))
	})

	const handleLogin = (u: User) => {
		setUser(u)
		setAuthMode(null)
	}

	const handleLogout = async () => {
		try {
			await api.logout()
		} catch {}
		setUser(null)
		setUserMenuOpen(false)
	}

	const navLinks = [
		{ label: 'Главная', href: '/', key: 'home' },
		{ label: 'Программы', href: '/pages/program', key: 'program' },
		{ label: 'OREL Программы', href: '/pages/orelprogram', key: 'orelprogram' },
		{ label: 'Режимы', href: '/pages/modes', key: 'modes' },
	]

	const iconLinks = [
		{
			href: 'https://istoriya-islama.github.io/OREL/',
			icon: <GoHome size={18} />,
			label: 'Сайт',
		},
		{
			href: 'https://orel-insider.onrender.com/',
			icon: <IoApps size={18} />,
			label: 'Инсайдер',
		},
		{
			href: 'https://t.me/obr_orel_bot',
			icon: <BiSupport size={18} />,
			label: 'Поддержка',
		},
	]

	return (
		<>
			{authMode && (
				<AuthModal
					mode={authMode}
					onClose={() => setAuthMode(null)}
					onSuccess={handleLogin}
				/>
			)}

			<header className='sticky top-0 z-40 border-b border-gray-900 bg-black/85 backdrop-blur-xl text-white select-none'>
				{/* Mobile */}
				<div className='flex items-center justify-between px-4 py-3.5 md:hidden'>
					<button
						onClick={() => setMenuOpen(v => !v)}
						className='p-2 rounded-xl bg-gray-900 border border-gray-800 active:scale-95 transition-all'
					>
						{menuOpen ? <IoClose size={20} /> : <IoMenu size={20} />}
					</button>

					<a
						href={'/'}
						className='font-black uppercase text-xl tracking-widest'
					>
						OREL
						<span className='text-gray-600 font-light normal-case tracking-normal text-sm ml-1'>
							Store
						</span>
					</a>

					<button
						onClick={() =>
							user ? window.open(PROFILE_URL, '_blank') : setAuthMode('login')
						}
						className='p-2 rounded-xl bg-gray-900 border border-gray-800 active:scale-95 transition-all'
					>
						{user ? (
							<div className='w-5 h-5 rounded-full bg-gray-600 flex items-center justify-center text-xs font-bold'>
								{user.name.charAt(0)}
							</div>
						) : (
							<HiUser size={20} className='text-gray-400' />
						)}
					</button>
				</div>

				{/* Desktop */}
				<div className='hidden md:flex items-center justify-between px-8 py-4 max-w-7xl mx-auto'>
					<a
						href={'/'}
						className='font-black uppercase text-xl tracking-widest flex-shrink-0'
					>
						OREL
						<span className='text-gray-600 font-light normal-case tracking-normal text-sm ml-1'>
							store
						</span>
					</a>

					<nav className='flex items-center gap-0.5'>
						{navLinks.map(link => (
							<a
								key={link.key}
								href={link.href}
								className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 ${
									activityPage === link.key
										? 'bg-gray-900 text-white border border-gray-800'
										: 'text-gray-500 hover:text-white hover:bg-gray-900/60'
								}`}
							>
								{link.label}
							</a>
						))}
					</nav>

					<div className='flex items-center gap-1.5'>
						{iconLinks.map((item, i) => (
							<a
								key={i}
								href={item.href}
								aria-label={item.label}
								className='p-2.5 rounded-xl text-gray-600 border border-gray-900 hover:text-white hover:border-gray-800 hover:bg-gray-900/60 transition-all duration-150'
							>
								{item.icon}
							</a>
						))}
						<div className='w-px h-5 bg-gray-800 mx-1.5' />
						<UserWidget
							user={user}
							mobile={false}
							userMenuOpen={userMenuOpen}
							setUserMenuOpen={setUserMenuOpen}
							onLogout={handleLogout}
							onOpenAuth={setAuthMode}
						/>
					</div>
				</div>
			</header>

			{/* Mobile drawer */}
			<div
				className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
					menuOpen
						? 'opacity-100 pointer-events-auto'
						: 'opacity-0 pointer-events-none'
				}`}
			>
				<div
					className='absolute inset-0 bg-black/70 backdrop-blur-sm'
					onClick={() => setMenuOpen(false)}
				/>

				<div
					className={`absolute top-0 left-0 h-full w-72 bg-gray-950 border-r border-gray-800 flex flex-col transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
				>
					<div className='flex items-center justify-between px-5 py-5 border-b border-gray-800'>
						<span className='font-black uppercase text-lg tracking-widest'>
							OREL{' '}
							<span className='text-gray-600 font-light normal-case tracking-normal text-sm'>
								Store
							</span>
						</span>
						<button
							onClick={() => setMenuOpen(false)}
							className='p-2 rounded-xl bg-gray-900 border border-gray-800 active:scale-95'
						>
							<IoClose size={18} />
						</button>
					</div>

					<nav className='flex-1 px-4 py-5'>
						<p className='text-gray-700 text-xs uppercase tracking-widest mb-3 px-1'>
							Разделы
						</p>
						<ul className='flex flex-col gap-1'>
							{navLinks.map(link => (
								<li key={link.key}>
									<a
										href={link.href}
										onClick={() => setMenuOpen(false)}
										className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
											activityPage === link.key
												? 'bg-gray-900 text-white border border-gray-800'
												: 'text-gray-500 hover:bg-gray-900/60 hover:text-white'
										}`}
									>
										{activityPage === link.key && (
											<span className='w-1.5 h-1.5 rounded-full bg-white flex-shrink-0' />
										)}
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<div className='px-4 py-5 border-t border-gray-800'>
						<p className='text-gray-700 text-xs uppercase tracking-widest mb-3'>
							Аккаунт
						</p>
						<UserWidget
							user={user}
							mobile={true}
							userMenuOpen={userMenuOpen}
							setUserMenuOpen={setUserMenuOpen}
							onLogout={handleLogout}
							onOpenAuth={m => {
								setAuthMode(m)
								setMenuOpen(false)
							}}
						/>
						<div className='flex gap-2 mt-3'>
							{iconLinks.map((item, i) => (
								<a
									key={i}
									href={item.href}
									aria-label={item.label}
									className='p-2.5 rounded-xl border border-gray-800 text-gray-600 hover:text-white hover:bg-gray-900 transition-all active:scale-95'
								>
									{item.icon}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
