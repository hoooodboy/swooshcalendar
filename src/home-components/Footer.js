import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import arrow from '../images/free-icon-left-arrow-860790.png';

const FooterBlock = styled.div`
    width: 100%;
    height: 160px;
    background-color: #1a1919;
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

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

`;

const BuisnessInfoBlock = styled.div`
    margin-top: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85px;
    cursor: pointer;
`;

const BuisnessInfo = styled.div`
    font-size: 11px;
`;

const Arrow = styled.div`
    background-image: url(${arrow});
    background-size: cover;
    width: 12px;
    height: 12px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: center center;
    ${props => props.open && css`
        transform: rotate(180deg);
    `}
`;

const CompanyNumBlock = styled.div`
    width: 100%;
    height: 160px;
    background-color: #1a1919;
    color: #f2f2f2;
    display: none;
    justify-content: center;
    align-items: center;
    ${props => props.open && css`
        display: flex;
        width: 100%;
        height: 160px;
    `}

`;

const CompanyInfoBlock =styled.div `
    width: 93%;
    height: 90%;
    margin: 0 auto;
`;

const CompanyInfo =styled.div `
    font-size: 12px;
`;

const Caution = styled.div`
    font-size: 12px;
    margin-top: 20px;
`;

const Footer = () => {
    const [open, setOpen] = useState(false);
    const onToggle = () => {
        setOpen(!open)
    }
    return (
        <>
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
            <Wrapper>
                <FooterNavigator>
                    <FooterNavigatorContent>이용약관</FooterNavigatorContent>
                    <FooterNavigatorContent>개인정보 처리 방침</FooterNavigatorContent>
                </FooterNavigator>
                <BuisnessInfoBlock open={open} onClick={onToggle} >
                    <BuisnessInfo>사업자정보</BuisnessInfo>
                    <Arrow open={open}/>
                </BuisnessInfoBlock>
            </Wrapper>
            </FooterBlockWrapper>
        </FooterBlock>
        <CompanyNumBlock open={open}>
            <CompanyInfoBlock>
                <CompanyInfo>대표 · 박중현</CompanyInfo>
                <CompanyInfo>사업자등록번호 · 885-03-01279</CompanyInfo>
                <CompanyInfo>통신판매업 · 2019-경기용인-0083호</CompanyInfo>
                <CompanyInfo>사업장소재지 · 경기도 용인시 처인구 한터로 152번길 45</CompanyInfo>
                <CompanyInfo>호스팅소재지 · 서울시 강남구 논현로 508, GS타워 12층</CompanyInfo>
                <Caution>
                    본 서비스는 보다 편리하게 Nike Draw를 볼 수 있는 캘린더이므로
                    개별고객이 구매하지 못한 상품에 대해서는 보상을 하지 않습니다.
                </Caution>
            </CompanyInfoBlock>
        </CompanyNumBlock>
        </>
    );
}

export default Footer;