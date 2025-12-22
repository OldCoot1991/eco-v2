import type { Meta, StoryObj } from '@storybook/react';
import { HeroBackground } from './HeroBackground';

const meta = {
    title: 'UI/Banner/HeroBackground',
    component: HeroBackground,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '100%', height: '400px', position: 'relative' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof HeroBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
    args: {
        isActive: true,
        gradient: 'linear-gradient(135deg, #fafaf9 0%, #ecfdf5 50%, #ffffff 100%)',
        darkGradient: 'linear-gradient(135deg, #0c0a09 0%, rgba(2, 44, 34, 0.2) 50%, #000000 100%)',
    },
};
