export interface BottomLink {
    href: string;
    labelKey: 'privacy' | 'cookies' | 'terms';
}

export const bottomLinksConfig: BottomLink[] = [
    { href: '/privacy', labelKey: 'privacy' },
    { href: '/cookies', labelKey: 'cookies' },
    { href: '/terms', labelKey: 'terms' }
];
