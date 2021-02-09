import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import BackArrow from '../images/back.png';


const HeaderBlock = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    height: 60px;
    top: 0;
    background-color: none;
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

const Header = () => {
    return (
        <>
            <HeaderBlock>
                <Link to="/">
                    <Back/>
                </Link>

            </HeaderBlock>
        </>
    );
};

export default Header;