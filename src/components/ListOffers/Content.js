import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { connect } from 'react-redux';


import ListOffers from './ListOffers/ListOffers';
import InfoOffers from './infoOffer/infoOffer';
const { Content } = Layout;
class content extends Component {
    static propTypes = {
        prop: PropTypes
    }
    render() {
        const { isShowOffers } = this.props
        return (
            // Tag Content not working with className
            <Content className="lits-offers"
                style={{
                    background: "#fff",
                    padding: '0px 0px 0px ',
                    margin: 0,
                    minHeight: 280,
                    overflow: 'hidden',
                    display: 'inline-flex',
                    borderLeft: '0.5px solid #c7c7c7bf'
                }}
            >
                <ListOffers />
                {isShowOffers ? <InfoOffers /> : ''}
            </Content>
        )
    }
}
const mapStateToProps = state => {

    return {
        isShowOffers: state.effect.isShowOffers
    }
}

export default connect(mapStateToProps, null)(content)
