import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SectionTitle from './SectionTitle';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'SectionTitle',
  component: SectionTitle,
} as ComponentMeta<typeof SectionTitle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SectionTitle> = (args) => (
  <SectionTitle {...args} />
);

export const AboutMe = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AboutMe.args = {
  title: 'About Me',
};
