"use client";

import CoverProps from "@/app/types/cover.type";
import { useEffect, useState } from "react";

export default function Cover({ namePage }: CoverProps) {
	const [time, setTime] = useState<string>("");
	const [date, setDate] = useState<string>("");

	useEffect(() => {
		const updateTime = () => {
			const now = new Date();
			setTime(
				`${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`
			);
		};

		const updateDate = () => {
			const now = new Date();
			setDate(`${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`);
		};

		updateTime();
		updateDate();

		const interval = setInterval(updateTime, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className='relative flex flex-col items-center justify-center m-2 sm:m-4 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-black via-gray-900 to-black px-4 py-12 sm:p-40 overflow-hidden border border-gray-800'>
			{/* Декоративные элементы */}
			<div className='absolute inset-0 opacity-20'>
				<div className='absolute top-6 left-6 sm:top-10 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 rounded-full border-2 border-gray-700' />
				<div className='absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-12 h-12 sm:w-24 sm:h-24 rounded-full border-2 border-gray-700' />
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 rounded-full border border-gray-800' />
			</div>

			{/* Контент */}
			<div className='relative z-10 w-full'>
				<h1 className='font-extrabold text-2xl sm:text-4xl md:text-5xl text-center text-white mb-6 sm:mb-8 tracking-tight leading-tight'>
					{namePage === "Главная" ? "Добро пожаловать в OREL STORE" : namePage}
				</h1>

				{/* Время и дата */}
				<div className='flex flex-col sm:flex-row gap-3 sm:gap-6 items-center justify-center mt-4 sm:mt-8'>
					{time && (
						<div className='w-full sm:w-auto bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl px-6 py-3 sm:px-8 sm:py-4 shadow-xl text-center'>
							<p className='text-gray-400 text-xs uppercase tracking-wider mb-1'>Время</p>
							<p className='text-white text-2xl sm:text-3xl font-bold tracking-wider'>{time}</p>
						</div>
					)}

					{date && (
						<div className='w-full sm:w-auto bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl px-6 py-3 sm:px-8 sm:py-4 shadow-xl text-center'>
							<p className='text-gray-400 text-xs uppercase tracking-wider mb-1'>Дата</p>
							<p className='text-white text-2xl sm:text-3xl font-bold'>{date}</p>
						</div>
					)}
				</div>
			</div>

			{/* Световые эффекты */}
			<div className='absolute top-0 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-gray-700 rounded-full blur-3xl opacity-10' />
			<div className='absolute bottom-0 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-gray-600 rounded-full blur-3xl opacity-10' />
		</div>
	);
}