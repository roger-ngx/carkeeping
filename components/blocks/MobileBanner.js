import React from 'react';

const MobileBanner = () => (
    <div style={{position: 'relative'}}>
        <img style={{width: '100%'}} src='/img/m_banner.png' />
        <div
            style={{
                position: 'absolute',
                top: '20%',
                right: 0, left: 0,
                width: '100%'
            }}
        >
            <div style={{textAlign: 'center', color: 'white', fontSize: 16}}>차집사로 운행일지 작성하고</div>
            <div style={{textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold'}}>세제혜택 받으세요!</div>
        </div>
    </div>
)

export default MobileBanner;