'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

// ╔══════════════════════════════════════════════════╗
// ║            OREL — Страница 404                   ║
// ║   Файл: app/not-found.tsx  (Next.js App Router)  ║
// ╚══════════════════════════════════════════════════╝

// ─── Глитч-эффект для "404" ──────────────
function GlitchText() {
	const [glitch, setGlitch] = useState<boolean>(false)

	useEffect(() => {
		const interval = setInterval(() => {
			setGlitch(true)
			setTimeout(() => setGlitch(false), 200)
		}, 2800)
		return () => clearInterval(interval)
	}, [])

	return (
		<div className='relative select-none' style={{ fontFamily: "'Courier New', monospace" }}>
			<span
				className='text-[7rem] md:text-[10rem] font-black leading-none text-white block'
				style={{
					textShadow: glitch ? '4px 0 #ff003c, -4px 0 #00f0ff' : 'none',
					transition: 'text-shadow 0.05s',
				}}
			>
				404
			</span>
			{glitch && (
				<span
					className='absolute inset-0 text-[7rem] md:text-[10rem] font-black leading-none block'
					style={{
						color: '#ff003c',
						clipPath: 'polygon(0 30%, 100% 30%, 100% 50%, 0 50%)',
						transform: 'translate(-6px, 0)',
						opacity: 0.8,
						fontFamily: "'Courier New', monospace",
					}}
				>
					404
				</span>
			)}
			{glitch && (
				<span
					className='absolute inset-0 text-[7rem] md:text-[10rem] font-black leading-none block'
					style={{
						color: '#00f0ff',
						clipPath: 'polygon(0 60%, 100% 60%, 100% 75%, 0 75%)',
						transform: 'translate(6px, 0)',
						opacity: 0.8,
						fontFamily: "'Courier New', monospace",
					}}
				>
					404
				</span>
			)}
		</div>
	)
}

// ─── Частицы ─────────────────────────────
interface Particle {
	id: number
	x: number
	y: number
	size: number
	speed: number
	opacity: number
}

function Particles() {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return
		const ctx = canvas.getContext('2d')
		if (!ctx) return

		const setSize = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
		}
		setSize()

		const particles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
			id: i,
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			size: Math.random() * 1.5 + 0.5,
			speed: Math.random() * 0.4 + 0.1,
			opacity: Math.random() * 0.4 + 0.1,
		}))

		let animId: number

		function draw() {
			if (!ctx || !canvas) return
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			particles.forEach(p => {
				ctx.beginPath()
				ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
				ctx.fillStyle = `rgba(156, 163, 175, ${p.opacity})`
				ctx.fill()
				p.y -= p.speed
				if (p.y < -5) {
					p.y = canvas.height + 5
					p.x = Math.random() * canvas.width
				}
			})
			animId = requestAnimationFrame(draw)
		}

		draw()
		window.addEventListener('resize', setSize)
		return () => {
			cancelAnimationFrame(animId)
			window.removeEventListener('resize', setSize)
		}
	}, [])

	return (
		<canvas
			ref={canvasRef}
			className='fixed inset-0 pointer-events-none'
			style={{ zIndex: 1 }}
		/>
	)
}

// ─── Сканлайны ───────────────────────────
function Scanlines() {
	return (
		<div
			className='fixed inset-0 pointer-events-none'
			style={{
				zIndex: 2,
				backgroundImage:
					'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.07) 2px, rgba(0,0,0,0.07) 4px)',
			}}
		/>
	)
}

// ─── Мигающий курсор ─────────────────────
function Cursor() {
	const [visible, setVisible] = useState<boolean>(true)
	useEffect(() => {
		const t = setInterval(() => setVisible(v => !v), 530)
		return () => clearInterval(t)
	}, [])
	return (
		<span
			className='inline-block w-2.5 h-4 bg-white ml-1 align-middle'
			style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.1s' }}
		/>
	)
}

// ─── Терминал ────────────────────────────
const LOG_LINES: string[] = [
	'> Инициализация OREL OS...',
	'> Поиск страницы...',
	'> Сканирование директорий...',
	'> ERROR: path not found',
	'> Перенаправление не удалось',
	'> Статус: 404 NOT FOUND',
]

