import React from 'react';
import styled from 'styled-components';

const TimeBlock = styled.div`
    border-top: 1px solid #666; 
    width: 100%;
    display: flex;
    background: #fff;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 22px;
    font-weight: 600;
    padding: 20px 0;
`;

const today = new Date();

const dateString = today.toLocaleDateString('ko-KR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

const Header = () => {

    return (
        <>
            <TimeBlock>
                {dateString}
            </TimeBlock>
        </>
    );
};

export default Header;