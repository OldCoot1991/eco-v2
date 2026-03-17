import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";
import { IconType } from "react-icons";

export interface ContactItem {
    icon: IconType;
    label: { en: string; ru: string };
    value: string | { en: string; ru: string };
    href?: string;
    type: 'link' | 'text';
    color: string;
}

export const contactItems: ContactItem[] = [
    {
        icon: FaPhone,
        label: { en: 'Customer Service', ru: 'Абонентская служба' },
        value: "8 (989) 640-05-23",
        href: 'tel:+79896400523',
        type: 'link',
        color: '#10b981' // Green
    },
    {
        icon: FaShieldAlt,
        label: { en: 'Anti-corruption', ru: 'Противодействие коррупции' },
        value: '8 (909) 488-16-86',
        href: 'tel:+79094881686',
        type: 'link',
        color: '#ef4444' // Red
    },
    {
        icon: FaEnvelope,
        label: { en: 'Email', ru: 'Почта' },
        value: 'info@eco07.ru',
        href: 'mailto:info@eco07.ru',
        type: 'link',
        color: '#3b82f6' // Blue
    },
    {
        icon: FaMapMarkerAlt,
        label: { en: 'Address', ru: 'Адрес' },
        value: { 
            en: '33a/72 Pushkin St.,\nNalchik, KBR, 360051', 
            ru: '360051, КБР, г. Нальчик,\nул. Пушкина, д. 33а/72' 
        },
        type: 'text',
        color: '#f59e0b' // Amber
    }
];

export interface ContactInfoItem {
    labelKey: string;
    valueKey: string;
    isPhone?: boolean;
}

export const contactInfoItems: ContactInfoItem[] = [
    { labelKey: 'postalAddr', valueKey: 'postalAddrValue' },
    { labelKey: 'phone', valueKey: 'phoneValue', isPhone: true }
];
