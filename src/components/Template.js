import React from 'react';
import styled from 'styled-components';

const TemplateBlock = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background: #f5f6f5;

    margin: 0 auto; 

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const Template = ({ children }) => {
  return <TemplateBlock>{children}</TemplateBlock>;
}

export default Template;