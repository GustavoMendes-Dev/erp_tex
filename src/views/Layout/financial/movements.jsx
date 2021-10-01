import React from 'react';
import { Card, Table, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


function Movements(){

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

        <Card title="Fluxo de Caixa">
            <Button type="primary" icon={<PlusOutlined />}>Novo Pedido</Button>
            <Table dataSource={dataSource} columns={columns} />

      </Card>

    )
}

export default Movements;