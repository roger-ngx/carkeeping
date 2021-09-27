import React, { useState, useContext, useRef, useEffect } from 'react';
import StoreButton from 'components/elements/StoreButton';
import { Button, IconButton, Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { TabsContext } from 'contexts/TabContext';

const Header = () => {
    const { selectedTab, setSelectedTab } = useContext(TabsContext);

    const [ menuOpen, setMenuOpen ] = useState(false);
    const menuAnchorRef = useRef(null);

    const onChangeTab = (changeTo) => {
        setSelectedTab(changeTo);
        window.scroll({top: 84, left: 0, behavior: 'smooth'});
    }

    const toggleMenu = () => setMenuOpen(menuOpen => !menuOpen);

    const closeMenu = () => {
        setMenuOpen(false);
    }

    useEffect(() => {
       console.log(menuOpen);
    }, [menuOpen]);

    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '24px 0'
            }}
            className='container'
        >
            <img style={{height: 28}} src='/logo.png'/>

            <div className='nav_bar'>
                <a
                    style={{
                        color: 'white',
                        fontWeight: 'normal',
                        padding: '8px 12px',
                        marginRight: 8
                    }}
                >
                    앱 소개
                </a>

                <a
                    variant='text'
                    style={{
                        color: 'white',
                        fontWeight: 'normal',
                        padding: '8px 12px',
                        marginRight: 8
                    }}  
                    onClick={() => onChangeTab('알바님')}
                >
                    회사  소개
                </a>

                <a
                    style={{
                        color: 'white',
                        fontWeight: 'normal',
                        padding: '8px 12px',
                    }}
                >
                    고객센터
                </a>
            </div>

            <div className='m_nav_bar'>
                <IconButton
                    ref={menuAnchorRef}
                    onClick={toggleMenu}
                >
                    <MoreVertIcon />
                </IconButton>
                <Popper open={menuOpen} anchorEl={menuAnchorRef.current} style={{marginTop: 6}}>
                    <Grow in={menuOpen}>
                        <Paper style={{width: 'calc(100vw - 6px)'}}>
                            {/* <ClickAwayListener onClickAway={closeMenu}> */}
                                <MenuList style={{width: '100%'}}>
                                    <MenuItem
                                        className='menu-item'
                                        onClick={() => {
                                            onChangeTab('사장님')
                                            toggleMenu();
                                        }}
                                    >
                                        사장님 가이드
                                    </MenuItem>
                                    <MenuItem
                                        className='menu-item'
                                        onClick={() => {
                                            onChangeTab('알바님');
                                            toggleMenu();
                                        }}
                                    >
                                        알바님 가이드
                                    </MenuItem>
                                </MenuList>
                            {/* </ClickAwayListener> */}
                        </Paper>
                    </Grow>
                </Popper>
            </div>

            <style jsx>
            {`
                .menu-item{
                    font-size: 18px;
                    color: red;
                }

                .container{
                    width: 60%
                }

                .nav_bar{
                    display: flex;
                    flexDirection: row;
                }

                .m_nav_bar{
                    display: none;
                }

                .employer_tab {
                    
                }

                @media screen and (max-width: 1000px){
                    .container{
                        width: 80%  
                    }

                    .nav_bar{
                        display: none;
                    }

                    .m_nav_bar{
                        display: block;
                        margin-right: -16px;
                    }
                }
            `}
            </style>
        </div>
    )
}

export default Header;
