import React from 'react';
import Header from './Header';

export default {
    title: 'Page Header',
    component: Header
};

const Template = (args) => (<Header {...args} />);

export const Primary = Template.bind();