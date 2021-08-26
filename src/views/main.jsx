import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { Layout, Menu, Breadcrumb } from 'antd';

import 'antd/dist/antd.css';
import '../views/main.css'

import Dashboard from "./dashboard";
import Sales from "./Layout/sales"
import HeaderTop from '../components/header';

const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

function Main(){

    const routes = [
        {
          path: "/manager/painel",
          exact: true,
          main: () => <Dashboard/>
        },
        {
          path: "/manager/sales",
          main: () => <h2><Sales/></h2>
        },
        {
          path: "/manager/shoelaces",
          main: () => <h2>Shoelaces</h2>
        }
      ];

      

    return (

    <React.Fragment>
      <Layout>
      <HeaderTop/>
     
        <Router>

        <Layout>
        <Sider width={300} className="site-layout-background">
          <Menu
            style={{ float: "left" }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1', 'sub2']}
            mode="inline"
          >
              <Menu.ItemGroup key="g1" title="Painel">
                <Menu.Item key="1">
                  <Link to="/manager/painel">Visão Geral</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/manager/sales">Vendas e Orçamentos</Link>
                </Menu.Item>
              </Menu.ItemGroup>

              <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">
                  <Link to="/manager/shoelaces">Shoelaces</Link>
                </Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </Menu.ItemGroup>


              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Financeiro">
                <Menu.Item key="7">Fluxo de Caixa</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
                <SubMenu key="sub0" title="Financeiro">
                  <Menu.Item key="7">Fluxo de Caixa</Menu.Item>
                </SubMenu>
              </SubMenu>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
          </Menu>
          </Sider>
              
              <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                  // className="site-layout-background"
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                  <Switch>
                    {routes.map((route, index) => (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.main />}
                      />
                    ))}
                  </Switch>
                </Content>
                <Footer>Footer</Footer>
              </Layout>
              </Layout>
              
          </Router>
          
        </Layout>
    </React.Fragment>

    );
}

export default Main;