import React from 'react';
import { Image } from 'react-bootstrap';
import LogoBlue from '../assets/images/tex-manager-blue.svg';
import { Layout, Menu, Avatar, Row, Col, Space } from 'antd';

import { UserOutlined } from '@ant-design/icons';

import '../components/header.css'
import SearchTop from './searchTop';

const { Header } = Layout;

function HeaderTop() {

    return (

    <React.Fragment>
         <Header className="header fixed">             
             <Row>
                <Col flex={1}>
                    <Image src={LogoBlue} fluid  width="112" height="auto"/>
                </Col>
                <Col flex={1}>
                    <p>A Fábrica, Confecção Têxtil.</p>
                </Col>
                             
                <Col flex={9} className="searchTop">
                                 <SearchTop />
                </Col>
                <Col flex={1} className="icon-Header">
                   <Space>
                    <Avatar size="small" icon={<UserOutlined />} />
                    <Avatar size="small" icon={<UserOutlined />} />
                    <Avatar size="small" icon={<UserOutlined />} />
                   </Space>
                </Col>
            </Row>
        </Header>
    </React.Fragment>

    )
};

export default HeaderTop;