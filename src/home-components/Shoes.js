import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';


const ShoesBlock = styled.div`
    margin: 100px 0;
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
    background-color: #F5F5F5;

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
    margin-bottom: 15px;
    color: #000;
    margin-top: 10px;
`;

const ShoeImg = styled.img`
    width: 300px;
    height: 200px;
    object-fit: cover;

`;

const Wrapper = styled.div`
        width: 100%auto;
        height: 100vh; 
        display: flex;
        justify-content: center;
        align-items: center;
`;

function Shoes() {
    const [shoes, setShoes] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchShoes = async () => {
            try {
                setError(null);
                setShoes(null);
                setLoading(true);
                const response = await axios.get('https://raw.githubusercontent.com/junhoyeo/NIKE-THE-DRAW-Calendar/main/app/src/mockups/sneakers.json');
                setShoes(response.data);
                } catch (e) {
                    setError(e);
                }
                setLoading(false);
            };
            fetchShoes();
    }, []);

    const nike = "https://www.nike.com"

    if (loading) return(
        <Wrapper>
            Loading...
        </Wrapper>
    );
    if (error) return <Wrapper>Error!</Wrapper>;
    if (!shoes) return null;
    return (
 
          <>
        {shoes.map(shoe => (
          <a href={nike+shoe.href} key={shoe.id}  style={{textDecoration:'none'}}>
            <ShoesBlock>
                <Date>
                    {shoe.calendar[0].split(' : ')[1].split(' ')[0]}
                </Date>
                <ShoeImg src={shoe.image} alt={shoe.title} title={shoe.title}>
                </ShoeImg>
                <Model>
                    {shoe.title}
                </Model>
            </ShoesBlock>
          </a>
        ))}
        </>
    );

}

export default Shoes;

