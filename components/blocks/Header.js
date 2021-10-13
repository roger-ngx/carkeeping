import React from 'react';

const Header = () => {

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
                        marginRight: 8,
                        textDecoration: 'none',
                        cursor: 'pointer'
                    }}
                    onClick={() => {
                        let specs = document.getElementById("specs");
                        specs && specs.scrollIntoView({ behavior: "smooth", block: "start" });
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
                        marginRight: 8,
                        textDecoration: 'none',
                        cursor: 'pointer'
                    }}
                    onClick={() => {
                        let company_info = document.getElementById("company_info");
                        company_info && company_info.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                >
                    회사  소개
                </a>

                <a
                    style={{
                        color: 'white',
                        fontWeight: 'normal',
                        padding: '8px 12px',
                        textDecoration: 'none',
                        cursor: 'pointer'
                    }}
                    onClick={() => {
                        let contact = document.getElementById("contact");
                        contact && contact.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                >
                    고객센터
                </a>
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
                        width: 80%;
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
