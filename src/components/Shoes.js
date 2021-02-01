import React from 'react';
import styled from 'styled-components';
import Shoe from './Shoe';

const ShoeWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;

const Shoes = () => {
    return (
        <ShoeWrapper>
            <Shoe /> 
            <Shoe />      
            <Shoe />      
            <Shoe /> 
            <Shoe />      
            <Shoe />  
        </ShoeWrapper>
    );
};

export default Shoes;