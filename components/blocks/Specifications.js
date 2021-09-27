import React from 'react';
import MobileBanner from './MobileBanner';
import Specification from './Specification';

const SpecificationsDesktop = () => {

    return (
        <div style={{width: '100%'}}>
            <Specification
                title='​간편한 차계부 입력'
                content={'간단한 입력으로\n주유비부터 운행일지까지\n손쉽게 등록해보세요'}
                imgSrc='/img/specifications/spec1.png'
                imgAlign='right'
                backgroundColor='#fff'
                titleColor='#0275f3'
                contentColor='#333'
            />
            <Specification
                title='​운행기록 다운로드'
                content={'차계부 운행일지를\n국세청 양식에 맞춰\n이메일로 보내드려요'}
                imgSrc='/img/specifications/spec2.png'
                imgAlign='left'
                backgroundColor='#ebf5ff'
                titleColor='#0275f3'
                contentColor='#333'
                hasBanner
            />
            <div className='m_banner'>
                <MobileBanner />
            </div>
            <Specification
                title={'차량 공동관리'}
                content={'차량을 배우자와 함께,\n법인차량을 여러명이 이용시\n차량관리를 함께 할 수 있어요'}
                imgSrc='/img/specifications/spec3.png'
                imgAlign='right'
                backgroundColor='#fff'
                titleColor='#0275f3'
                contentColor='#333'
            />
            <Specification
                title={'​정비 알림 서비스'}
                content={'소모품 교체 시기에 맞춰\n정비알림을 보내줘요'}
                imgSrc='/img/specifications/spec4.png'
                imgAlign='left'
                backgroundColor='#e2f3ff'
                titleColor='#0275f3'
                contentColor='#333'
            />
            <style jsx>
                {`
                    .m_banner{
                        display: none;
                    }

                    @media screen and (max-width: 800px){
                        .m_banner{
                            display: block;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default SpecificationsDesktop;

