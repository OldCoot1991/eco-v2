import { useState, useEffect } from 'react';
import { useAppSelector } from "@/lib/hooks";
import { translations, Language } from "@/lib/translations";

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
