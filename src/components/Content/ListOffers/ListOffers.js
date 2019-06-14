import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ListOffers.scss';
import { List, Checkbox } from 'antd';



const listData = [];
for (let i = 0; i < 50; i++) {
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
        prop: PropTypes
    }

    render() {
        return (
            <div className='listOffers'   >
                <h2
                  style={{

                    marginTop : '8px'
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
                        <List.Item
                            key={item.key}
                        >
                            <Checkbox style={{

                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                position: 'relative',
                                width : '100%'

                            }} >
                                <span style={{

                                   float : 'right',
                                   font : '16px'

                                }}>
                                    Feb 26

                                </span>
                                <span style={{

                                    fontSize: '14px',
                                    color: 'black',

                                }}>
                                    {`${item.title} `}

                                </span>
                                <span className='infoOffers' style={{

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

const mapStateToProps = (state) => ({


})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ListOffers)
