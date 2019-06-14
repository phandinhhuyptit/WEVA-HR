import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormOffer from './Form/formOffer';
import { Layout, Menu, Icon, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import * as effectAction from '../../state/Action/effectAction';

const { SubMenu } = Menu;
const { Sider } = Layout;

class sider extends Component {
    static propTypes = {
        toggleCollapsed: PropTypes.bool.isRequired,
        onTurnOnOrOffForFormOfferAndBackgroundBody: PropTypes.func.isRequired,
        stateOfBackgroundAndFormOffer: PropTypes.bool.isRequired
    }
    changeStateOfBackGroundAndFormOffer = () => {
        this.props.onTurnOnOrOffForFormOfferAndBackgroundBody();
    }
    render() {
  
        return (
            <Sider trigger={null} width={200} style={{ background: "#fff" }}>
                
                {
                    this.props.stateOfBackgroundAndFormOffer ? <FormOffer /> : ''
                }
                <Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]}
                    style={{ height: "100%", borderRight: 0 }}>
                    <Menu.Item>
                        <Button style={{
                            color: '#fff',
                            backgroundColor: '#5cb85c',
                            borderColor: '#4cae4c'
                        }} icon="plus" onClick={() => this.changeStateOfBackGroundAndFormOffer()} >
                            Tạo Đề Xuất Mới
                        </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Checkbox>
                            Gửi Đến Tôi
                       </Checkbox>
                    </Menu.Item>

                    <Menu.Item>
                        <Checkbox>
                            Tôi Gửi Đi
                        </Checkbox>
                    </Menu.Item>

                    <Menu.Item>

                        <Checkbox>

                            Đang Theo Dõi

            </Checkbox>

                    </Menu.Item>
                    <Menu.Divider style={{ width: '170px', margin: 'auto' }} />

                    <SubMenu key="sub1" title={<span>
                        <Icon type="unordered-list" />
                        Quan Trọng
                         </span>

                    }
                    >
                        <Menu.Item key="option1">
                            <span>
                                <Icon type="menu" />
                                Tất Cả Đề Xuất
                            </span>
                        </Menu.Item>
                        <Menu.Item key="option2">
                            <span>
                                <Icon type="clock-circle" />
                                Đang Chờ Duyệt
                            </span>
                        </Menu.Item>
                        <Menu.Item key="option3">
                            <span>
                                <Icon type="check-circle" />
                                Đã Phê Duyệt

                              </span>
                        </Menu.Item>
                        <Menu.Item key="option4">
                            <span>
                                <Icon type="close-circle" />
                                Đã Từ Chối 
                            </span>
                        </Menu.Item>
                        <Menu.Divider style={{ width: '170px', margin: 'auto' }} />
                    </SubMenu>
                    <SubMenu key="sub2" title={<span>
                        <Icon type="star" />
                    </span>}
                    >
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={

                        <span>
                            <Icon type="notification" />
                            Thông Báo
                        </span>
                    }
                    >
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        toggleCollapsed: state.app.toggleCollapsedOfSider,
        stateOfBackgroundAndFormOffer: state.effect.backGroundBodyAndFormOffer
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onTurnOnOrOffForFormOfferAndBackgroundBody: () => {
            dispatch(effectAction.turnOnOrOffForFormOfferAndBackgroundBody())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(sider);