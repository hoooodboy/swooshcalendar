import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import BackArrow from '../images/back.png';


const HeaderBlock = styled.div`
    width: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    height: 60px;
    top: 0;
`;

const Back = styled.div`
    width: 25px;
    height: 20px;
    margin-left: 5vw;
    background-image: url(${BackArrow});
    cursor: pointer;
    background: contain;
    background-size: 100% 100%;
`;


const Today = styled.div`
    width: 90px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration-line: none;   
    font-size: 24px;
    font-weight: 600;
`;

const Nothing = styled.div`
    width: 25px;
    height: 20px;
    margin-Right: 5vw;
`;


const Header = () => {
    return (
        <>
            <HeaderBlock>
                <Link to="/">
                    <Back/>
                </Link>
                <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
                    <Today>
                        투데이
                    </Today>
                </Link>
                <Nothing/>
            </HeaderBlock>
        </>
    );
};

export default Header;