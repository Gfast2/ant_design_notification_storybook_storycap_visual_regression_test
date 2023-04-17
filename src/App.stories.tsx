import { userEvent, within } from '@storybook/testing-library';
import App from './App';
import {  Meta, StoryObj } from '@storybook/react';

const meta = {
    component: App,
    parameters: {
        componentSubtitle: 'Home page',
        layout: 'fullscreen',
    },
    title: 'Pages/App',
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const loginButton = canvas.getByRole('button', {
          name: /open notification/i,
        });
        userEvent.click(loginButton);
      },
    parameters: {
        screenshot: {
            // click: 'button.ant-btn', // the storycap way to trigger the notification
            delay: 4000 // wait for notification animation finish
        }
    }
}