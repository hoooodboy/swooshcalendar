import React from 'react';
import Template from '../components/Template';
import Header from '../Today-components/Header';
import Time from '../Today-components/Time';
import Shoes from '../home-components/Shoes';

const Login = () => {
    return (
        <>
            <Template>
                <Header />
                <Time />
                <Shoes/>
            </Template>
        </>
    );
}

export default Login;