import React from 'react';
import { Container } from 'react-bootstrap';
import { Card, Table, Button } from 'antd';
import { Link } from "react-router-dom";
import { PlusOutlined } from '@ant-design/icons';

import HeaderTop from '../../../components/header';
import NavSecondary from '../../../components/navSecondary';


function Products(){

    const dataSource = [
        {
          key: '1',
          number: '8998288',
          name: 'Gustavo Mendes',
          total: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          number: '883994883',
          name: 'Amanda Angélica',
          total: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: 'Número',
          dataIndex: 'number',
          key: 'number',
        },
        {
          title: 'Nome',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Total',
          dataIndex: 'total',
          key: 'total',
        },
        {
          title: 'Ações',
          dataIndex: 'actions',
          key: 'actions',
        },
      ];

    return (

        <React.Fragment>

        <HeaderTop/> 

        <NavSecondary>
          <Link to="/sales">Produtos</Link>
          <Link to="/notas">Categorias</Link>
        </NavSecondary>

          <Container>
            <Card title="Produtos">
                <Button type="primary" icon={<PlusOutlined />}>Novo Pedido</Button>
                <Table dataSource={dataSource} columns={columns} />
            </Card>
          </Container>
        </React.Fragment>

    )
}

export default Products;