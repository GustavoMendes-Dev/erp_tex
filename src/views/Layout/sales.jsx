import React from 'react';
import { Card, Table } from 'antd';
import { Button } from "react-bootstrap"
import { PlusOutlined } from '@ant-design/icons';


function Dashboard(){

    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];

    return (

        <Card title="Vendas e Orçamentos">
            <Button variant="primary"><PlusOutlined />Novo Pedido</Button>
            <Table dataSource={dataSource} columns={columns} />

      </Card>

    )
}

export default Dashboard;