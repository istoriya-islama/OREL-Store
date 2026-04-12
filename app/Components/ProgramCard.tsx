import React from 'react'

interface ProgramCardProps {
	icon: React.ReactNode
	title: string
	description: string
	href?: string
	linkLabel?: string
}

export default function ProgramCard({
	icon,
	title,
	description,
	href,
	linkLabel = 'Открыть',
}: ProgramCardProps) {
	return (
		<li className='bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-4 md:p-6 hover:bg-gray-800/70 hover:scale-105 transition-all duration-300 cursor-pointer group flex flex-col'>
			{/* Иконка */}
			<div className='w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform flex-shrink-0'>
				{icon}
			</div>

			{/* Название */}
			<h3 className='text-sm md:text-xl font-bold text-white mb-1 md:mb-2 leading-tight line-clamp-2'>
				{title}
			</h3>

			{/* Описание */}
			<p className='text-gray-400 text-xs md:text-sm flex-1 line-clamp-3'>
				{description}
			</p>

			{/* Ссылка */}
			{linkLabel && (
				<div className='mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-700'>
					{href ? (
						<a
							href={href}
							className='inline-flex items-center gap-1 md:gap-2 text-gray-500 text-xs md:text-sm group-hover:text-gray-300 transition-colors group-hover:gap-2 md:group-hover:gap-3'
						>
							{linkLabel} <span className='transition-all'>→</span>
						</a>
					) : (
						<span className='inline-flex items-center gap-1 md:gap-2 text-gray-500 text-xs md:text-sm'>
							{linkLabel} <span className='transition-all'>...</span>
						</span>
					)}
				</div>
			)}
		</li>
	)
}
