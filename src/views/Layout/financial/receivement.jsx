import React, { useState } from 'react';
import { Modal, Card, Table, Form, Button, Col, Row, Input, Select, DatePicker, Space } from 'antd';
import { PlusOutlined, SaveOutlined } from '@ant-design/icons';

import "./receivement.css"

function Receivement(){

    const { Option } = Select;

    const App = () => {
      const [visible, setVisible] = useState(false);

      return (
        <>
          <Button type="primary" icon={<PlusOutlined />} onClick={() => setVisible(true)} className="success">
            Novo Recebimento
          </Button>
          <Modal
            title="Novo Recebimento"
            centered
            visible={visible}
            width={1000}
            style={{ top: 20 }}
            footer={[
              <Button
              key="back"
              onClick={() => setVisible(false)}
              >
                Cancelar
              </Button>,
              <Button
              key="submit"
              type="primary"
              icon={<SaveOutlined />}
              >
                Salvar
              </Button>,
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

      <Card title="Contas à Receber">
        <Space direction="vertical">
          <App/>
        </Space>
          <Table dataSource={dataSource} columns={columns} />
        
      </Card>

    )
}

export default Receivement;