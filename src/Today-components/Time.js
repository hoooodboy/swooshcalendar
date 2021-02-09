import React from 'react';
import styled from 'styled-components';
import Clock from 'react-live-clock';

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

const ClockBlock = styled.div`
    width: 90%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin-right: 8vw;
    color: #999;
    font-weight: 300;
    font-size: 15px;
    position: absolute;
    margin: 0 auto;
    margin-top: 20px;
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
                <ClockBlock>
                    <Clock format={'HH:mm:ss'} ticking />
                </ClockBlock>
            </TimeBlock>

        </>
    );
};

export default Header;