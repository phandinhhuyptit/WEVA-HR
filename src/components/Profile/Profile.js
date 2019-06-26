import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Row, Col, Tabs, Form, Input, Icon, Button, } from 'antd';
import './Profile.scss';

import UploadAvatar from '../Profile/Upload/Upload';

const { TabPane } = Tabs;
const { Search } = Input;
const { Content } = Layout;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
        lg: { span: 7 }
    },
    wrapperCol: {
        xs: { span: 12 },
        sm: { span: 15 },
        lg: { span: 12 }
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

export class Profile extends Component {
    static propTypes = {
        prop: PropTypes
    }

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('newPassword')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Content>
                <Row style={{ width: '100%', margin: '25px 25px 0 25px' }}>

                    <h2 style={{ marginBottom : '30px', fontSize : '23px', color : 'gray'}}> Hồ Sơ Của Tôi</h2>    

                    <Col xs={24} sm={24} md={24} lg={8} xl={8} span={8}>
                        <UploadAvatar/>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={16} xl={16} span={16}>
                        <Tabs  className="tabUser" type="card">
                            <TabPane  className="infoAccount" tab="Thông Tin Tài Khoản" key="1">
                                <Form className="formUser" {...formItemLayout} onSubmit={this.handleSubmit} >
                                    <Form.Item className="Name" label="Họ Tên">
                                        {getFieldDecorator('Name', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Please input your name!',
                                                },
                                            ],
                                        })(<Input placeholder="Họ Tên" />)}
                                    </Form.Item>
                                    <Form.Item className="Phone" label="Số Điện Thoại">
                                        {getFieldDecorator('Phone', {
                                            rules: [{ required: true, message: 'Please input your phone number!' }],
                                        })(<Search style={{
                                            fontSize: '11px'
                                        }}
                                            placeholder="Hãy Nhập SĐT"
                                            enterButton="Gửi Mã Xác Thực"
                                            size="large"
                                            type="number"

                                        />)}
                                    </Form.Item>
                                    <Form.Item className="Code" label="Mã Xác Thực">
                                        {getFieldDecorator('Code', {
                                            rules: [{ required: true, message: 'Please input your code!' }],
                                        })(<Input type="number" placeholder="Nhập Mã Xác Thực" />)}
                                    </Form.Item>
                                    <Form.Item className="Email" label="Email">
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
                                        })(<Input placeholder="Nhập Email" />)}
                                    </Form.Item>
                                    <Form.Item {...tailFormItemLayout}>
                                        <Button type="primary" htmlType="submit">
                                            Cập Nhật
                                         </Button>
                                    </Form.Item>
                                </Form>
                            </TabPane>
                            <TabPane style={{ color : 'rgb(92, 184, 92)!important'}}   className="changePassword" tab=" Thay Đổi Mật Khẩu " key="2">
                                <Form className="formChangePassword" {...formItemLayout} onSubmit={this.handleSubmit}>

                                    <Form.Item label="Mật Khẩu Cũ" hasFeedback>
                                        {getFieldDecorator('oldPassword', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Please input your password!',
                                                }
                                            ]
                                        })(<Input.Password />)}
                                    </Form.Item>

                                    <Form.Item label="Mật Khẩu Mới" hasFeedback>
                                        {getFieldDecorator('newPassword', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Please input your password!',
                                                }
                                            ]
                                        })(<Input.Password />)}
                                    </Form.Item>
                                    <Form.Item label="Xác Nhận Mật Khẩu" hasFeedback>
                                        {getFieldDecorator('confirmPassword', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Please confirm your password!',
                                                },
                                                {
                                                    validator: this.compareToFirstPassword,
                                                },
                                            ]
                                        })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                                    </Form.Item>
                                    <Form.Item {...tailFormItemLayout}>
                                        <Button type="primary" htmlType="submit">
                                            Cập Nhật
                                         </Button>
                                    </Form.Item>
                                </Form>
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
