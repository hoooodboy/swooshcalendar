import React from 'react';
import styled from 'styled-components';
import logo from '../images/nike-logo-2.png'


const HeaderBox = styled.div`
    width: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
`;

const Nothing = styled.div`
    width: 25px;
    height: 20px;
    margin-left: 5vw;
`;

const Hamburger = styled.div`
    width: 25px;
    height: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin-right: 5vw;
`;

const Line = styled.div`
    width: 100%;
    border-top: 2px solid #000;
    border-radius: 12px;
    background-color: #000;
`;

const Logo = styled.div`
    background-image: url(${logo});
    width: 90px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center center;
`;


const Header = ({children}) => {
    return (
        <HeaderBox>
            <Nothing />
            <Logo />
            <Hamburger>
                <Line />
                <Line />
                <Line />
            </Hamburger>
        </HeaderBox>
    );
};

export default Header;