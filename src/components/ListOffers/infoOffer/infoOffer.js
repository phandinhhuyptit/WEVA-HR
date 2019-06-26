import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Divider, Button, Icon, Input, Tooltip, Avatar } from "antd";
import * as effectAction from '../../../state/Action/effectAction';
import "./infoOffer.scss";
export class InfoOffer extends Component {
    static propTypes = {
        onCloseInfoOffer: PropTypes.func.isRequired
    };
    closeInfoOffer = () => {
        this.props.onCloseInfoOffer()
    }

    render() {
        return (
            <div className="info-offer">
                <Icon className="icon-close" type="close" onClick={() => this.closeInfoOffer()} />
                <h2 className="title-info" style={{ marginTop: "8px" }}>

                    Xin Nghỉ Ngày 16/6 Và 17/6
                </h2>
                <p className="time" style={{ color: "gray", fontSize: "10px" }}>

                    Thời hạn xử lý : <span style={{ fontWeight: '600', fontSize: '11px' }} > 23:16 Today </span> - Thời gian còn lại :{" "}
                    <span style={{ color: 'rgb(16, 191, 16)' }}> 07:19:17 </span>
                </p>
                <p className="state" style={{ fontSize: "10px" }}>
                    Trạng thái : <span style={{ color: 'rgb(16, 191, 16)', fontWeight: '600' }}>
                        Đang chờ phê duyệt
                     </span>
                </p>
                <Divider />
                <div className="buttons">
                    <Button className="accept">
                        Chấp Thuận
                    </Button>
                    <Button className="forward">
                        Chuyển Tiếp
                    </Button>
                    <Button className="deny">
                        Từ Chối
                    </Button>
                </div>
                <h4>Thông Tin Đề Xuất</h4>
                <Divider style={{ marginTop: "0px" }} />
                <div className="recommended-information" style={{ marginBottom: "10px" }}>
                    <div style={{ display: "flex", padding: "5px 0" }}>
                        <p style={{ width: "200px" }}>
                            <Icon type="user" style={{ marginRight: "10px" }} />
                            Người Tạo
                        </p>
                        <p style={{ color: "black", fontWeight: "700" }}>
                            Hạnh Hoàng
                        </p>
                    </div>
                    <div style={{ display: "flex", padding: "5px 0" }}>
                        <p style={{ width: "200px", padding: "5px 0" }}>
                            <Icon type="container" style={{ marginRight: "10px" }} />
                            Nhóm Đề Xuất
                        </p>
                        <p style={{ color: "#10bf10", fontWeight: "500" }}>
                            Xin Nghỉ Phép
                        </p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <p style={{ width: "200px", padding: "5px 0" }}>
                            <Icon type="calendar" style={{ marginRight: "10px" }} />
                            Thời Gian Tạo
                        </p>
                        <p style={{ color: "black" }}>
                            15:16 Today
                        </p>
                    </div>
                    <div style={{ display: "flex", padding: "5px 0" }}>
                        <p style={{ width: "200px" }}>
                            <Icon type="clock-circle" style={{ marginRight: "10px" }} />
                            Cập Nhật Gần Nhất
                        </p>
                        <p style={{ color: "black" }}>
                            39 minutes ago
                         </p>
                    </div>
                </div>
                <h4>Thông Tin Khác(Mẫu Đăng Ký Đề Xuất)</h4>
                <Divider style={{ marginTop: "0px" }} />
                <div className="different-information"
                    style={{ marginBottom: '30px' }}>
                    <div style={{ display: "flex" }}>
                        <p style={{ width: "50px", fontSize: "12px" }}>
                            01
                        </p>
                        <div>
                            <p style={{ marginBottom: "0px", fontSize: "12px" }}>
                                Lý Do Nghỉ?
                            </p>
                            <p style={{ fontSize: "12px", color: "black" }}>
                                Công Việc Gia Đình
                           </p>
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <p style={{ width: "50px", fontSize: "12px" }}>02</p>
                        <div>
                            <p style={{ marginBottom: "0px", fontSize: "12px" }}>
                                Ngày Bắt Đầu Nghỉ?
                            </p>
                            <p style={{ fontSize: "12px", color: "black" }}> 01/03/2018</p>
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <p style={{ width: "50px", fontSize: "12px" }}>03</p>
                        <div>
                            <p style={{ marginBottom: "0px", fontSize: "12px" }}>
                                Ngày kết thúc nghỉ?
                            </p>
                            <p style={{ fontSize: "12px", color: "black" }}> 01/03/2018</p>
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <p style={{ width: "50px", fontSize: "12px" }}>
                            04
                        </p>
                        <div>
                            <p style={{ marginBottom: "0px", fontSize: "12px" }}>
                                Có ảnh hưởng đến công việc không?
                            </p>
                            <p style={{ fontSize: "12px", color: "black" }}> No</p>
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <p style={{ width: "50px", fontSize: "12px" }}>
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
                <Divider style={{ margin: "0px 0px 5px" }} />
                <div className="input-msg" style={{ display: 'flex' }}>
                    <span className="image-user">
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </span>
                    <Input style={{ border: 'none!important', boxShadow: 'none!important' }}
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
        isShowOffers: state.effect.isShowOffers
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
