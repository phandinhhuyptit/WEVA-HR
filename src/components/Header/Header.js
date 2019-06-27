import React, { Component } from 'react';
import { Link } from "gatsby";
import PropTypes from 'prop-types';
import './Header.scss';
import { connect } from 'react-redux';
import {
    Layout,
    Menu,
    Icon,
    Input,
    Avatar,
    Dropdown,
    Badge,
    List,
    Skeleton,
    Row,
    Col,
    Button
} from 'antd';
import * as appAction from '../../state/Action/appAction';
import * as effectAction from '../../state/Action/effectAction';
import { CSSTransition } from 'react-transition-group';
import Notification from './Notifiaction/Notification';
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
const menuAccount = (
    <Menu className="menu-account">
        <div className="title-account">
            <h3 style={{ margin: 0, color: '#73818f' }} > Tài Khoản </h3>
        </div>
        <Menu.Item style={{ display: 'flex', alignItems: 'center' }} key="0">
            <Icon type="user" />
            <Link className="profile" to='/Profile'>Tài Khoản Của Tôi</Link>
        </Menu.Item>
        <Menu.Item style={{ display: 'flex', alignItems: 'center' }} key="1">
            <Icon type="tool" />
            <Link className="setting" to='/Setting'>Cài Đặt</Link>
        </Menu.Item>
        <Menu.Item style={{ display: 'flex', alignItems: 'center' }} key="2">
            <Icon type="logout" />
            <Link className="logout" to="/Logout">Đăng Xuất</Link>
        </Menu.Item>
    </Menu>
)
const listData = [];
for (let i = 0; i < 20; i++) {
    listData.push({
        href: 'http://ant.design',
        title: 'Xin Nghỉ Sáng Ngày 16/6 và 17/6',
        description:
            'Dắt Vợ Đi Đẻ, Cho Con Bú,Dắt Má Đi Chợ và Nấu Cơm',
    });
}
class header extends Component {
    static propTypes = {
        onToggleCollapse: PropTypes.func.isRequired,
        toggleCollapsed: PropTypes.bool.isRequired
    }
    state = {
        collapsed: false,
        notification: false,
        loading: false,
        initLoading: false,
        Data: [listData[0], listData[1], listData[2], listData[3], listData[4], listData[5]],
        indexOfArray: 5,
        endArray: false

    }

    onLoadMore = () => {
        const { indexOfArray, Data } = this.state;
        const gettingDistanceOfArray = 6;
        const data = Data;
        let count = 0;
        for (const key in listData) {
            if (indexOfArray == null) {
                if (parseInt(key) < gettingDistanceOfArray) {
                    data.push(listData[key]);
                    if (parseInt(key) === gettingDistanceOfArray - 1) {
                        this.setState({
                            indexOfArray: parseInt(key) + 1,
                            Data: data
                        })
                        break;
                    }
                }
            }
            else {
                if ((indexOfArray + gettingDistanceOfArray) <= listData.length) {
                    if (parseInt(key) >= indexOfArray) {
                        data.push(listData[key]);
                        if (parseInt(key) === (((indexOfArray + gettingDistanceOfArray) - 1))) {
                            this.setState({
                                indexOfArray: parseInt(key) + 1,
                                Data: data,
                            })
                            break;
                        }
                    }
                }
                else {
                    const elementsEndOFArray = listData.length - indexOfArray;
                    data.push(listData[key]);
                    ++count;
                    if (count === elementsEndOFArray) {
                        this.setState({
                            indexOfArray: null,
                            Data: data,
                            endArray: true,
                        })
                        break;
                    }
                }

            }
        }
    }
    toggleCollapsed = () => {
        this.props.onToggleCollapse();
    }
    onNotification = () => {
        this.props.onChangeStateNotification();
    }
    componentDidMount() {
        this.setState({
            initLoading: false,
        });
    }
    handleState = () => {
        const { stateNotification, onChangeStateNotification } = this.props;

        if (stateNotification) {
            onChangeStateNotification();
        }
    }
    render() {
        const { initLoading, Data, endArray } = this.state;
        const { stateNotification, toggleCollapsed } = this.props;
        return (
            <Header className="header">
                {/* <Icon className="trigger" type={this.props.toggleCollapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggleCollapsed} style={{ fontSize: '20px', color: 'white', marginRight: '20px' }} /> */}
                <Menu
                    theme="dark"
                    style={{ lineHeight: '58px', backgroundColor: '#084D17' }}
                >
                    <Menu.Item className="menu"
                        key="Menu1"
                    >
                        <Icon className="trigger" type={toggleCollapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggleCollapsed} style={{ fontSize: '25px', color: 'white', marginRight: '20px' }} />
                    </Menu.Item>
                    <Menu.Item className="logo" style={{
                        backgroundColor: 'transparent',
                        position: 'relative',
                        top: '1px',
                        display: 'inline-block',
                        verticalAlign: 'bottom',
                    }}
                        key="Menu2"
                    >
                        <span className="Logo">
                            LOGO
                        </span>
                    </Menu.Item>
                    <Menu.Item className="search" style={{

                    }}
                        key="Menu3"
                    >
                        <Input placeholder="Tìm Nhanh Yêu Cầu - Đề Xuất" prefix={<Icon type="search"
                            style={{ color: 'rgba(0,0,0,.25)' }} />}
                            style={{ width: '400px' }}
                        />
                    </Menu.Item>
                    <Menu.Item onClick={() => this.handleState()} className="account" key="Menu4">
                        <Dropdown className="drop-down-menu-account" overlay={menuAccount} trigger={['click']}>
                            <span className="profile">
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                <span className="info-user">
                                    <span className="name-user">Phan Đình Huy</span>
                                </span>
                            </span>
                        </Dropdown>
                    </Menu.Item>
                    <Menu.Item className="notification"
                        key="Menu5"
                    >
                        <span className="icon-notification" onClick={() => this.onNotification()} style={{ paddingTop: '4px' }} >
                            {/*   className not working inside tag <Badge/>       */}
                            <Badge className="badge" count={11} overflowCount={99} style={{
                                fontSize: '10px',
                                width: '20px',
                                height: '20px',
                                display: 'flex',
                                border: '1px solid red',
                                justifyContent: 'center',
                                zIndex: '0'
                            }}>
                                <Icon className="bell" type='bell' />
                            </Badge>
                        </span>
                        <CSSTransition
                            classNames="fadeNotification"
                            in={stateNotification}
                            appear={true}
                            enter={true}
                            timeout={500}
                        >
                            {stateNotification ? <Notification endArray={endArray} Data={Data} initLoading={initLoading} onLoadMore={this.onLoadMore} /> : <div></div>}
                        </CSSTransition>
                    </Menu.Item>
                </Menu>
            </Header>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        toggleCollapsed: state.app.toggleCollapsedOfSider,
        stateNotification: state.effect.Notification
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onToggleCollapse: () => {
            dispatch(appAction.toogleCollapsed())
        },
        onChangeStateNotification: () => {

            dispatch(effectAction.changeStateNotification())

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(header)
