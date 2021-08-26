import React from 'react';
import { Statistic, Card, Col, Row } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';


function Dashboard(){

    return (

       <React.Fragment>
             <div className="site-statistic-demo-card">
    <Row gutter={16}>
      <Col span={12}>
        <Card>
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={"R$"}
            // suffix="%"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
  </div>
       </React.Fragment>

    )
}

export default Dashboard;