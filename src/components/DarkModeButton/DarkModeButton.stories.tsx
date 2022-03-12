import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DarkModeButton from './DarkModeButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DarkModeButton',
  component: DarkModeButton,
} as ComponentMeta<typeof DarkModeButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DarkModeButton> = (args) => (
  <DarkModeButton />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
