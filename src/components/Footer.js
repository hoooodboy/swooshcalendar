import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.div`
    width: 100%;
    height: 160px;
    background-color: #151819;
    color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FooterBlockWrapper = styled.div`
    width: 93%;
    height: 90%;
    margin: 0 auto;
`;

const NikeDraw = styled.div`
    margin-top: 7px;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
`;

const ContactWrapper = styled.div`
    display: flex;
    margin-top: 5px;
`;

const Contact = styled.div`
    width: 60px;
    font-size: 12px;
`;

const ContactDetail = styled.div`
    font-size: 12px;
`;

const FooterNavigator = styled.div`
    width: 350px;   
    display: flex;
    margin-top: 13px;
`;

const FooterNavigatorContent = styled.div`
    font-size: 11px;
    margin-right: 15px;
    cursor: pointer;
`;

const Footer = () => {
    return (
        <FooterBlock>
            <FooterBlockWrapper>
            <NikeDraw>Nike Draw</NikeDraw>
            <ContactWrapper>
                <Contact>대표전화</Contact>
                <ContactDetail>010-7510-6589</ContactDetail>
            </ContactWrapper>
            <ContactWrapper>
                <Contact>이메일</Contact>
                <ContactDetail>littlepark0107@naver.com</ContactDetail>
            </ContactWrapper>
            <FooterNavigator>
                <FooterNavigatorContent>공지사항</FooterNavigatorContent>
                <FooterNavigatorContent>발매안내</FooterNavigatorContent>
                <FooterNavigatorContent>서비스 소개</FooterNavigatorContent>
                <FooterNavigatorContent>자주 묻는 질문</FooterNavigatorContent>
            </FooterNavigator>
            <FooterNavigator>
                <FooterNavigatorContent>이용약관</FooterNavigatorContent>
                <FooterNavigatorContent>개인정보 처리 방침</FooterNavigatorContent>
            </FooterNavigator>
            </FooterBlockWrapper>
        </FooterBlock>
    );
}

export default Footer;