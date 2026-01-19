import { useAppSelector } from "@/lib/hooks";
import { translations, Language } from "@/lib/translations";

export const useTranslation = () => {
    const language = useAppSelector((state) => state.language.current) as Language;
    
    // Return the translations for the current language
    // Fallback to 'ru' if language is somehow invalid (though typed strict)
    return {
        t: translations[language] || translations.ru,
        lang: language
    };
};
