import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Row, Col, Tabs, Form, Input, Icon, Button } from 'antd';

const { TabPane } = Tabs;

const { Content } = Layout;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 },
    },
};

export class Profile extends Component {
    static propTypes = {
        prop: PropTypes
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Content>
                <Row style={{ width: '100%', marginTop: '50px' }}>
                    <Col span={8}></Col>
                    <Col span={16}>
                        <Tabs className="tabUser" type="card">
                            <TabPane className="infoAccount" tab="Thông Tin Tài Khoản" key="1">

                                <Form className="formUser" {...formItemLayout} onSubmit={this.handleSubmit} >
                                    <Form.Item label="Họ Tên">
                                        {getFieldDecorator('Name', {
                                            rules: [

                                                {
                                                    required: true,
                                                    message: 'Please input your name!',
                                                },
                                            ],
                                        })(<Input />)}
                                    </Form.Item>
                                    <Form.Item label="Số Điện Thoại">
                                        {getFieldDecorator('Phone', {
                                            rules: [{ required: true, message: 'Please input your phone number!' }],
                                        })(<Input type="number" />)}
                                    </Form.Item>
                                    <Form.Item label="Mã Xác Thực">
                                        {getFieldDecorator('Code', {
                                            rules: [{ required: true, message: 'Please input your code!' }],
                                        })(<Input type="number" />)}
                                    </Form.Item>
                                    <Form.Item label="Email">
                                        {getFieldDecorator('Email', {
                                            rules: [

                                                {
                                                    type: 'email',
                                                    message: 'The input is not valid E-mail!',
                                                },
                                                {
                                                    required: true,
                                                    message: 'Please input your E-mail!',
                                                },

                                            ],
                                        })(<Input />)}
                                    </Form.Item>
                                </Form>
                            </TabPane>
                            <TabPane className="changePassword" tab=" Thay Đổi Mật Khẩu " key="2">

                            </TabPane>

                        </Tabs>
                    </Col>
                </Row>
            </Content>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {

}
const WrappedOfferForm = Form.create({ name: 'Profile' })(Profile);
export default connect(mapStateToProps, mapDispatchToProps)(WrappedOfferForm)
