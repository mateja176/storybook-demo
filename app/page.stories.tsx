import Page from '@/app/page';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Page',
  component: Page,
} as Meta<{}>;

type Story = StoryObj<typeof Page>;

export const Default: Story = { args: {} };
