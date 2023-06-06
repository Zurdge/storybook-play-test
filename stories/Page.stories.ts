import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import { Page } from './Page';

const meta = {
  title: 'Example/Page',
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Example: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = await canvas.findByRole('button')
    await userEvent.click(button)
    await userEvent.click(button)
    await userEvent.click(button)
    // const loginButton = await canvas.getByRole('button', {
    //   name: /Log in/i,
    // });
    // await userEvent.click(loginButton);
  },
};
