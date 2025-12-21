"use client";

import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useAppSelector } from "@/lib/hooks";

const menuCategories = [
    {
        id: 1,
        title: "Главная",
        subcategories: ["Главная страница", "Новости", "События", "Анонсы"],
    },
    {
        id: 2,
        title: "О нас",
        subcategories: [
            "История компании",
            "Наша команда",
            "Миссия и ценности",
            "Достижения",
        ],
    },
    {
        id: 3,
        title: "Услуги",
        subcategories: ["Консультации", "Разработка", "Поддержка", "Обучение"],
    },
    {
        id: 4,
        title: "Проекты",
        subcategories: ["Портфолио", "Кейсы", "Отзывы клиентов"],
    },
    {
        id: 5,
        title: "Контакты",
        subcategories: ["Связаться с нами", "Офисы", "Вакансии"],
    },
];

export default function FloatingNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(1);
    const theme = useAppSelector((state) => state.theme.mode);

    return (
        <>
            {/* Burger Button with Line - LEFT SIDE */}
            <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[60] flex items-center gap-0">
                {/* Thin Line */}
                <div className={`w-[2px] h-20 ${theme === "dark" ? "bg-white/30" : "bg-black/30"
                    }`}></div>

                {/* Burger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-14 h-14 rounded-r-2xl shadow-lg
            ${theme === "dark"
                            ? "border-white/20 border bg-black/40 hover:bg-black/60 hover:border-white/40 text-white"
                            : "border-gray-200 border bg-white/90 hover:bg-white hover:border-gray-300 text-gray-900"
                        }
            backdrop-blur-sm border-l-0 flex items-center justify-center 
            transition-all duration-300 group`}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <IoClose className={`w-6 h-6 transition-transform duration-300 group-hover:rotate-90`} />
                    ) : (
                        <HiMenuAlt3 className={`w-6 h-6 transition-transform duration-300 group-hover:scale-110`} />
                    )}
                </button>
            </div>

            {/* Side Menu - FULL WIDTH */}
            <div
                className={`fixed left-0 top-0 h-full w-full bg-white dark:bg-gray-900 z-[55] transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex flex-col md:flex-row h-full">
                    {/* Left Column - Categories */}
                    <div className="w-full md:w-[400px] bg-gray-50 dark:bg-gray-800 p-6 pt-20 md:p-8 md:pt-24 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
                        <nav className="flex flex-col gap-2">
                            {menuCategories.map((category) => (
                                <div key={category.id}>
                                    <button
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`w-full px-6 py-4 rounded-lg text-left text-lg font-medium transition-all duration-300 text-gray-800 dark:text-gray-100 ${activeCategory === category.id
                                            ? "bg-white dark:bg-gray-700 shadow-md"
                                            : "hover:bg-white/50 dark:hover:bg-gray-700/50"
                                            }`}
                                    >
                                        {category.title}
                                    </button>

                                    {/* Mobile Subcategories Accordion */}
                                    <div className={`md:hidden overflow-hidden transition-all duration-300 ${activeCategory === category.id ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
                                        }`}>
                                        <div className="pl-6 flex flex-col gap-2 pb-2">
                                            {category.subcategories.map((sub, index) => (
                                                <a
                                                    key={index}
                                                    href="#"
                                                    className="px-4 py-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-all text-base text-gray-600 dark:text-gray-300 block"
                                                >
                                                    {sub}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </nav>

                        {/* Contact Info */}
                        <div className="mt-8 md:mt-12 pt-8 border-t border-gray-300 dark:border-gray-600">
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                Контакты
                            </p>
                            <a
                                href="tel:+74951234567"
                                className="text-sm text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                +7 (495) 123-45-67
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Subcategories (Desktop Only) */}
                    <div className="hidden md:block flex-1 p-12 pt-24 overflow-y-auto bg-white dark:bg-gray-900">
                        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                            {menuCategories.find((cat) => cat.id === activeCategory)?.title}
                        </h2>
                        <nav className="flex flex-col gap-3">
                            {menuCategories
                                .find((cat) => cat.id === activeCategory)
                                ?.subcategories.map((sub, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="px-6 py-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-lg flex items-center gap-3 group text-gray-800 dark:text-gray-200"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {sub}
                                    </a>
                                ))}
                        </nav>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[54] transition-opacity duration-500"
                ></div>
            )}
        </>
    );
}
