import React, { Component } from 'react';
import { Link } from "gatsby";
import PropTypes from 'prop-types';
import './Header.scss';
import { connect } from 'react-redux';
import { Layout, Menu, Icon, Input, Avatar, Dropdown, Badge } from 'antd';
import * as appAction from '../../state/Action/appAction';
// const { SubMenu } = Menu;
const { Header } = Layout;
const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);
const menuProfile = (
    <Menu>
        <Menu.Item key="0">
            <Link href='/Profile'>Profile</Link>
        </Menu.Item>
        <Menu.Item key="1">
            <Link href="/Login">Logout</Link>
        </Menu.Item>
    </Menu>
)
class header extends Component {
    static propTypes = {
        onToggleCollapse: PropTypes.func.isRequired,
        toggleCollapsed: PropTypes.bool.isRequired
    }
    state = {
        collapsed: false,
    }
    toggleCollapsed = () => {
        this.props.onToggleCollapse();
    }
    render() {
        return (

            <Header className="header">
                {/* <Icon className="trigger" type={this.props.toggleCollapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggleCollapsed} style={{ fontSize: '20px', color: 'white', marginRight: '20px' }} /> */}
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '58px', backgroundColor: '#29501d' }}
                >
                    <Menu.Item className="Menu" style={{
                        backgroundColor: 'transparent',
                        display: 'none',
                        position: 'relative',
                        top: '10px',
                        verticalAlign: 'bottom',
                    }}
                        key="1">
                        <Icon className="trigger" type={this.props.toggleCollapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggleCollapsed} style={{ fontSize: '25px', color: 'white', marginRight: '20px' }} />
                    </Menu.Item>
                    <Menu.Item className="Logo" style={{
                        backgroundColor: 'transparent',
                        position: 'relative',
                        top: '1px',
                        display: 'inline-block',
                        verticalAlign: 'bottom',
                    }}>
                        <span className="Logo">
                            LOGO
                        </span>
                    </Menu.Item>
                    <Menu.Item className="Search" style={{
                        backgroundColor: 'transparent',
                        position: 'relative',
                        top: '1px',
                        display: 'inline-block',
                        verticalAlign: 'bottom'
                    }}>
                        <Input placeholder="Tìm Nhanh Yêu Cầu - Đề Xuất" prefix={<Icon type="search"
                            style={{ color: 'rgba(0,0,0,.25)' }} />}
                            style={{ width: '400px' }}
                        />
                    </Menu.Item>
                    <Menu.Item className="Profile" style={{
                        float: 'right', backgroundColor: 'transparent',
                        position: 'relative',
                        top: '7px',
                        width: '165px',
                        display: 'inline-block',
                        verticalAlign: 'bottom',
                    }}  >
                        <Dropdown overlay={menuProfile} trigger={['click']}>
                            <span className="Profile">
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                <span className="infoUser">
                                    <span className="nameUser">Phan Đình Huy</span>
                                </span>
                            </span>
                        </Dropdown>
                    </Menu.Item>
                    <Menu.Item className="Notification" style={{
                        float: 'right', backgroundColor: 'transparent', padding: '0px',
                        position: 'relative',
                        top: '8px',
                        display: 'inline-block',
                        verticalAlign: 'bottom',
                        width: '50px',
                        paddingLeft: '18px'
                    }}>
                        <a href="#Notification" style={{ paddingTop: '4px' }}>
                            <Badge count={11} overflowCount={99} style={{
                                fontSize: '10px',
                                width: '20px',
                                height: '20px',
                                display: 'flex',
                                border: '1px solid red',
                                justifyContent: 'center',
                                zIndex: '0'
                            }}>
                                <Icon type='bell' style={{ fontSize: '19px', color: 'white', marginRight: '0px' }} />
                            </Badge>
                        </a>

                    </Menu.Item>
                </Menu>
            </Header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        toggleCollapsed: state.app.toggleCollapsedOfSider
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onToggleCollapse: () => {
            dispatch(appAction.toogleCollapsed())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(header)
