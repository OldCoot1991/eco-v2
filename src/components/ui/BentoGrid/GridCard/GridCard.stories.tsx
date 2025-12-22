import type { Meta, StoryObj } from '@storybook/react';
import { GridCard } from './GridCard';

const meta = {
    title: 'UI/BentoGrid/GridCard',
    component: GridCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ width: '400px', padding: '20px' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof GridCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Услуги для бизнеса',
        description: 'Комплексные решения по вывозу ТКО для юридических лиц.',
        link: '/services',
        borderGradient: 'conic-gradient(from 0deg, transparent 0 300deg, #3b82f6 360deg)',
    },
};

export const EcoTheme: Story = {
    args: {
        title: 'Устойчивое развитие',
        description: 'Мы внедряем передовые технологии переработки.',
        link: '/about',
        variantClass: 'eco',
        borderGradient: 'conic-gradient(from 0deg, transparent 0 300deg, #22c55e 360deg)',
    },
};

export const NewsTheme: Story = {
    args: {
        title: 'Новости',
        description: 'Последние события и экологические инициативы.',
        link: '/news',
        variantClass: 'news',
        borderGradient: 'conic-gradient(from 0deg, transparent 0 300deg, #f59e0b 360deg)',
    },
};

export const WithImage: Story = {
    args: {
        title: 'Личный кабинет',
        description: 'Управляйте счетами и услугами онлайн.',
        link: '/profile',
        bgImage: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070',
        borderGradient: 'conic-gradient(from 0deg, transparent 0 300deg, #ec4899 360deg)',
    },
};
