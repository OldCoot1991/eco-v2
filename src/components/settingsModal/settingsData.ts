import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export interface SettingsSection {
    label: { en: string; ru: string };
    description: { en: string; ru: string };
    component: React.ComponentType;
}

export const settingsSections: SettingsSection[] = [
    {
        label: { en: 'Appearance', ru: 'Тема оформления' },
        description: { 
            en: 'Switch between light and dark mode', 
            ru: 'Выберите светлую или темную тему интерфейса' 
        },
        component: ThemeToggle
    },
    {
        label: { en: 'Language', ru: 'Язык' },
        description: { 
            en: 'Select your preferred language', 
            ru: 'Выберите предпочтительный язык интерфейса' 
        },
        component: LanguageSwitcher
    }
];
