import React from 'react';
import { Statistic, Card, Col, Row } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

import HeaderTop from '../components/header';


function Dashboard(){

    const { Meta } = Card;

    return (

       <React.Fragment>
          <HeaderTop/>
            <h1>Boa noite, Gustavo.</h1>
            <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={6}>
                <Card title="Total de Vendas" extra={232}>
                  <Meta title="R$ 19.099,09" description={<a href="/financeiro/vendas-e-orcamentos">Ver mais</a>} />
                </Card>
              </Col>
              <Col span={6}>
                <Card title="Total de Orçamentos" bordered={false}>
                  Card content
                </Card>
              </Col>
              <Col span={6}>
                <Card title="Contas à Receber" bordered={false}>
                  Card content
                </Card>
              </Col>
              <Col span={6}>
                <Card title="Contas à Pagar" bordered={false}>
                  Card content
                </Card>
              </Col>
            </Row>
          </div>
       </React.Fragment>

    )
}

export default Dashboard;