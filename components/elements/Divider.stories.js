import React from 'react';
import Divider from './Divider';


export default {
    title: 'Tab Header',
    component: Divider
};

const Template = args => (<Divider {...args} />);

export const Private = Template.bind();