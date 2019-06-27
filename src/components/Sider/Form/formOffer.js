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
        stateFormOffer: PropTypes.bool.isRequired,
        onChangeStateForm: PropTypes.func
    }
    handleChangeStateForm = () => {
        // Turn On Or Turn Off BackGround And Form Offer     

        this.props.onChangeStateForm();
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="form-offer">
                <Icon type="close" className="icon-form-offer" onClick={() => this.handleChangeStateForm()} />
                <h3 className="title-offer">
                    TẠO ĐỀ XUẤT MỚI
                </h3>
                <Form className="form"
                    {...formItemLayout}
                    onSubmit={this.handleSubmit}
                >
                    <Form.Item className="name-offer" label='Tên Đề Xuất' hasFeedback>
                        {getFieldDecorator('nameOffer', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your name offers!',
                                }
                            ],
                        })(<Input type='text' placeholder="Tên Đề Xuất" />)}
                    </Form.Item>
                    <Form.Item className="reason" label="Lí Do" hasFeedback>
                        {getFieldDecorator('reason', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                }
                            ],
                        })(<TextArea rows={4} placeholder="Lý Do Nghỉ" />)}
                    </Form.Item>
                    <Form.Item className="day-off" label="Ngày Nghỉ"
                        hasFeedback
                    >
                        {getFieldDecorator('dayOff', rangeConfig)(<RangePicker />)}
                    </Form.Item>
                    <Form.Item className="select-position" label="Người Xử Lý" hasFeedback
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
                    <Form.Item className="type-day-off" label="Nghỉ Phép" hasFeedback
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
                    <Form.Item className="button-offer"
                        wrapperCol={{
                            xs: { span: 24 },
                            sm: { span: 24 },
                        }}
                    >
                        <Row>
                            <Col xs={{ span: 24 }} sm={{ span: 11, offset: 1 }}  >
                                <Button style={{ width: '100%' }} type="default" onClick={() => this.handleChangeStateForm()} >
                                    Huỷ Bỏ
                                </Button>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 11, offset: 1 }} >
                                <Button className="sent-offers" type='reset' type="primary" >
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
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeStateForm: () => {
            dispatch(effectAction.changeStateForm())
        }

    }
}
const mapStateToProps = (state) => {
    return {
        stateFormOffer: state.effect.stateFormOffer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WrappedOfferForm)