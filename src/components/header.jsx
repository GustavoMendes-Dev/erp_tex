import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import LogoBlue from '../assets/images/tex-manager-blue.svg';
import { Layout, Menu } from 'antd';

import '../components/header.css'

const { Header } = Layout;

function HeaderTop() {

    return (

    <React.Fragment>
         <Header className="header fixed">
             <Image src={LogoBlue} fluid  width="112" height="auto"/>
        </Header>
    </React.Fragment>

    )
};

export default HeaderTop;