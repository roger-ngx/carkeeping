import React, { useContext } from 'react';
import Image from 'next/image';
import { TabsContext } from 'contexts/TabContext';

const ContactInfo = () => {

    const { selectedTab } = useContext(TabsContext);

    const consultantLink = selectedTab === '사장님' ? 'http://pf.kakao.com/_uJMXj/chat' : 'http://pf.kakao.com/_dlirj/chat';

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            className='container'
        >
            <img style={{width: 254}} src='/img/img_consultant@2x.png' />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
                className='content'
            >
                <img src='/icon/icon_double_quote@2x.png' className='img_double_quote' />
                <p className='title'>
                    {selectedTab === '사장님' ? `쑨 배정매니저가 딱 맞는\n알바님을 찾아 배정해 드리겠습니다` : `쑨 배정매니저가 좋은 알바를\n제공해드릴 수 있도록 노력하겠습니다`}
                </p>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    className='contact-container'
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                        className='phone-number'
                    >
                        <p style={{fontSize: 20, color: '#333', marginRight: 8}}>문의번호</p>
                        <p style={{fontSize: 20, fontWeight: 'bold', color: '#4342e9'}}>02-6956-2860</p>
                    </div>
                    <a
                        href={consultantLink}
                        target='_blank'
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            textDecoration: 'none'
                        }}
                        rel="noreferrer"
                    >
                        <p style={{fontSize: 16, color: '#757575'}}>카카오톡으로 문의하기</p>
                        <img src='/icon/icon_thin_arrow@2x.png' style={{height: 16, marginLeft: 4}}/>
                    </a>
                </div>
            </div>
            <style jsx>
            {`
                p{
                    margin: 0
                }

                .container{
                    flex-direction: row;
                    padding: 90px 10%;
                }

                .container > img:first-child {
                    margin-right: 32px
                }

                .contact-container {
                    margin-top: 30px;
                }

                .title{
                    color: #333;
                    font-weight: bold;
                    font-size: 30px;
                    margin: 0;
                    white-space: pre-line;
                }

                .phone-number{
                    margin-right: 42px;
                }

                .img_double_quote {
                    width: 30px;
                    height: 24px;
                    margin-bottom: 6px;
                }

                @media screen and (max-width: 1000px){
                    .contact-container {
                        flex-direction: column;
                        text-align: center;
                    }

                    .container > img:first-child {
                        margin-right: 0;
                    }
                }
                
                @media screen and (max-width: 1000px){
                    .container{
                        flex-direction: column;
                        text-align: center;
                    }

                    .title{
                        font-size: 22px;
                    }

                    .contact-container {
                        margin-left: 0;
                    }
                    
                    .phone-number{
                        margin-right: 0;
                        margin-bottom: 8px;
                    }

                    .img_double_quote {
                        margin-left: auto;
                        margin-right: auto;
                    }
                }
            `}
            </style>
        </div>
    )
}

export default ContactInfo;