import React, {Component} from "react";
import { Link } from "gatsby";
import LayoutPage from "../components/layout";
import { Layout } from 'antd';
import Sider from "../components/Sider/Sider";
import SEO from "../components/seo";
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import * as effectAction from '../state/Action/effectAction';
class IndexPage extends Component {
  static propTypes = {
    stateOfBackgroundAndFormOffer: PropTypes.bool.isRequired,
    onTurnOnOrOffForFormOfferAndBackgroundBody : PropTypes.func
  }

  changeStateOfBackGroundAndFormOffer = () => {
    this.props.onTurnOnOrOffForFormOfferAndBackgroundBody();
  }
  render() {

    const backGroundBody = <div className="backgroundBody" style={{
      width: '100%',
      height: '100%',
      position: 'fixed',
      backgroundColor: 'rgba(74, 71, 71, 0.52)',
      zIndex: '1'
    }} onClick={() => this.changeStateOfBackGroundAndFormOffer()} />
    

    return (
      <LayoutPage>
      <SEO title="Dasboard"/>
        {
          this.props.stateOfBackgroundAndFormOffer ? backGroundBody : ''
        }
      <Layout>
        <Header />
        <Layout>
          <Sider />
          <Content />
        </Layout>
      </Layout>
    </LayoutPage>
    )
  }
}



const mapStateToProps = (state) => ({

  stateOfBackgroundAndFormOffer: state.effect.backGroundBodyAndFormOffer
  
})

const mapdispatchtoprops = (dispatch) => {

  return {
    onTurnOnOrOffForFormOfferAndBackgroundBody: () => {
      dispatch(effectAction.turnOnOrOffForFormOfferAndBackgroundBody())
    }
  }
}
export default connect(mapStateToProps,mapdispatchtoprops)(IndexPage)

