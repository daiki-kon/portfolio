import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import IconName from './IconName';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'IconName',
  component: IconName,
} as ComponentMeta<typeof IconName>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconName> = (args) => (
  <IconName {...args} />
);

export const MyIcon = Template.bind({});
MyIcon.args = {
  name: 'Hiroki Kondo',
  iconSrc: '/iconImage.jpeg',
};

export const DanAbramov = Template.bind({});
DanAbramov.args = {
  name: 'Dan Abramov',
  iconSrc: 'https://bit.ly/dan-abramov',
};
