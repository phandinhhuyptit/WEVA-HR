import React, { Component } from 'react';
import { Link } from "gatsby";
import PropTypes from 'prop-types';
import './Header.scss';
import { connect } from 'react-redux';
import { Layout, Menu, Icon, Input, Avatar, Dropdown, Badge } from 'antd';
import * as appAction from '../../state/Action/appAction';
// const { SubMenu } = Menu;
const { Header } = Layout;
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
        onToggleCollapse: PropTypes.func.isRequired
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

                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >

                    <Menu.Item style={{ backgroundColor: 'transparent' }} key="1"    >
                        <Icon className="trigger" type={this.props.toggleCollapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggleCollapsed} style={{ fontSize: '25px', color: 'white', marginRight: '20px' }} />

                    </Menu.Item>

                    <Menu.Item style={{ backgroundColor: 'transparent' }}>

                        <span className="Logo">
                            LOGO
                         </span>

                    </Menu.Item>
                    <Menu.Item style={{ backgroundColor: 'transparent' }}>
                        <Input placeholder="Tìm Nhanh Yêu Cầu - Đề Xuất" prefix={<Icon type="search"
                            style={{ color: 'rgba(0,0,0,.25)' }} />}
                            style={{ width: '400px' }}
                        />
                    </Menu.Item>
                    <Menu.Item style={{ float: 'right', backgroundColor: 'transparent' }}  >

                        <Dropdown overlay={menuProfile} trigger={['click']}>
                            <span className="Profile">

                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                <span className="infoUser">
                                    <span className="nameUser">Phan Đình Huy</span>
                                    {/* <span className="positionOfStaff"> Developer </span> */}
                                </span>
                            </span>
                        </Dropdown>
                    </Menu.Item>
                    <Menu.Item style={{ float: 'right', backgroundColor: 'transparent', padding: '0px' }}>

                        <a href="#Notification">
                            <Badge count={11} overflowCount={99} style={{
                                fontSize: '10px',
                                width: '20px',
                                height: '20px',
                                display: 'flex',
                                border: '1px solid red',
                                justifyContent: 'center'

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

const mapStateToProps = (state, ownProps) => {
    return {

        toggleCollapsed: state.app.toggleCollapsedOfSider

    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggleCollapse: () => {
            dispatch(appAction.toogleCollapsed())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(header)
