import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CertificationSection from './CertificationSection';
import { badgeImages, certifications } from '../../data/Certifications';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Section/CertificationSection',
  component: CertificationSection,
} as ComponentMeta<typeof CertificationSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CertificationSection> = (args) => (
  <CertificationSection {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  badgeImages: badgeImages,
  certifications: certifications,
};
