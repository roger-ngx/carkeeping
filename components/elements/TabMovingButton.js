import React from 'react';
import { Button, Typography, useMediaQuery } from '@material-ui/core';

const TabMovingButton = () => {
    const mobile = useMediaQuery('(max-width: 600px)');

    return (
        <>
        <p className='title'>
            고객센터
        </p>
        <Button
            style={{
                backgroundColor: 'white',
                color: '#1a264d',
                border: 'solid 1px #1a264d',
                width: '100%',
                padding: '12px 24px',
                textTransform: 'none'
            }}
            variant='outlined'
            color='default'
            endIcon={<img src='/icon/icon_arrow@2x.png' style={{height: 8, marginLeft: 48}}/>}
            onClick={(e) => {
                window.location = 'mailto:cs@placa.co.kr';
                e.preventDefault();
            }}
        >
            <Typography
                style={{
                    fontSize: mobile ? 16 : 20,
                    flex: 1,
                    textAlign: 'left',
                    fontWeight: 'bold'
                }}
            >
                cs@placa.co.kr
            </Typography>
        </Button>
        <style jsx>
        {`
            .title{
                font-size: 30px;
                font-weight: bold;
                color: #333;
                margin-top: 0;
                margin-bottom: 32px;
            }

            @media screen and (max-width: 1000px){
                .title{
                    font-size: 20px;
                    font-weight: bold;
                    color: #333;
                    margin-bottom: 22px;
                }
            }
        `}
        </style>
        </>
    )
}

export default TabMovingButton;