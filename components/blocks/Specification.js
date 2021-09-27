import React from 'react';
import Banner from './Banner';

const Specification = ({title, content, titleColor, contentColor, imgSrc, imgAlign, backgroundColor, hasBanner}) => {

    return (
        <div
            style={{
                backgroundColor,
                height: '100%'
            }}

            className='container'
        >
            <div className='inner_container'>
                <div style={{display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <div>
                        <p className='title'>{title}</p>
                        <p className='text_content'>{content}</p>
                        {
                            hasBanner &&
                            <div className='banner'>
                                <Banner />
                            </div>
                        }
                    </div>
                </div>
                <div style={{display: 'flex', flex: 1, justifyContent: 'center'}}>
                    <img className='img_container' src={imgSrc} />
                </div>
            </div>
            <style jsx>
            {`
                .container{
                    padding: 65px 20%
                }

                .img_container{
                    max-width: 100%;
                }

                .banner{
                    display: block;
                }

                .inner_container{
                    display: flex;
                    flex-direction: ${imgAlign === 'right' ? 'row' : 'row-reverse'};
                    justify-content: space-between;
                    white-space: pre-line;
                    line-height: 1.4;
                    align-items: center;
                }

                .title{
                    font-size: 14px;
                    color: ${titleColor};
                    margin-bottom: 44px;
                }
                
                .text_content{
                    font-weight: bold;
                    font-size: 20px;
                    color: ${contentColor};
                }

                @media screen and (max-width: 800px){
                    .container{
                        padding: 24px 12px
                    }

                    .banner{
                        display: none;
                    }

                    .title{
                        text-align: center;
                        margin-bottom: 4px;
                    }
                    
                    .text_content{
                        margin-bottom: 18px;
                        text-align: center;
                        line-height: 22px;
                    }

                    .inner_container{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        white-space: pre-line;
                        line-height: 1.4;
                    }
                    
                    .img_container{
                        margin-right: 0;
                        max-width: 100%
                    }
                }
            `}
            </style>
        </div>
    )
}

export default Specification;