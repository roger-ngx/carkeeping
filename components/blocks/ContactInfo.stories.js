import React from 'react';

import ContactInfo from './ContactInfo';

export default {
    title: 'Contact Info',
    component: ContactInfo
};

const Template = args => (<ContactInfo {...args} />);

export const Primary = Template.bind();