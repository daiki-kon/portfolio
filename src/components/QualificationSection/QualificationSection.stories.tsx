import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import QualificationSection from './QualificationSection';
import { badgeImages, qualifications } from '../../data/Qualifications';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Section/QualificationSection',
  component: QualificationSection,
} as ComponentMeta<typeof QualificationSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof QualificationSection> = (args) => (
  <QualificationSection {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  badgeImages: badgeImages,
  qualifications: qualifications,
};
