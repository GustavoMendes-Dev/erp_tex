import React, { useState } from 'react';
import { Modal, Card, Table, Form, Col, Row, Input, Select, DatePicker, Space, Tag, Divider, Statistic } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { PlusOutlined, SaveOutlined } from '@ant-design/icons';
import { Container, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import './sales.css';

import HeaderTop from '../../../components/header';
import NavSecondary from '../../../components/navSecondary';
import ButtonP from '../../../components/button';


function Sales(){

    const { Option } = Select;
    const { Search } = Input;

    const onSearch = value => console.log(value);

    const { RangePicker } = DatePicker;

    const NewSale = () => {
      const [visible, setVisible] = useState(false);

      const newsale = "Venda " + 323;

      return (
        <>
          <ButtonP type="primary" onClick={() => setVisible(true)} className="primary">
            Nova Venda
          </ButtonP>

          <Modal
            title={newsale}
            centered
            visible={visible}
            width={1000}
            style={{ top: 20 }}
            footer={[
              <ButtonP
              key="back"
              onClick={() => setVisible(false)}
              >
                Cancelar
              </ButtonP>,
              <ButtonP
              key="submit"
              type="primary"
              icon={<SaveOutlined />}
              >
                Salvar
              </ButtonP>,
            ]}
          >
            <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input placeholder="Please enter user name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="url"
                  label="Url"
                  rules={[{ required: true, message: 'Please enter url' }]}
                >
                  <Input
                    style={{ width: '100%' }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="Please enter url"
                  />
                </Form.Item> 
              </Col>
            </Row>
            <Divider orientation="left">Itens de Produtos / Serviços</Divider>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="owner"
                  label="Owner"
                  rules={[{ required: true, message: 'Please select an owner' }]}
                >
                  <Select placeholder="Please select an owner">
                    <Option value="xiao">Xiaoxiao Fu</Option>
                    <Option value="mao">Maomao Zhou</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="type"
                  label="Type"
                  rules={[{ required: true, message: 'Please choose the type' }]}
                >
                  <Select placeholder="Please choose the type">
                    <Option value="private">Private</Option>
                    <Option value="public">Public</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Divider orientation="left">Recebimento</Divider>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="approver"
                  label="Approver"
                  rules={[{ required: true, message: 'Please choose the approver' }]}
                >
                  <Select placeholder="Please choose the approver">
                    {/* <Option value="jack">Jack Ma</Option> */}
                    {/* <Option value="tom">Tom Liu</Option> */}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="dateTime"
                  label="DateTime"
                  rules={[{ required: true, message: 'Please choose the dateTime' }]}
                >
                  <DatePicker.RangePicker
                    style={{ width: '100%' }}
                    getPopupContainer={trigger => trigger.parentElement}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: 'please enter url description',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="please enter url description" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
          </Modal>
        </>
      );
    };

    const dataSource = [
        {
          key: '1',
          number: '8998288',
          name: 'Gustavo Mendes',
          total: 32,
          address: '10 Downing Street',
          sales_flow: 'Em Produção',
          tags: [1],
        },
        {
          key: '2',
          number: '883994883',
          name: 'Amanda Angélica',
          total: 42,
          address: '10 Downing Street',
          sales_flow: 'Em Transporte',
          tags: [0],
        },
        {
          key: '2',
          number: '883994883',
          name: 'Amanda Angélica',
          total: 42,
          address: '10 Downing Street',
          sales_flow: 'Em Transporte',
          tags: [0],
        },
        {
          key: '2',
          number: '883994883',
          name: 'Amanda Angélica',
          total: 42,
          address: '10 Downing Street',
          sales_flow: 'Em Transporte',
          tags: [0],
        },
        {
          key: '2',
          number: '883994883',
          name: 'Amanda Angélica',
          total: 42,
          address: '10 Downing Street',
          sales_flow: 'Em Transporte',
          tags: [0],
        },
        {
          key: '2',
          number: '883994883',
          name: 'Amanda Angélica',
          total: 42,
          address: '10 Downing Street',
          sales_flow: 'Em Transporte',
          tags: [0],
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
          title: 'Status',
          dataIndex: 'tags',
          key: 'tags',
          render: tags => (
            <>
              {tags.map(tag => {
                let color = '';
                if (tag >= 1) {
                  color = '#2db7f5';
                  tag = 'Orçamento';
                } else {
                  color = '#3bba6e';
                  tag = 'Venda';
                }
                return (
                  <Tag color={color} key={tags} className='full' >
                    {tag}
                  </Tag>
                );
              })}
            </>
          ),
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
          <Link className="active" to="/sales">Vendas e Orçamentos</Link>
          <Link to="/notas">Notas Fiscais</Link>
        </NavSecondary>
          <Container>
            <Card title="Vendas e Orçamentos">
              <Space>
              <NewSale/>
                <ButtonP type="primary" icon={<PlusOutlined />} className="secondary" >Novo Orçamento</ButtonP>
                <RangePicker />
                <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
              </Space>
            {/* <Row gutter={16} justify="center">
              <Col span={6}>
              <Card>
                <Statistic title="Cancelados" value={112893} />
                </Card>
              </Col>
              <Col span={6}>
              <Card>
                <Statistic title="Orçamentos" value={112893} precision={2} />
                </Card>
              </Col>
              <Col span={6}>
              <Card>
                <Statistic title="Vendas" value={112893} precision={2} />
                </Card>
              </Col>
              <Col span={6}>
              <Card>
                <Statistic title="Previsão" value={112893} precision={2} />
                </Card>
              </Col>
            </Row> */}
              <Table dataSource={dataSource} columns={columns} />
            </Card>
          </Container>
      </React.Fragment>

    )
}

export default Sales;