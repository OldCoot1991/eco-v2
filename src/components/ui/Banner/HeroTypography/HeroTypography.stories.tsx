import type { Meta, StoryObj } from '@storybook/react';
import { HeroTitle, HeroDescription } from './HeroTypography';

const meta = {
    title: 'UI/Banner/HeroTypography',
    // Since we export multiple, we can default to one or just group them.
    // We'll use HeroTitle as the main component for the meta, but show both in stories.
    component: HeroTitle,
    tags: ['autodocs'],
} satisfies Meta<typeof HeroTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
    args: {
        children: 'Ecologistics Future',
    },
};

export const Description: StoryObj<typeof HeroDescription> = {
    render: (args) => <HeroDescription {...args} />,
    args: {
        children: 'Мы внедряем передовые технологии для сохранения экологии вашего региона. Профессиональный и ответственный подход к окружающей среде.',
    },
};
