import React from 'react';
import StoreButton from './StoreButton';

export default {
    title: 'Store Button',
    component: StoreButton
};

const Template =  (args) => (<StoreButton {...args} />);

export const AppleStore = Template.bind();
AppleStore.args ={
    storeName: 'Apple Store',
    storeLink: 'https://apps.apple.com/kr/app/%EB%8B%A8%EA%B8%B0%EC%95%8C%EB%B0%94-%EC%91%A8-%EC%A2%8B%EC%9D%80%EC%95%8C%EB%B0%94%EB%A7%8C-%EB%AA%A8%EC%95%98%EB%8B%A4/id1441937310'
}

export const GooglePlay = Template.bind();
GooglePlay.args = {
    storeName: 'Google Play',
    storeLink: 'https://play.google.com/store/apps/details?id=com.sooooon.android'
}

export const StoreDownload = Template.bind();
StoreDownload.args = {
    storeLink: 'https://play.google.com/store/apps/details?id=com.sooooon.android'
}