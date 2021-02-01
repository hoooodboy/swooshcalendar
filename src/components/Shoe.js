import React from 'react';
import styled from 'styled-components';
import shoe_img from '../images/shoe_img.png';

const ShoesBlock = styled.div`

    margin: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 29px;
    background: #fff;
    box-shadow:  6px 6px 12px #bfc0bf,
                -6px -6px 12px #ffffff;
    &:hover{
        transition:all 200ms linear;
        cursor: pointer;
        box-shadow:  8px 8px 18px #bfc0bf,
                -8px -8px 18px #ffffff; 
    }
    transition:all 200ms linear;

`;

const Date = styled.div`
    font-size: 30px;
    font-weight: 600;
    background-color: #D93732;
    color: #fff;
    width: 100%; 
    display: flex;
    padding: 20px 0 15px 0; 
    justify-content: center;
    border-top-left-radius: 29px;
    border-top-right-radius: 29px;

`;

const Model = styled.div`
    font-size: 18px;
    margin: 0 auto;
    margin-bottom: 25px;
`;

const ShoeImg = styled.div`
    background-image: url(${shoe_img});
    width: 300px;
    height: 200px;
    background-size: cover;
    background-position: center center;
`;



const Shoes = () =>{
    return (
        <ShoesBlock>
            <Date>
                2 / 1
            </Date>
            <ShoeImg />
            <Model>
                Nike x Travis Scott SB Dunk Low
            </Model>
        </ShoesBlock>
    );
};

export default Shoes;