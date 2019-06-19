import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Form, Row, Col, Select, AutoComplete, Input, DatePicker, Button, Icon } from 'antd';
import { connect } from 'react-redux'
import './formOffer.scss'
import * as effectAction from '../../../state/Action/effectAction';
const { MonthPicker, RangePicker } = DatePicker;
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const { TextArea } = Input;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 19 },
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
const rangeConfig = {
    rules: [{ type: 'array', required: true, message: 'Please select time!' }],
};

export class offerForm extends Component {

    constructor(props) {
        super(props)
        this.textInput = React.createRef();

        this.state = {

        }
    }
    static propTypes = {
    }
    changeStateOfBackGroundAndFormOffer = () => {
        this.props.onTurnOnOrOffForFormOfferAndBackgroundBody();
    }
    checkEsc = (e) => {

        console.log("OK");

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (

            <div className="formOffer">
                <Icon type="close" className="inconFormOffer" onClick={() => this.changeStateOfBackGroundAndFormOffer()} />
                <h3
                    style={{

                        backgroundColor: 'rgb(234, 234, 234)',
                        margin: '0',
                        padding: '8px',
                        fontSize: '14px',
                    }}
                > TẠO ĐỀ XUẤT MỚI</h3>
                <Form
                    style={{
                        padding: '0px 10px 0px',
                        backgroundColor: 'white',
                        paddingTop: '15px',
                        paddingBottom: '15px'
                    }}
                    {...formItemLayout}
                    onSubmit={this.handleSubmit}
                >                        
                    <Form.Item style={{ width: '100%', fontWeight: '600' }} label='Tên Đề Xuất' hasFeedback>
                        {getFieldDecorator('nameOffer', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your name offers!',
                                }
                            ],
                        })(<Input type='text' placeholder="Tên Đề Xuất" />)}
                    </Form.Item>
                    <Form.Item style={{ width: '100%', fontWeight: '600' }} label="Lí Do" hasFeedback>
                        {getFieldDecorator('reason', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                }
                            ],
                        })(<TextArea rows={4} placeholder="Lý Do Nghỉ" />)}
                    </Form.Item>
                    <Form.Item label="Ngày Nghỉ" style={{ fontWeight: '600' }}
                        hasFeedback
                    >
                        {getFieldDecorator('dayOff', rangeConfig)(<RangePicker />)}
                    </Form.Item>
                    <Form.Item label="Người Xử Lý" hasFeedback

                        style={{ width: '100%', fontWeight: '600' }}
                    >
                        {getFieldDecorator('selectHandlePosition', {
                            rules: [{ required: true, message: 'Please select your country!' }],
                        })(
                            <Select placeholder="Lựa Chọn Người ">
                                <Option value="HR">HR</Option>
                                <Option value="Director">Giám Đốc</Option>
                                <Option value="Manager">Quản Lý</Option>
                                <Option value="SA">SA</Option>
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item label="Nghỉ Phép" hasFeedback

                        style={{ width: '100%', fontWeight: '600' }}
                    >
                        {getFieldDecorator('typeOfDayOff', {
                            rules: [{ required: true, message: 'Please select your country!' }],
                        })(
                            <Select placeholder="Loại Ngày Nghỉ">
                                <Option value="HR">Nghỉ Có Phép</Option>
                                <Option value="Director">Nghỉ Không Phép</Option>
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            xs: { span: 24 },
                            sm: { span: 24 },
                        }}
                    >
                        <Row>
                            <Col xs={{ span: 24 }} sm={{ span: 11, offset: 1 }}  >
                                <Button style={{ width: '100%' }} type="default" onClick={() => this.changeStateOfBackGroundAndFormOffer()} >
                                    Huỷ Bỏ
                                </Button>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 11, offset: 1 }} >
                                <Button type='reset' style={{
                                    width: '100%',
                                    color: '#fff',
                                    backgroundColor: '#5cb85c',
                                    borderColor: '#4cae4c'
                                }} type="primary" >
                                    Gửi Đề Xuất
                            </Button>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
const WrappedOfferForm = Form.create({ name: 'Offer' })(offerForm);
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onTurnOnOrOffForFormOfferAndBackgroundBody: () => {
            dispatch(effectAction.turnOnOrOffForFormOfferAndBackgroundBody())
        }

    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        stateOfBackgroundAndFormOffer: state.effect.backGroundBodyAndFormOffer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WrappedOfferForm)