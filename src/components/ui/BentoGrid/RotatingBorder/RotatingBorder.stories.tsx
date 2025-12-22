import type { Meta, StoryObj } from '@storybook/react';
import { RotatingBorder } from './RotatingBorder';

const meta = {
  title: 'UI/BentoGrid/RotatingBorder',
  component: RotatingBorder,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ 
        width: '300px', 
        height: '200px', 
        position: 'relative',
        background: 'rgba(0,0,0,0.05)',
        borderRadius: '24px'
      }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RotatingBorder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Green: Story = {
  args: {
    color: 'conic-gradient(from 0deg, transparent 0 300deg, #22c55e 360deg)',
  },
};

export const Blue: Story = {
  args: {
    color: 'conic-gradient(from 0deg, transparent 0 300deg, #3b82f6 360deg)',
  },
};

export const Pink: Story = {
  args: {
    color: 'conic-gradient(from 0deg, transparent 0 300deg, #ec4899 360deg)',
  },
};


