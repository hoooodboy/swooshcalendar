import React from 'react';
import styled from 'styled-components';
import banner_1 from '../images/banner_1.png';
import banner_2 from '../images/banner_2.png';
import banner_3 from '../images/banner_3.png';
import banner_4 from '../images/banner_4.png';


const BannerBlock = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    flex-direction: column;
`;

const Banner_1 = styled.div`
    width: 100%;
    height: 20vh;
    background-image: url(${banner_1});
    cursor: pointer;
    background: cover;
`;

const Banner_2 = styled.div`
    width: 100%;
    height: 20vh;
    background-image: url(${banner_2});
    cursor: pointer;
    background: cover;
`;
const Banner_3 = styled.div`
    width: 100%;
    height: 20vh;
    background-image: url(${banner_3});
    cursor: pointer;
    background: cover;
`;
const Banner_4 = styled.div`
    width: 100%;
    height: 20vh;
    background-image: url(${banner_4});
    cursor: pointer;
    background: cover;
`;

const Banner = () => {
    return (
        <BannerBlock>
            <Banner_1>
                배너1
            </Banner_1>
            <Banner_2>
                배너2
            </Banner_2>
            <Banner_3>
                배너3
            </Banner_3>
            <Banner_4>
                배너4
            </Banner_4>
        </BannerBlock>
    );
}

export default Banner;