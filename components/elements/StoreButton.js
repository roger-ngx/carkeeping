import React from 'react';
import { Button } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const StoreButton = ({ storeName, storeLink }) => {

    return (
        <>
        {
        storeName ?
        <a>
            <img style={{width: '100%', height: 'auto'}} src={storeName === 'App Store'?'/img/appstoredownload.png':'/img/googleplaydownload.png'} />
        </a>
        :
        <Button
            style={{
                width: '100%',
                backgroundColor: '#0076f5',
                color: 'white',
                borderRadius: 2,
                padding: '16px 24px',
                fontSize: 16
            }}
            variant='contained'
            color='default'
            onClick={() => window.open(storeLink)}
        >
            앱 다운로드
        </Button>
        }
        <style jsx>
        {`
            img {
                height: 22px;
            }
        `}
        </style>
        </>
    )
}

export default StoreButton;