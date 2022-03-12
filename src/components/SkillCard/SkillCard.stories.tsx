import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SkillCard from './SkillCard';
import { SiTerraform } from 'react-icons/si';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'SkillCard',
  component: SkillCard,
} as ComponentMeta<typeof SkillCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SkillCard> = (args) => (
  <SkillCard {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  skillName: 'Terraform',
  icon: SiTerraform,
  description:
    'AWSのリソースをコード化するために使用。 Module構成、state分離等のリファクタリングも経験あり。',
};