import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon, Button } from 'antd';
import { connect } from 'react-redux';
const { SubMenu } = Menu;
const { Sider } = Layout;


class sider extends Component {
    static propTypes = {
        toggleCollapsed: PropTypes.bool.isRequired
    }

    render() {
        return (
            <Sider trigger={null} collapsible collapsed={this.props.toggleCollapsed} width={200} style={{ background: "#fff" }}>


                <Menu
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    style={{ height: "100%", borderRight: 0 }}

                >





                    <Menu.Item>
                        <Button style={{
                            color: '#fff',
                            backgroundColor: '#5cb85c',
                            borderColor: '#4cae4c'
                        }} icon="plus">
                            Tạo Đề Xuất Mới
                        </Button>
                    </Menu.Item>
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span>Option 3</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="user" />
                                {`${!this.props.toggleCollapsed ? 'User' : ''}`}
                            </span>
                        }
                    >
                        <Menu.Item key="option1">option1</Menu.Item>
                        <Menu.Item key="option2">option2</Menu.Item>
                        <Menu.Item key="option3">option3</Menu.Item>
                        <Menu.Item key="option4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="laptop" />
                                {`${!this.props.toggleCollapsed ? 'LapTop' : ''}`}
                            </span>
                        }
                    >
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub3"
                        title={
                            <span>
                                <Icon type="notification" />
                                {`${!this.props.toggleCollapsed ? 'Thông Báo' : ''}`}
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
        toggleCollapsed: state.app.toggleCollapsedOfSider
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(sider);