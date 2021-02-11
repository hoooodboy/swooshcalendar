import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import styled, {css} from 'styled-components';
import facebook from '../images/facebook.png';
import instagram from '../images/instalogo.png';
import phone from '../images/phone.png';
import email from '../images/email.png';

const Hamburger = styled.div`
    width: 25px;
    height: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin-right: 5vw;
`;

const Line = styled.div`
    width: 100%;
    border-top: 2px solid #000;
    border-radius: 12px;
    background-color: #000;
`;

const SliderMenuSpot = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    display: none;
    position: fixed;
    flex-direction: row-reverse;
    top: 0;
    ${props => props.open && css`
        display:flex;
    `}

`;

const SliderMenuBlockRight = styled.div`
    width: 70%;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const MenubarTitle = styled.div`
    margin-top: 5vh;
    width: 80%;
    font-size: 20px;
    text-decoration: none;
`; 

const MenubarContent = styled.div`
    color: #141414;
    font-size: 20px;
    margin-top: 5px;
    cursor: pointer;
    text-decoration: none;
`; 

const Contact = styled.div`
    margin-top: 12vh;
    width: 80%;
    height: 30%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: space-between;
    justify-content: space-between;
`;

const Instagram = styled.div`
    width: 100px;
    height: 100px;
    cursor: pointer;
    background-image: url(${instagram});
    background: contain;
    background-size: 100% 100%;
`;

const Facebook = styled.div`
    width: 100px;
    height: 100px;
    cursor: pointer;
    background-image: url(${facebook});
    background: cover;
    background-size: 90% 90%;
    background-repeat: no-repeat;
    background-position: center center;
`;

const Phone = styled.div`
    width: 100px;
    height: 100px;
    cursor: pointer;
    background-image: url(${phone});
    background: contain;
    background-size: 100% 100%;
`;

const Email = styled.div`
    width: 100px;
    height: 100px;
    cursor: pointer;
    background-image: url(${email});
    background: cover;
    background-size: 90% 90%;
    background-repeat: no-repeat;
    background-position: center center;
`;

const Login = styled.button`
    margin-top: 12vh;
    padding: 10px 20px;
    background: none;
    outline: none;
    border: 1px solid gray;
    border-radius: 5px;
    cursor: pointer;
`;

const SliderMenuBlockLeft = styled.div`
    width: 30%;
    height: 100%;
    background: #000;
    opacity: 0.2;
`;


const SliderMenu = () => {
    const [open, setOpen] = useState(false);
    const onToggle = () => {
        setOpen(!open)
    }

    return (
        <>
        <Hamburger onClick={onToggle}>
            <Line />
            <Line />
            <Line />
        </Hamburger>
        <SliderMenuSpot open={open}>
            <SliderMenuBlockRight>
                <MenubarTitle>
                    <Link style={{textDecoration: 'none'}}>
                        <MenubarContent style={{fontWeight:700}}>런칭 캘린더</MenubarContent>
                    </Link>
                    <Link to="/today" style={{textDecoration: 'none', fontWeight:400}}>
                        <MenubarContent>투데이</MenubarContent>
                    </Link>
                    <Link to="/event" style={{textDecoration: 'none', fontWeight:400}}>
                        <MenubarContent>이벤트</MenubarContent>
                    </Link>
                </MenubarTitle>
                <Contact>
                    <a href="https://www.instagram.com/"><Instagram/></a>          
                    <a href="https://www.facebook.com/"><Facebook/></a>          
                    <Phone/>
                    <Email/>
                </Contact>
                <Link to="/login"> 
                    <Login>
                        Login
                    </Login>
                </Link>
            </SliderMenuBlockRight>
            <SliderMenuBlockLeft open={open} onClick={onToggle}/>
        </SliderMenuSpot>
        </>
    );
}

export default SliderMenu;