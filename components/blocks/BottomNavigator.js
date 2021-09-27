import React from 'react';
import { Button, Typography } from '@material-ui/core';

const BottomNavigator = ({text, btnText, backgroundColor, buttonColor}) => {

    return(
        <div
            style={{
                width: '100%',
                textAlign: 'center',
                padding: '68px 0',
                backgroundColor
            }}
        >
            <Typography
                style={{
                    marginBottom: 22,
                    fontSize: 30,
                    color: '#333',
                    fontWeight: 'bold'
                }}
            >
                {text}
            </Typography>
            <Button
                variant='contained'
                color='primary'
                style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    backgroundColor: buttonColor,
                    padding: '16px 60px',
                    borderRadius: 8
                }}
            >
                {btnText}
            </Button>
        </div>
    )
}

export default BottomNavigator;