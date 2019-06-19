import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Divider, Button, Icon, Input, Tooltip, Avatar } from "antd";
import * as effectAction from '../../../state/Action/effectAction'
import "./infoOffer.scss";
export class InfoOffer extends Component {
    static propTypes = {
        onCloseInfoOffer: PropTypes.func.isRequired
    };
    CloseInfoOffer = () => {
        this.props.onCloseInfoOffer()
    }

    render() {
        return (
            <div
                className="infoOffer"
                style={{
                    width: "70%",
                    height: "100%",
                    display: "block",
                    padding: "0px 15px 0px",
                    position: 'relative',
                    borderLeft: '0.5px solid #80808052'
                }}
            >
                <Icon type="down" style={{
                    position: 'absolute',
                    left: '96%',
                    top: '2%',
                    cursor: 'pointer',
                    fontSize: '12px',
                    color: 'gray'
                }} onClick={() => this.CloseInfoOffer()} />
                <h2 className="titleInfo"
                    style={{
                        marginTop: "8px"
                    }}
                >
                    {" "}
                    Xin Nghỉ Ngày 16/6 Và 17/6
                 </h2>
                <p
                    style={{
                        color: "gray",
                        fontSize: "10px"
                    }}
                >
                    {" "}
                    Thời hạn xử lý : <span style={{ fontWeight: '600', fontSize: '11px' }} > 23:16 Today </span> - Thời gian còn lại :{" "}
                    <span style={{
                        color: 'rgb(16, 191, 16)'

                    }}> 07:19:17 </span>
                </p>
                <p
                    style={{
                        fontSize: "10px"
                    }}
                >
                    {" "}
                    Trạng thái : <span style={{
                        color: 'rgb(16, 191, 16)',
                        fontWeight: '600'
                    }}> Đang chờ phê duyệt </span>
                </p>

                <Divider />
                <div
                    class="button"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "30px"
                    }}
                >
                    <Button
                        className="Accept"
                        style={{
                            backgroundColor: "rgb(134, 197, 3)",
                            width: "200px",
                            borderColor: "rgb(76, 174, 76)",
                            color: "rgb(255, 255, 255)"
                        }}
                    >
                        Chấp Thuận
                    </Button>
                    <Button
                        className="Forward"
                        style={{
                            backgroundColor: "rgb(92, 184, 92)",
                            color: "rgb(255, 255, 255)",
                            width: "200px",
                            borderColor: "#28a745"
                        }}
                    >
                        Chuyển Tiếp
                    </Button>
                    <Button
                        className="Deny"
                        style={{
                            backgroundColor: "#dc3545",
                            borderColor: "#dc3545",
                            color: "#fff",
                            width: "200px"
                        }}
                    >
                        Từ Chối
                    </Button>
                </div>
                <h4>Thông Tin Đề Xuất</h4>
                <Divider
                    style={{
                        marginTop: "0px"
                    }}
                />
                <div
                    className="recommendedInformation"
                    style={{
                        marginBottom: "10px"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            padding: "5px 0"
                        }}
                    >
                        <p
                            style={{
                                width: "200px"
                            }}
                        >
                            {" "}
                            <Icon
                                type="user"
                                style={{
                                    marginRight: "10px"
                                }}
                            />
                            Người Tạo
            </p>
                        <p
                            style={{
                                color: "black",
                                fontWeight: "700"
                            }}
                        >
                            Hạnh Hoàng
            </p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            padding: "5px 0"
                        }}
                    >
                        <p
                            style={{
                                width: "200px",
                                padding: "5px 0"
                            }}
                        >
                            {" "}
                            <Icon
                                type="container"
                                style={{
                                    marginRight: "10px"
                                }}
                            />
                            Nhóm Đề Xuất
            </p>
                        <p
                            style={{
                                color: "#10bf10",
                                fontWeight: "500"
                            }}
                        >
                            Xin Nghỉ Phép
            </p>
                    </div>
                    <div
                        style={{
                            display: "flex"
                        }}
                    >
                        <p
                            style={{
                                width: "200px",
                                padding: "5px 0"
                            }}
                        >
                            {" "}
                            <Icon
                                type="calendar"
                                style={{
                                    marginRight: "10px"
                                }}
                            />
                            Thời Gian Tạo
            </p>
                        <p
                            style={{
                                color: "black"
                            }}
                        >
                            15:16 Today
            </p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            padding: "5px 0"
                        }}
                    >
                        <p
                            style={{
                                width: "200px"
                            }}
                        >
                            {" "}
                            <Icon
                                type="clock-circle"
                                style={{
                                    marginRight: "10px"
                                }}
                            />
                            Cập Nhật Gần Nhất
            </p>
                        <p
                            style={{
                                color: "black"
                            }}
                        >
                            39 minutes ago
            </p>
                    </div>
                </div>
                <h4>Thông Tin Khác(Mẫu Đăng Ký Đề Xuất)</h4>
                <Divider
                    style={{
                        marginTop: "0px"
                    }}
                />
                <div className="differentInformation"
                    style={{

                        marginBottom: '30px'

                    }}

                >
                    <div
                        style={{
                            display: "flex"
                        }}
                    >
                        <p
                            style={{
                                width: "50px",
                                fontSize: "12px"
                            }}
                        >
                            01
                        </p>
                        <div>
                            <p style={{ marginBottom: "0px", fontSize: "12px" }}>
                                Lý Do Nghỉ?
                            </p>
                            <p style={{ fontSize: "12px", color: "black" }}>
                                {" "}
                                Công Việc Gia Đình
                           </p>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex"
                        }}
                    >
                        <p style={{ width: "50px", fontSize: "12px" }}>02</p>
                        <div>
                            <p style={{ marginBottom: "0px", fontSize: "12px" }}>
                                Ngày Bắt Đầu Nghỉ?
                            </p>
                            <p style={{ fontSize: "12px", color: "black" }}> 01/03/2018</p>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex"
                        }}
                    >
                        <p style={{ width: "50px", fontSize: "12px" }}>03</p>
                        <div>
                            <p style={{ marginBottom: "0px", fontSize: "12px" }}>
                                Ngày kết thúc nghỉ?
                            </p>
                            <p style={{ fontSize: "12px", color: "black" }}> 01/03/2018</p>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex"
                        }}
                    >
                        <p
                            style={{
                                width: "50px",
                                fontSize: "12px"
                            }}
                        >
                            04
                        </p>
                        <div>
                            <p style={{ marginBottom: "0px", fontSize: "12px" }}>
                                Có ảnh hưởng đến công việc không?
                            </p>
                            <p style={{ fontSize: "12px", color: "black" }}> No</p>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex"
                        }}
                    >
                        <p
                            style={{
                                width: "50px",
                                fontSize: "12px"
                            }}
                        >
                            05
                        </p>
                        <div>
                            <p style={{ marginBottom: "0px", fontSize: "12px" }}>
                                Ai là người take care công việc khi nghỉ?
                            </p>
                            <p style={{ fontSize: "12px", color: "black" }}>
                                {" "}
                                Công Việc Gia Đình
                            </p>
                        </div>
                    </div>
                </div>
                <h4>Thảo Luận</h4>
                <Divider
                    style={{
                        margin: "0px 0px 5px"
                    }}
                />

                <div className="inputMsg"
                    style={{
                        display: 'flex',
                    }}
                >
                    <span className="imageUser">
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </span>
                    <Input
                        style={{
                            border: 'none!important',
                            boxShadow: 'none!important'
                        }}
                        type="text"
                        placeholder="Enter your username"
                        suffix={
                            <Icon
                                type="paper-clip"
                                style={{ color: "rgba(0,0,0,.45)", cursor: 'pointer' }}
                            />
                        }
                    />
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        listOfferAndInfoOffer: state.effect.listOfferAndInfoOffer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onCloseInfoOffer: () => {

            dispatch(effectAction.closeInfoOffer())
        }

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoOffer);
