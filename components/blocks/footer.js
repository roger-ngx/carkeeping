import React from 'react';
import { Divider, Typography } from '@material-ui/core';
import TabMovingButton from 'components/elements/TabMovingButton';
import { STORE_LINK, PERSONAL_INFO_AGREEMENT, SERVICE_AGREEMENT } from 'constants/initValues';

const Footer = () => {

    return (
        <div className='footer'>
            <div className='container'>
                <div>
                    <TabMovingButton />
                </div>
                <div className='store_download'>
                    <p className='title'>
                        차집사 앱 다운로드
                    </p>
                    <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                        <a style={{flex: 1, marginRight: 24}} target='_blank' rel="noreferrer" href={STORE_LINK.googlePlay}>
                            <img style={{maxWidth: '100%', maxHeight: 56}} src='./google-play-logo.png' />
                        </a>
                        <a  style={{flex: 1, marginRight: 0}} target='_blank' rel="noreferrer" href={STORE_LINK.appStore}>
                            <img style={{maxWidth: '100%', maxHeight: 56}} src='./apple-store-logo.png' />
                        </a>
                    </div>
                </div>
            </div>
            <Divider />
            <div className='company_info'>
                <img src='/logoblack.png' />
                <p style={{color: '#838383', marginTop: 24, lineHeight: 1.67}}>
                    <p style={{margin: 0}}>(주)플라카   |   대표이사: 장중호   |   사업자등록번호: 444-81-01722   |   서울시 영등포구 국제금융로2길 37(S-TRENUE) 2703호</p>
                    <p style={{margin: 0}}>호스팅 사업자: Amazon Web Services(AWS)   |   고객센터: cs@placa.co.kr</p>
                </p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <a target='_blank' rel="noreferrer" href={SERVICE_AGREEMENT}>​서비스 이용약관</a>
                    <a target='_blank' rel="noreferrer" href={PERSONAL_INFO_AGREEMENT}>개인정보 처리방침</a>
                </div>
            </div>
            <style jsx>
            {`
                a {
                    margin-right: 32px;
                    color: #838383;
                    text-decoration: underline;
                    cursor: pointer
                }

                .footer{
                    width: 100%;
                    padding: 90px 10%;
                    background-color: #f5f6f7;
                }

                .container{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin-bottom: 80px
                }

                .title{
                    font-size: 30px;
                    font-weight: bold;
                    color: #333;
                    margin-top: 0;
                    margin-bottom: 32px;
                }

                .company_info{
                    margin-top: 60px;
                    font-size: 16px;
                }

                @media screen and (max-width: 1000px){
                    .container{
                        display: flex;
                        flex-direction: column;
                        margin-bottom: 70px
                    }

                    .footer{
                        padding: 70px 32px;
                        background-color: #f5f6f7;
                    }

                    .store_download{
                        margin-top: 50px;
                    }

                    .title{
                        font-size: 20px;
                        font-weight: bold;
                        color: #333;
                        margin-bottom: 22px;
                    }

                    .company_info{
                        font-size: 14px;
                        margin-top: 70px
                    }
                }
            `}
            </style>
        </div>
    )
}

export default Footer;