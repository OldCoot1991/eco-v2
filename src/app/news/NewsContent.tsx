"use client";

import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useTranslation } from "@/shared/lib/hooks/useTranslation";
import { SectionTitle } from "@/shared/ui/SectionTitle/SectionTitle";
import { NewsCard } from "@/features/news/ui/NewsCard";
import styles from "../page.module.css";
import newsStyles from "./NewsContent.module.css";
import { FaSearch, FaChevronDown } from 'react-icons/fa';

interface NewsItem {
    id: string;
    date_created: string;
    title: string;
    description: string;
    cover: string;
    translatedTitle?: string;
    translatedDescription?: string;
}

interface CustomDropdownProps {
    label: string;
    value: string;
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
    placeholder: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ value, options, onChange, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedOption = options.find(opt => opt.value === value);

    return (
        <div className={newsStyles.dropdownWrapper} ref={dropdownRef}>
            <div 
                className={`${newsStyles.dropdownTrigger} ${isOpen ? newsStyles.dropdownTriggerActive : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selectedOption ? selectedOption.label : placeholder}</span>
                <FaChevronDown className={`${newsStyles.chevron} ${isOpen ? newsStyles.chevronOpen : ''}`} />
            </div>
            {isOpen && (
                <div className={newsStyles.dropdownMenu}>
                    <div 
                        className={`${newsStyles.dropdownItem} ${value === '' ? newsStyles.dropdownItemSelected : ''}`}
                        onClick={() => { onChange(''); setIsOpen(false); }}
                    >
                        {placeholder}
                    </div>
                    {options.map(opt => (
                        <div 
                            key={opt.value} 
                            className={`${newsStyles.dropdownItem} ${value === opt.value ? newsStyles.dropdownItemSelected : ''}`}
                            onClick={() => { onChange(opt.value); setIsOpen(false); }}
                        >
                            {opt.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default function NewsContent() {
    const { t, lang } = useTranslation();
    const newsLabels = t.news;
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [translating, setTranslating] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [yearFilter, setYearFilter] = useState<string>('');
    const [monthFilter, setMonthFilter] = useState<string>('');
    const [dayFilter, setDayFilter] = useState<string>('');

    const fetchNews = async () => {
        try {
            const response = await fetch("https://ecologistika.com/api/items/news?sort=-date_created&limit=100");
            const result = await response.json();
            setNews(result.data);
        } catch (error) {
            console.error("Error fetching news:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    // Auto-translation logic
    useEffect(() => {
        if (lang === 'en' && news.length > 0) {
            const translateNews = async () => {
                const needsTranslation = news.filter(item => !item.translatedTitle);
                if (needsTranslation.length === 0) return;

                setTranslating(true);
                const updatedNews = [...news];

                for (const item of updatedNews) {
                    if (item.translatedTitle) continue;

                    try {
                        const [titleRes, descRes] = await Promise.all([
                            fetch('/api/translate', {
                                method: 'POST',
                                body: JSON.stringify({ text: item.title, target: 'en' })
                            }),
                            fetch('/api/translate', {
                                method: 'POST',
                                body: JSON.stringify({ text: item.description, target: 'en' })
                            })
                        ]);

                        const titleData = await titleRes.json();
                        const descData = await descRes.json();

                        item.translatedTitle = titleData.translatedText;
                        item.translatedDescription = descData.translatedText;
                    } catch (err) {
                        console.error("Translation fail:", err);
                    }
                }

                setNews([...updatedNews]);
                setTranslating(false);
            };

            translateNews();
        }
    }, [lang, news]);

    const yearsOptions = useMemo(() => {
        const allYears = news.map(item => new Date(item.date_created).getFullYear().toString());
        const uniqueYears = Array.from(new Set(allYears)).sort((a, b) => b.localeCompare(a));
        return uniqueYears.map(year => ({ value: year, label: year }));
    }, [news]);

    const monthsOptions = [
        { value: '01', label: lang === 'ru' ? 'Январь' : 'January' },
        { value: '02', label: lang === 'ru' ? 'Февраль' : 'February' },
        { value: '03', label: lang === 'ru' ? 'Март' : 'March' },
        { value: '04', label: lang === 'ru' ? 'Апрель' : 'April' },
        { value: '05', label: lang === 'ru' ? 'Май' : 'May' },
        { value: '06', label: lang === 'ru' ? 'Июнь' : 'June' },
        { value: '07', label: lang === 'ru' ? 'Июль' : 'July' },
        { value: '08', label: lang === 'ru' ? 'Август' : 'August' },
        { value: '09', label: lang === 'ru' ? 'Сентябрь' : 'September' },
        { value: '10', label: lang === 'ru' ? 'Октябрь' : 'October' },
        { value: '11', label: lang === 'ru' ? 'Ноябрь' : 'November' },
        { value: '12', label: lang === 'ru' ? 'Декабрь' : 'December' },
    ];

    const daysOptions = useMemo(() => {
        const list = [];
        for (let i = 1; i <= 31; i++) {
            const val = i.toString().padStart(2, '0');
            list.push({ value: val, label: val });
        }
        return list;
    }, []);

    const filteredNews = useMemo(() => {
        return news.filter(item => {
            const titleToSearch = lang === 'en' && item.translatedTitle ? item.translatedTitle : item.title;
            const matchesSearch = titleToSearch.toLowerCase().includes(searchQuery.toLowerCase());
            
            const date = new Date(item.date_created);
            const matchesYear = !yearFilter || date.getFullYear().toString() === yearFilter;
            const matchesMonth = !monthFilter || (date.getMonth() + 1).toString().padStart(2, '0') === monthFilter;
            const matchesDay = !dayFilter || date.getDate().toString().padStart(2, '0') === dayFilter;
            
            return matchesSearch && matchesYear && matchesMonth && matchesDay;
        });
    }, [news, searchQuery, yearFilter, monthFilter, dayFilter, lang]);

    const handleReset = () => {
        setSearchQuery('');
        setYearFilter('');
        setMonthFilter('');
        setDayFilter('');
    };

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <div className={styles.pageContainer}>
            <SectionTitle 
                title={t.pages.news.title} 
                subtitle={t.pages.news.subtitle}
            />
            
            <div className={styles.pageContent}>
                <div className={newsStyles.controls}>
                    <div className={newsStyles.searchWrapper}>
                        <FaSearch className={newsStyles.searchIcon} />
                        <input 
                            type="text" 
                            placeholder={newsLabels.searchPlaceholder} 
                            className={newsStyles.searchInput}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    
                    <div className={newsStyles.filters}>
                        <CustomDropdown 
                            label={newsLabels.filterDay}
                            placeholder={newsLabels.filterDay}
                            value={dayFilter}
                            options={daysOptions}
                            onChange={setDayFilter}
                        />

                        <CustomDropdown 
                            label={newsLabels.filterMonth}
                            placeholder={newsLabels.filterMonth}
                            value={monthFilter}
                            options={monthsOptions}
                            onChange={setMonthFilter}
                        />

                        <CustomDropdown 
                            label={newsLabels.filterYear}
                            placeholder={newsLabels.filterYear}
                            value={yearFilter}
                            options={yearsOptions}
                            onChange={setYearFilter}
                        />

                        {(searchQuery || yearFilter || monthFilter || dayFilter) && (
                            <button 
                                className={newsStyles.resetButton}
                                onClick={handleReset}
                            >
                                {newsLabels.filterReset}
                            </button>
                        )}
                    </div>
                </div>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '6rem', color: 'var(--primary)', fontWeight: 700 }}>
                        <div className="loading-spinner" style={{ marginBottom: '1rem' }}></div>
                        {newsLabels.loading}
                    </div>
                ) : (
                    <>
                        {translating && (
                            <div className={newsStyles.translationLoader}>
                                <div className={newsStyles.spinner}></div>
                                <span>{newsLabels.translating}</span>
                            </div>
                        )}
                        {filteredNews.length > 0 ? (
                            <div className={newsStyles.grid}>
                                {filteredNews.map((item) => (
                                    <NewsCard 
                                        key={item.id}
                                        id={item.id}
                                        date={formatDate(item.date_created)}
                                        title={lang === 'en' && item.translatedTitle ? item.translatedTitle : item.title}
                                        description={lang === 'en' && item.translatedDescription ? item.translatedDescription : item.description}
                                        image={item.cover}
                                        readMoreText={newsLabels.readMore}
                                        loading={lang === 'en' && !item.translatedTitle}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className={newsStyles.noResults}>
                                <div className={newsStyles.noResultsTitle}>
                                    {newsLabels.noResults}
                                </div>
                                <div className={newsStyles.noResultsText}>
                                    {newsLabels.tryChangingFilters}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
