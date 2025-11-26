'use client'

import Cover from "./Components/Cover";
import Header from "./Components/Header";
import PopularProgram from "./Components/PopularProgram";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Декоративные фоновые элементы */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gray-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-800 rounded-full blur-3xl"></div>
      </div>

      {/* Сетка на фоне */}
      <div className="fixed inset-0 opacity-5 pointer-events-none"
           style={{
             backgroundImage: 'linear-gradient(rgba(75, 85, 99, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(75, 85, 99, 0.3) 1px, transparent 1px)',
             backgroundSize: '50px 50px'
           }}>
      </div>

      {/* Контент */}
      <div className="relative z-10">
        <Header activityPage={"home"}/>
        <Cover namePage={"Главная"} />
        <PopularProgram />
      </div>

      {/* Градиентная виньетка по краям */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-black/50"></div>
    </div>
  )
}