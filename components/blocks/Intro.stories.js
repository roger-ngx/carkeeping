import React from 'react';
import Intro from './Intro';

export default {
    title: 'Page Intro',
    component: Intro
};

const Template = args => (<Intro {...args} />);

export const Primary = Template.bind();