import React, { Component } from 'react';
import { Row, Col, Avatar, List, Button, Spin } from 'antd';
class Notification extends Component {

    constructor(props) {
        super(props)
    }
    onLoadMore = () => {
        this.props.onLoadMore();
    }
    render() {
        const { endArray, Data, initLoading } = this.props;
        return (

            <div className="list-notification">
                <h3 style={{
                    borderBottom: '1px solid #e8e8e8',
                    textAlign: 'center', marginBottom: '0',
                    fontWeight: '500',
                    color: 'gray',
                    backgroundColor: '#e4e7ea',
                    fontSize: '14px'
                }}  > Bạn Có 11 Tin Nhắn </h3>
                <List
                    style={{
                        overflowY: 'scroll',
                        height: '400px',
                        overflowX: 'hidden'
                    }}
                    loading={initLoading}
                    itemLayout="horizontal"
                    dataSource={Data}
                    renderItem={item => (
                        <List.Item key={item.key}>
                            <div style={{ width: '100%' }} className="message">
                                <Row type="flex" gutter={5}>
                                    <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} span={8} >
                                        <Avatar style={{ width: '50px', height: '50px' }} src="https://coreui.io/react/demo/assets/img/avatars/7.jpg" />
                                    </Col>
                                    <Col span={16}>
                                        <div className="messagesOfNotification">
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between'
                                            }}>
                                                <span style={{ fontSize: '9px' }}  >
                                                    Phan Dinh Huy
                                                </span>
                                                <span style={{ fontSize: '9px' }}  >
                                                    Just now
                                                </span>
                                            </div>
                                            <p style={{
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                padding: '0',
                                                color: 'black',
                                                fontSize: '13px',
                                                fontWeight: '600',
                                                marginBottom: '0px'
                                            }} className="Title"> {item.title}</p>
                                            <p style={{
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                                marginBottom: '5px',
                                                fontSize: '11px'
                                            }}
                                                className="Content" > {item.description}</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </List.Item>
                    )}
                >
                    {
                        !endArray ? (<div style={{ width: '100%', height: '50px', display: 'flex', justifyContent: 'center' }} >
                            <Button onClick={() => this.onLoadMore()}  >Tải Thêm</Button>
                        </div>) : null
                    }
                </List>
                <div className="footerOfNotification" style={{ borderTop: '1px solid #e8e8e8 ' }}   >
                    <p style={{ cursor: 'pointer', color: 'black', textAlign: 'center', marginBottom: '0px', fontWeight: '500' }}> View All Messages   </p>
                </div>
            </div>
        )
    }
}

export default Notification
