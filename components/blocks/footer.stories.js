import React from 'react';
import Footer from './footer';

export default {
    title: 'Page Footer',
    component: Footer
};

const Template = args => (<Footer {...args} />);

export const Private = Template.bind();