import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import './Content.scss';

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
            <Content className="lits-offers">
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
