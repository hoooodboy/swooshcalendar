import React from 'react';
import styled from 'styled-components';
import user from '../images/user.svg';

const ProfileBlock = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Profile = styled.div`
    margin-top: 25vh;
    width: 100px;
    height: 100px;
    background-image: url(${user});
    cursor: pointer;
    background: contain;
    background-size: 100% 100%;

`;

const Id = styled.input`
    width:45vw;
    height: 10vh;
    border-radius: 3px;
    border: 1px solid #000;
    outline: none;
    padding: 1vw 2vw;
`;

const Password = styled.input`
    width: 45vw;
    height: 10vh;
    border-radius: 3px;
    border: 1px solid #000;
    outline: none;
    padding: 1vw 2vw;
    margin-top: 1vh;
`;

const InputWrapper = styled.div`
    margin-top: 15vh;
    display: flex;
    flex-direction: column;
    height: 10vh;
    justify-content: space-between;
`;

const ButtonWrapper= styled.div`
    width: 45vw;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`;

const LoginButton = styled.button`
    width: 20vw;
    border-radius: 3px;
    outline: none;
    padding: 1vw 2vw;
    margin-top: 1vh;
    background-color: #D93732;
    color: #fff;
    font-size: 13px;
    border: none;
    &:active{
        background-color: #ab0707;
    }
`;

const SinginButton = styled.button`
    width: 20vw;
    border-radius: 3px;
    border: 1px solid #000;
    outline: none;
    padding: 1vw 2vw;
    margin-top: 1vh;
    background-color: #D93732;
    color: #fff;
    font-size: 13px;
    border: none;
    &:active{
        background-color: #ab0707;
    }
`;
const Red = () => {
    return (
        <ProfileBlock>
            <Profile/>
            <InputWrapper>
                <Id placeholder="Email or Usename" />
                <Password placeholder="Password" />
            </InputWrapper>
            <ButtonWrapper>
                <SinginButton>Sign in</SinginButton>
                <LoginButton>Longin</LoginButton>
            </ButtonWrapper>
        </ProfileBlock>
    );
}

export default Red;