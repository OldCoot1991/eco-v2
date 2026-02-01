import { IconType } from 'react-icons';
import { FaVk, FaTelegram } from 'react-icons/fa';

export interface SocialLink {
    icon: IconType;
    label: string;
    href: string;
    className: string;
}

export const socialLinks: SocialLink[] = [
    {
        icon: FaVk,
        label: 'VK',
        href: '#',
        className: 'vk'
    },
    {
        icon: FaTelegram,
        label: 'Telegram',
        href: '#',
        className: 'telegram'
    }
];
