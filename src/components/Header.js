import React from 'react';
import styled from 'styled-components';
import logo from '../images/nike-logo-2.png'
import SliderMenu from '../home-components/SliderMenu';


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


const Header = () => {
    return (
        <>
            <HeaderBox>
                <Nothing />
                <Logo />
                <SliderMenu/>
            </HeaderBox>
        </>
    );
};

export default Header;