import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, Checkbox} from 'antd';

import './ListOffers.scss';
import * as effectAction from '../../../state/Action/effectAction';

const listData = [];
for (let i = 0; i < 51; i++) {
    listData.push({
        href: 'http://ant.design',
        key: i,
        title: 'Xin Nghỉ Sáng Ngày 16/6 và 17/6',
        description:
            'Dắt Vợ Đi Đẻ, Cho Con Bú,Dắt Má Đi Chợ và Nấu Cơm',
    });
}
export class ListOffers extends Component {
    static propTypes = {
        onOpenInfoOffer: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props)
        this.state = {
            indexCurrentOfListOffer: null
        }
    }
    openInfoOffer = (e) => {

        this.setState({

            indexCurrentOfListOffer: e.currentTarget.attributes['data-tag'].value

        })
        if (!this.props.listOfferAndInfoOffer) {

            this.props.onOpenInfoOffer();
        }
    }
    render() {
        return (
            <div className={`listOffers ${this.props.listOfferAndInfoOffer ? 'activeSmallList' : ''}`}   >
                <h2
                    style={{

                        marginTop: '8px',
                        paddingLeft : '8px'
                    }}
                > Danh Sách Đề Xuất</h2>
                <List
                    itemLayout=""
                    size='size'
                    pagination={{
                        pageSize: 15
                    }}
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item className={`${parseInt(this.state.indexCurrentOfListOffer) === item.key ? 'activeHighLight' : 'ant-list-item'}`}
                            style={{
                                padding: '8px 8px 8px'
                            }}
                        >
                            <Checkbox style={{

                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                position: 'relative',
                                width: '100%'

                            }} onClick={(e) => this.openInfoOffer(e)} data-tag={item.key} >
                                <span className={parseInt(this.state.indexCurrentOfListOffer) === item.key ? 'activeFont' : ''}
                                    style={{
                                        float: 'right',
                                        font: '16px'
                                    }}>
                                    Feb 26

                                </span>
                                <span className={parseInt(this.state.indexCurrentOfListOffer) === item.key ? 'activeFont' : ''}
                                    style={{
                                        fontSize: '14px',
                                        color: 'black',
                                    }}>
                                    {`${item.title} `}

                                </span>
                                <span className={`infoOffers ${this.props.listOfferAndInfoOffer ? 'activeChangeShapeOfInfoOffers' : ''} 
                                     ${ parseInt(this.state.indexCurrentOfListOffer) === item.key ? 'activeFont' : ''} `}
                                    style={{
                                        fontSize: '10px',
                                        fontWeight: '400',
                                        color: 'gray',
                                        whiteSpace: 'nowrap',
                                        textOverflow: 'ellipsis',
                                        overflow: 'hidden',
                                        position: 'relative'
                                    }} >
                                    {`Lý Do Nghỉ : ${item.description}`}
                                </span>
                            </Checkbox>
                        </List.Item>
                    )}
                >
                </List>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        listOfferAndInfoOffer: state.effect.listOfferAndInfoOffer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onOpenInfoOffer: () => {

            dispatch(effectAction.openInfoOffer())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOffers)
