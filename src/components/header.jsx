import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import LogoBlue from '../assets/images/tex-manager-blue.svg';
import { Layout, Menu } from 'antd';

import '../components/header.css'
import SearchTop from './searchTop';

const { Header } = Layout;

function HeaderTop() {

    return (

    <React.Fragment>
         <Header className="header fixed">
             <Image src={LogoBlue} fluid  width="112" height="auto"/>
             {/* <p>A Fábrica, Confecção Têxtil.</p> */}
             {/* <SearchTop /> */}
        </Header>
    </React.Fragment>

    )
};

export default HeaderTop;