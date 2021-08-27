import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { Layout, Menu, Breadcrumb } from 'antd';

import 'antd/dist/antd.css';
import '../views/main.css'

import Dashboard from "./dashboard";
import Sales from "./Layout/sales";
import Products from "./Layout/products";

import HeaderTop from '../components/header';

const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

function Main(){

    const routes = [
        {
          path: "/",
          exact: true,
          main: () => <Dashboard/>
        },
        {
          path: "/vendas-e-orcamentos",
          main: () => <Sales/>
        },
        {
          path: "/notas-fiscais",
          main: () => <h2>Notas</h2>
        },
        {
          path: "/produtos",
          main: () => <Products />
        },
        {
          path: "/categorias",
          main: () => <h2>Categorias</h2>
        }
      ];

      

    return (

    <React.Fragment>
      <Layout>
      <HeaderTop/>
     
        <Router>

        <Layout>
        <Sider width={180} className="site-layout-background">
          <Menu
            style={{ float: "left" }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1', 'sub2']}
            mode="inline"
          >
              <Menu.Item key="1">
                  <Link to="/">Visão Geral</Link>
              </Menu.Item>

              <SubMenu key="sub5" title="Pedidos">
                  <Menu.Item key="0013">
                    <Link to="/vendas-e-orcamentos">Vendas e Orçamentos</Link>
                  </Menu.Item>
                  <Menu.Item key="33333">
                    <Link to="/notas-fiscais">Notas Fiscais</Link>
                  </Menu.Item>
                </SubMenu>

                <SubMenu key="sub3" title="Catálogo">
                  <Menu.Item key="001">
                    <Link to="/produtos">Produtos</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/categorias">Categorias</Link>
                  </Menu.Item>
                </SubMenu>

                <SubMenu key="sub0444" title="Clientes">
                  <Menu.Item key="74">
                    <Link to="/clientes">Lista de Clientes</Link>
                  </Menu.Item>
                  <Menu.Item key="00402">Contas</Menu.Item>
                </SubMenu>

                <SubMenu key="sub0" title="Financeiro">
                  <Menu.Item key="7">Fluxo de Caixa</Menu.Item>
                  <Menu.Item key="0002">Contas</Menu.Item>
                </SubMenu>

                <SubMenu key="sub0333" title="Configurações">
                  <Menu.Item key="73233323">Geral</Menu.Item>
                  <Menu.Item key="732323">Usuários</Menu.Item>
                  <Menu.Item key="00323202">Vendedores</Menu.Item>
                </SubMenu>

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