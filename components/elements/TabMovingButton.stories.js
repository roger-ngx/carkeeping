import React from 'react';
import TabMovingButton from './TabMovingButton';

export default {
    title: 'Tab Moving',
    component: TabMovingButton
};

const Template = args => (<TabMovingButton {...args} />);

export const Primary = Template.bind();