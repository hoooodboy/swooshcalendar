import React from 'react';
import styled from 'styled-components';
import user from '../images/user.svg';
import kakaologo from '../images/kakaologo.png';

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
    font-size: 12px;

`;

const Password = styled.input`
    width: 45vw;
    height: 10vh;
    border-radius: 3px;
    border: 1px solid #000;
    outline: none;
    padding: 1vw 2vw;
    margin-top: 1vh;
    font-size: 12px;

`;

const InputWrapper = styled.div`
    margin-top: 15vh;
    display: flex;
    flex-direction: column;
    height: 11vh;
    justify-content: space-between;
`;

const LoginInfo = styled.div`
    width: 45vw;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`;

const LoginInfoContent = styled.div`
    color: #474747;
    font-size: 10px;
    font-weight: 300;
    cursor: pointer;
    margin-top: 1vh;
`;

const KakaoLoginLogo = styled.div`
    background-image: url(${kakaologo});
    background: cover;
    background-size: 100% 100%;
    width: 2vh;
    height: 2vh;
`;
const ButtonWrapper = styled.div`
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 12px;
`;

const KakaoLogin = styled.div`
    width: 45vw;
    height: 3vh;
    border-radius: 3px;
    outline: none;
    padding: 1vw 2vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2vh;
    background-color: #FAED5C;
    font-size: 12px;
    &:active{
        background-color: #d9ce54;
    }
`;

const Nothing = styled.div`
    width: 17px;
    height: 17px;
`;

const LoginButton = styled.div`
    width: 45vw;
    height: 3vh;
    border-radius: 3px;
    outline: none;
    padding: 1vw 2vw;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a1919;
    color: #fff;
    font-size: 12px;

`;


const Red = () => {
    return (
        <ProfileBlock>
            <Profile/>
            <InputWrapper>
                <Id placeholder="Email or Usename" />
                <Password placeholder="Password" />
            </InputWrapper>
            <LoginInfo>
                <LoginInfoContent>
                    로그인 유지하기    
                </LoginInfoContent>
                <LoginInfoContent>
                    아이디/비밀번호 찾기
                </LoginInfoContent>
            </LoginInfo>
            <ButtonWrapper>
                <LoginButton>
                    로그인
                </LoginButton>
                <KakaoLogin>
                    <KakaoLoginLogo />
                    카카오계정 로그인 
                    <Nothing/>
                </KakaoLogin>
               
            </ButtonWrapper>

        </ProfileBlock>
    );
}

export default Red;