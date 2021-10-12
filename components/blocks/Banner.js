import React from 'react';

const Banner = () => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        }}
    >
        <img src='/icon/gift.png' />
        <div style={{marginLeft: 8}}>
            <p style={{fontSize: 10, margin: 0}}>차집사로 운행일지 작성하고</p>
            <p style={{fontSize: 16, fontWeight: 'bold', margin: 0}}><span style={{color: '#0076f5'}}>세제혜택</span> 받으세요!</p>
        </div>
    </div>
)

export default Banner;