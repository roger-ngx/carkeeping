import React from 'react';

const CompanyInfo = () => {

    return (
        <div className='container'>
            <div className='year-container' style={{marginBottom: 32}}>
                <span className='year'>2021</span>
                <div>
                    <div className='row-container'>
                        <span className='month'>8월</span>
                        <span className='event'>데이터바우처 비즈니스 컨설팅 사업 선정</span>
                    </div>
                    <div className='row-container'>
                        <span className='month'>6월</span>
                        <span className='event'>데이터바우처 지원사업 선정(4,500만원)</span>
                    </div>
                    <div className='row-container'>
                        <span className='month'>4월</span>
                        <span className='event'>기술보증기금 1억원 보증</span>
                    </div>
                    <div className='row-container'>
                        <span className='month'>3월</span>
                        <span className='event last'>ISO 9001 인증 취득</span>
                    </div>
                </div>
            </div>
            <div className='year-container'>
                <span className='year'>2020</span>
                <div>
                    <div className='row-container'>
                        <span className='month'>12월</span>
                        <span className='event'>연구개발 전담부서 설립</span>
                    </div>
                    <div className='row-container'>
                        <span className='month'>7월</span>
                        <span className='event'>데이터바우처 지원사업 선정(4,500만원)</span>
                    </div>
                    <div className='row-container'>
                        <span className='month'>5월</span>
                        <span className='event last'>플라카 설립</span>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .container{
                    padding: 65px 20%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .year-container{
                    display: flex;
                    flex-direction: row
                }

                .row-container{
                    display: flex;
                    flex-direction: row
                }
                .year{
                    margin-right: 20px
                }

                .month{
                    width: 48px;
                    color: #666;
                }
                .event{
                    margin-bottom: 16px;
                    color: #666;
                }

                .last{
                    margin-bottom: 0px;
                }

                @media screen and (max-width: 800px){
                    .container{
                        padding: 24px 12px;
                    }

                    .year-container{
                        display: flex;
                        flex-direction: column;
                    }

                    .year{
                        margin-bottom: 16px;
                    }
                }
            `}
            </style>
        </div>
    )
}

export default CompanyInfo;