"use client";

import { useState, useEffect } from 'react';
import { useAppSelector } from "@/shared/lib/hooks";
import { translations, Language } from "@/shared/lib/translations";

export const useTranslation = () => {
    const language = useAppSelector((state) => state.language.current) as Language;
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentLanguage = mounted ? language : 'ru';

    return {
        t: translations[currentLanguage] || translations.ru,
        lang: currentLanguage
    };
};
