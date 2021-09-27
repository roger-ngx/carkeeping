import React from 'react';
import BottomNavigator from './BottomNavigator';

export default {
    title: 'Bottom Navigator',
    component: BottomNavigator
};

const Template = args => (<BottomNavigator {...args} />);

export const Employer = Template.bind();
Employer.args = {
    text: '알바님으로 할동하고 싶으신가요?',
    btnText: '알바님 가이드 보기',
    backgroundColor: '#edeaff',
    buttonColor: '#5740e0'
};

export const Employee = Template.bind();
Employee.args = {
    text: '알바님으로 할동하고 싶으신가요?',
    btnText: '알바님 가이드 보기',
    backgroundColor: '#e5f4e6',
    buttonColor: '#65af64'
};