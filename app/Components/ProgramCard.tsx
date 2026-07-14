import React from 'react'

interface ProgramCardProps {
	icon: React.ReactNode
	title: string
	description: string
	href?: string
	linkLabel?: string
	badge?: string
}

export default function ProgramCard({
	icon,
	title,
	description,
	href,
	linkLabel = 'Открыть',
	badge,
}: ProgramCardProps) {
	const content = (
		<div className='group flex items-center gap-4 p-4 rounded-2xl border border-gray-900 hover:border-gray-800 hover:bg-gray-900/40 transition-all duration-200 cursor-pointer'>
			{/* Иконка */}
			<div className='w-14 h-14 flex-shrink-0 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-200'>
				{icon}
			</div>

			{/* Текст */}
			<div className='flex-1 min-w-0'>
				<div className='flex items-center gap-2 mb-0.5'>
					<h3 className='text-white font-semibold text-sm leading-tight truncate'>{title}</h3>
					{badge && (
						<span className='flex-shrink-0 text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-400 border border-gray-700'>
							{badge}
						</span>
					)}
				</div>
				<p className='text-gray-600 text-xs line-clamp-2 leading-relaxed'>{description}</p>
			</div>

			{/* Кнопка */}
			<div className='flex-shrink-0'>
				{href ? (
					<span className='px-4 py-1.5 rounded-full bg-gray-800 text-gray-300 text-xs font-semibold group-hover:bg-gray-700 group-hover:text-white transition-all border border-gray-700'>
						{linkLabel}
					</span>
				) : (
					<span className='px-4 py-1.5 rounded-full bg-gray-900 text-gray-600 text-xs font-semibold border border-gray-800'>
						{linkLabel}
					</span>
				)}
			</div>
		</div>
	)

	return href ? <li><a href={href}>{content}</a></li> : <li>{content}</li>
}