function TerminalLog() {
	const [lines, setLines] = useState<string[]>([])
	const [done, setDone] = useState<boolean>(false)

	useEffect(() => {
		let i = 0
		const interval = setInterval(() => {
			// ✅ FIX: сохраняем строку в переменную и проверяем перед setState
			const nextLine = LOG_LINES[i]
			if (i < LOG_LINES.length && typeof nextLine === 'string') {
				setLines(prev => [...prev, nextLine])
				i++
			} else {
				clearInterval(interval)
				setDone(true)
			}
		}, 350)
		return () => clearInterval(interval)
	}, [])

	return (
		<div
			className='w-full text-left bg-gray-950/80 border border-gray-800 rounded-xl p-3 mb-5'
			style={{ fontFamily: "'Courier New', monospace" }}
		>
			{lines.map((line, i) => {
				// ✅ FIX: guard — если line не строка, пропускаем
				if (typeof line !== 'string') return null
				const isError =
					line.includes('ERROR') ||
					line.includes('не удалось') ||
					line.includes('404')
				const isLast = i === lines.length - 1
				return (
					<div
						key={i}
						className={`text-xs leading-5 ${
							isError ? 'text-red-400' : isLast ? 'text-gray-300' : 'text-gray-600'
						}`}
					>
						{line}
					</div>
				)
			})}
			{done && (
				<div className='text-xs text-gray-300 leading-5'>
					{'>'} Ожидание команды
					<Cursor />
				</div>
			)}
		</div>
	)
}

// ─── Страница 404 ────────────────────────
export default function NotFound() {
	const [mounted, setMounted] = useState<boolean>(false)

	useEffect(() => {
		const t = setTimeout(() => setMounted(true), 50)
		return () => clearTimeout(t)
	}, [])

	return (
		// ✅ FIX: overflow-hidden + min-h-screen без max-h чтобы не резало на маленьких экранах
		<div className='min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden'>
			{/* Фон */}
			<div className='fixed inset-0 bg-gradient-to-br from-black via-gray-950 to-black' />

			{/* Сетка */}
			<div
				className='fixed inset-0 opacity-[0.04] pointer-events-none'
				style={{
					backgroundImage:
						'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
					backgroundSize: '40px 40px',
				}}
			/>

			{/* Свечение */}
			<div
				className='fixed pointer-events-none'
				style={{
					top: '50%', left: '50%',
					transform: 'translate(-50%, -50%)',
					width: 500, height: 500,
					background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
				}}
			/>

			<Particles />
			<Scanlines />

			{/* ✅ FIX: контент ограничен по ширине, всё внутри экрана */}
			<div
				className='relative z-10 flex flex-col items-center text-center w-full max-w-sm px-5'
				style={{
					opacity: mounted ? 1 : 0,
					transform: mounted ? 'translateY(0)' : 'translateY(16px)',
					transition: 'opacity 0.6s ease, transform 0.6s ease',
				}}
			>
				{/* Бейдж */}
				<div
					className='mb-3 px-3 py-1 border border-gray-700 rounded-full text-gray-500 text-xs tracking-widest uppercase'
					style={{ fontFamily: "'Courier New', monospace" }}
				>
					OREL OS · Ошибка
				</div>

				{/* 404 с глитчем */}
				<GlitchText />

				{/* Заголовок */}
				<h1
					className='text-lg font-bold text-white mt-1 mb-1 tracking-tight'
					style={{ fontFamily: "'Courier New', monospace" }}
				>
					Страница не найдена
				</h1>
				<p className='text-gray-500 text-xs mb-5 leading-5'>
					Запрошенный путь не существует или был удалён.
				</p>

				{/* Терминал */}
				<TerminalLog />

				{/* Кнопки */}
				<div className='flex flex-col sm:flex-row gap-2 w-full'>
					<Link
						href='/'
						className='flex-1 py-2.5 bg-white text-black font-bold rounded-xl text-sm text-center hover:bg-gray-200 transition-all hover:scale-105'
					>
						← На главную
					</Link>
					<Link
						href='/pages/program'
						className='flex-1 py-2.5 bg-transparent border border-gray-700 text-gray-400 font-semibold rounded-xl text-sm text-center hover:border-gray-500 hover:text-white transition-all'
					>
						Программы
					</Link>
                    <Link
						href='/pages/modes'
						className='flex-1 py-2.5 bg-transparent border border-gray-700 text-gray-400 font-semibold rounded-xl text-sm text-center hover:border-gray-500 hover:text-white transition-all'
					>
						Режимы
					</Link>
				</div>

				{/* Футер */}
				<div
					className='mt-6 text-gray-700 text-xs tracking-widest'
					style={{ fontFamily: "'Courier New', monospace" }}
				>
					ERR_NOT_FOUND · HTTP 404
				</div>
			</div>
		</div>
	)
}