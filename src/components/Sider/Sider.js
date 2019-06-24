import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormOffer from './Form/formOffer';
import { Layout, Menu, Icon, Button, Checkbox, Input, Avatar } from 'antd';
import { connect } from 'react-redux';
import * as effectAction from '../../state/Action/effectAction';
import * as appAction from '../../state/Action/appAction';
import { CSSTransition } from 'react-transition-group';
import MediaQuery from 'react-responsive';
import './Sider.scss';
const { SubMenu } = Menu;
const { Sider } = Layout;
class sider extends Component {
    static propTypes = {
        toggleCollapsed: PropTypes.bool.isRequired,
        onChangeStateForm: PropTypes.func.isRequired,
        stateOfBackgroundAndFormOffer: PropTypes.bool.isRequired,
        onDefaultSider: PropTypes.func
    }
    handleChangeStateForm = () => {
        this.props.onChangeStateForm();
    }
    componentDidMount = () => {
        setInterval(() => {
            const { toggleCollapsed } = this.props;
            if (window.innerWidth > 768) {
                if (toggleCollapsed === false) {
                    this.props.onDefaultSider();
                }
            }
        }, 1000)
    }
    render() {
        const { toggleCollapsed, stateOfBackgroundAndFormOffer } = this.props
        return (
            <Sider className="Sider"  width={200} style={{ background: "#fff",height : "100vh" }} collapsed={!this.props.toggleCollapsed}>
                {
                    <CSSTransition
                        classNames="fade"
                        in={stateOfBackgroundAndFormOffer}
                        timeout={300}
                        enter={true}
                        exit={true}
                    >
                        <FormOffer />
                    </CSSTransition>
                }
                <Menu className='Menu' mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{
                        height: "100%",
                        borderRight: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.08)',
                        paddingTop: '10px',

                    }}>
                    <MediaQuery query="(max-width :768px)">
                        {
                            toggleCollapsed ?
                                <span className="Profile" style={{
                                    paddingLeft: '15px',
                                    alignItems: 'flex-end',
                                    display: 'flex',
                                    justifyContent: 'space-evenly'
                                }}>
                                    <Avatar style={{ width: '50px', height: '50px', border: '2px solid white' }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    <span className="infoUser">
                                        <p className="nameUser" style={{ fontSize: '11px', color: 'gray', fontWeight: '500' }}     >Welcome</p>
                                        <p className="nameUser" style={{ fontSize: '12px', fontWeight: '600' }} >Phan Đình Huy</p>
                                    </span>
                                </span>
                                : ''
                        }
                    </MediaQuery>
                    {
                        toggleCollapsed ?
                            <Menu.Item style={{ marginTop: '10px' }}>
                                <Button style={{
                                    color: '#fff',
                                    backgroundColor: '#5cb85c',
                                    borderColor: '#4cae4c'
                                }} icon="plus" onClick={() => this.handleChangeStateForm()} >
                                    Tạo Đề Xuất Mới
                                    </Button>
                            </Menu.Item>
                            : ''
                    }
                    <Menu.Item className="Notification" style={{ display: 'none' }}>
                        <Icon type="bell" />
                        <span>
                            Thông Báo
                            <span style={{
                                float: 'right',
                                display: 'flex',
                                background:'#2286ec',
                                color: 'white',
                                borderRadius: '2px',
                                fontSize: '12px',
                                width: '30px',
                                height:'20px',
                                position:'absolute',
                                left:'80%',
                                top:'23%',
                                justifyContent:'center',
                                alignItems:'center'
                            }} >
                               99+
                        
                            </span>
                                </span>
                    </Menu.Item>
               
                {/* {
                    toggleCollapsed ?
                        <h4 style={{ paddingLeft: '24px', color: 'gray', margin: '16px 0px 15px' }}> QUAN TRỌNG</h4>
                        : ''
                }
                {
                    toggleCollapsed ?
                        <Menu.Divider style={{ width: '170px', margin: 'auto', background: '#d6d4d4' }} />
                        : ''
                } */}
                <Menu.Item key="option1">
                    <Icon type="menu" />
                    <span>
                        Tất Cả Đề Xuất
                        </span>
                </Menu.Item>
                <Menu.Item key="option2">
                    <Icon type="clock-circle" />
                    <span>
                        Đang Chờ Duyệt
                        </span>
                </Menu.Item>
                <Menu.Item key="option3">

                    <Icon type="check-circle" />
                    <span>
                        Đã Phê Duyệt

                              </span>
                </Menu.Item>
                <Menu.Item key="option4">

                    <Icon type="close-circle" />
                    <span>
                        Đã Từ Chối
                            </span>
                </Menu.Item>

                {
                    toggleCollapsed ?
                        <Menu.Item className="Search" style={{ display: 'none' }}>
                            <Input placeholder="Tìm Nhanh Yêu Cầu - Đề Xuất" prefix={<Icon type="search"
                                style={{
                                    color: 'rgba(0,0,0,.25)'
                                }} />}
                            />
                        </Menu.Item>
                        : ''}
                </Menu>
            </Sider >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        toggleCollapsed: state.app.toggleCollapsedOfSider,
        stateOfBackgroundAndFormOffer: state.effect.stateFormOffer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeStateForm: () => {
            dispatch(effectAction.changeStateForm())
        },
        onDefaultSider: () => {
            dispatch(appAction.defaultSider())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(sider);

{/* <SubMenu key="sub1" title={<span>
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
    <Menu.Divider style={{ width: '170px', margin: 'auto', background: '#d6d4d4' }} />
</SubMenu>
<SubMenu style={{backgroundColor:'rgba(0, 0, 0, 0)'}} key="sub2" title={<span>
    <Icon type="star" />
</span>}
>
    <Menu.Item key="5">option5</Menu.Item>
    <Menu.Item key="6">option6</Menu.Item>
    <Menu.Item key="7">option7</Menu.Item>
    <Menu.Item key="8">option8</Menu.Item>
</SubMenu> */}