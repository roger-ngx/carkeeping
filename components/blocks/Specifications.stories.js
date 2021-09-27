import React from 'react';
import Specifications from './Specifications';

export default {
    title: 'Specifications',
    component: Specifications
};

const Template = args => (<Specifications {...args} />);

export const Private = Template.bind();