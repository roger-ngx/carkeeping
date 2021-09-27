import React, { useState, useContext, useEffect } from 'react';
import { TabsContext } from 'contexts/TabContext';
import StoreButton from 'components/elements/StoreButton';
import { Typography } from '@material-ui/core';
import Image from 'next/image';
import { STORE_LINK } from 'constants/initValues';

const Intro = () => {

    const { selectedTab } = useContext(TabsContext);
    const [ storeLinkMobile, setStoreLinkMobile ] = useState();

    const getOS = () => {
        if(!window) return;

        var userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;

        if (macosPlatforms.indexOf(platform) !== -1) {
          os = 'Mac OS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
          os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
          os = 'Windows';
        } else if (/Android/.test(userAgent)) {
          os = 'Android';
        } else if (!os && /Linux/.test(platform)) {
          os = 'Linux';
        }

        return os;
    }

    useEffect(() => {
        const os = getOS();
        if(os === 'iOS'){
            setStoreLinkMobile(STORE_LINK.appStore);
        }else if(os === 'Android'){
            setStoreLinkMobile(STORE_LINK.googlePlay);
        }
    }, []);

    return (
        <div
            style={{
                width: '100%'
            }}
            className='container'
        >
            <div
                style={{width: '100%', position: 'relative'}}
            >
                <img
                    src='/img/headerbackground.png'
                    style={{width: '100%'}}
                />
                <div
                    style={{
                        position: 'absolute',
                        left: '60vw',
                        top: '40%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start'
                    }}
                >
                    <img
                        src='/img/headerintro.png'
                        style={{width: '20vw', height: 'auto'}}
                    />
                    <div className='store-button'>
                        <StoreButton
                            storeName='App Store'
                            storeLink={STORE_LINK.appStore}
                        />
                        <div style={{width: 12}}/>
                        <StoreButton
                            storeName='Google Play'
                            storeLink={STORE_LINK.googlePlay}
                        />
                    </div>

                </div>
                <div className='m_store-button'>
                    <StoreButton
                        storeLink={storeLinkMobile}
                    />
                </div>
            </div>

            <style jsx>
                {`
                    .intro_img{
                        height: 369px;
                        max-width: 100%;
                        margin: auto;
                    }

                    .m_intro_img{
                        display: none;
                    }

                    .container{
                        text-align: center
                    }

                    .title{
                        font-size: 50px;
                        line-height: 1.15;
                        color: #333;
                    }

                    .sub-title{
                        textAlign: center;
                        font-size: 18px;
                        margin: 0;
                        color: #333;
                        font-weight: 400;
                    }

                    .store-button{
                        display: flex;
                        flex-direction: row;
                        margin-top: 20px;
                        width: 20vw;
                    }

                    .m_store-button{
                        display: none;
                    }

                    @media screen and (max-width: 1000px){
                        .intro_img{
                            display: none
                        }

                        .m_intro_img{
                            display: block;
                            width: 100%;
                        }

                        .container{
                            text-align: left
                        }

                        .title{
                            font-size: 30px;
                            textAlign: left;
                        }

                        .sub-title{
                            textAlign: left;
                            font-size: 17px;
                            margin: 0;
                        }

                        .store-button{
                            display: none;
                        }
                        
                        .m_store-button{
                            display: block;
                            margin: 10px;
                            margin-bottom: 40px;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default Intro;