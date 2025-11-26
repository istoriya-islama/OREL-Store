"use client";

import CoverProps from "@/app/types/cover.type";
import { useEffect, useState } from "react";

export default function Cover({namePage} : CoverProps) {
    const [time, setTime] = useState<string>("");
    const [date, setDate] = useState<string>("");
    
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(`${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`);
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
        <div className="relative flex flex-col items-center justify-center m-4 rounded-3xl bg-gradient-to-br from-black via-gray-900 to-black p-40 overflow-hidden border border-gray-800">
            {/* Декоративные элементы */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-gray-700"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full border-2 border-gray-700"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-gray-800"></div>
            </div>

            {/* Контент */}
            <div className="relative z-10">
                <h1 className="font-extrabold text-5xl text-center text-white mb-8 tracking-tight">
                    {namePage === "Главная" ? "Добро пожаловать в OREL STORE" : namePage}
                </h1>
                
                {/* Время и дата */}
                <div className="flex gap-6 items-center justify-center mt-8">
                    {time && (
                        <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl px-8 py-4 shadow-xl">
                            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Время</p>
                            <p className="text-white text-3xl font-bold tracking-wider">{time}</p>
                        </div>
                    )}
                    
                    {date && (
                        <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl px-8 py-4 shadow-xl">
                            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Дата</p>
                            <p className="text-white text-3xl font-bold">{date}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Световые эффекты */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-gray-700 rounded-full blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gray-600 rounded-full blur-3xl opacity-10"></div>
        </div>
    )
}