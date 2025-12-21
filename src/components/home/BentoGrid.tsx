"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { useAppSelector } from "@/lib/hooks";

interface GridItemProps {
    title: string;
    description: string;
    link?: string;
    className?: string; // For spanning columns/rows
    bgImage?: string; // Optional background image
    btnVariant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "white";
    borderColors?: string; // String for the conic gradient class
}

const GridItem = ({ title, description, link, className = "", bgImage, btnVariant = "primary", borderColors = "bg-[conic-gradient(from_0deg,transparent_0_340deg,#000_360deg)] dark:bg-[conic-gradient(from_0deg,transparent_0_340deg,#fff_360deg)]" }: GridItemProps) => {
    const theme = useAppSelector((state) => state.theme.mode);

    return (
        <div className={`group relative p-8 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl ${className} 
            ${theme === 'dark'
                ? 'bg-white/5 border border-white/10 shadow-md'
                : 'bg-white/40 border border-stone-300 shadow-sm'
            }
        `}>
            {/* Rotating Border Layer (Masked) - Visible on Hover */}
            <div className="absolute inset-0 rounded-[inherit] pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    padding: '3px',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor'
                }}>
                <div className={`absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-spin-slow ${borderColors}`} />
            </div>

            {bgImage && (
                <div className="absolute inset-0 -z-10 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${bgImage})` }} />
            )}

            {/* Overlay for readability if image exists */}
            {bgImage && <div className={`absolute inset-0 -z-10 ${theme === 'dark' ? 'bg-black/60' : 'bg-white/40'}`} />}

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>{title}</h3>
                    <p className={`text-base md:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-stone-600'}`}>{description}</p>
                </div>

                {link && (
                    <div className="mt-6">
                        <Button href={link} variant={btnVariant} size="sm" icon={<FaArrowRight />}>
                            Подробнее
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default function BentoGrid() {
    return (
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
                {/* Large Featured Item - Eco Theme */}
                <GridItem
                    title="Устойчивое развитие"
                    description="Мы внедряем передовые технологии переработки для сохранения природы региона."
                    link="/about"
                    className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20"
                    borderColors="bg-[conic-gradient(from_0deg,transparent_0_300deg,#22c55e_360deg)]"
                />

                {/* Standard Item - Business Theme (Blue) */}
                <GridItem
                    title="Услуги для бизнеса"
                    description="Комплексные решения по вывозу ТКО для юридических лиц."
                    link="/services"
                    borderColors="bg-[conic-gradient(from_0deg,transparent_0_300deg,#3b82f6_360deg)]"
                />

                {/* Tall Item - News Theme (Orange/Lime) */}
                <GridItem
                    title="Новости"
                    description="Последние события и экологические инициативы."
                    link="/news"
                    className="md:row-span-2 bg-gradient-to-tr from-emerald-50 to-lime-50 dark:from-emerald-900/20 dark:to-lime-900/20"
                    borderColors="bg-[conic-gradient(from_0deg,transparent_0_300deg,#f59e0b_360deg)]"
                />

                {/* Wide Item - Profile Theme (Purple/Pink) */}
                <GridItem
                    title="Личный кабинет"
                    description="Управляйте счетами и услугами онлайн."
                    link="/profile"
                    className="md:col-span-2"
                    borderColors="bg-[conic-gradient(from_0deg,transparent_0_300deg,#ec4899_360deg)]"
                />

                {/* Standard Item - Contacts Theme (Cyan) */}
                <GridItem
                    title="Контакты"
                    description="Свяжитесь с нами любым удобным способом."
                    link="/contacts"
                    className="lg:col-span-1"
                    borderColors="bg-[conic-gradient(from_0deg,transparent_0_300deg,#06b6d4_360deg)]"
                />
            </div>
        </section>
    );
}
