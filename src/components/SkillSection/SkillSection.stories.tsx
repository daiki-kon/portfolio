import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SkillSection from './SkillSection';
import { skills } from '../../data/Skills';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Section/SkillSection',
  component: SkillSection,
} as ComponentMeta<typeof SkillSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SkillSection> = (args) => (
  <SkillSection {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  skills: skills,
};
