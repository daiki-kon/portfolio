import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AboutMeSection from './AboutMeSection';
import {
  iconImageSrc,
  introduction,
  myName,
  snsAccounts,
} from '../../data/AboutMe';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Section/AboutMeSection',
  component: AboutMeSection,
} as ComponentMeta<typeof AboutMeSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AboutMeSection> = (args) => (
  <AboutMeSection {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  introduction: introduction,
  name: myName,
  iconImageSrc: iconImageSrc,
  snsAccounts: snsAccounts,
};
