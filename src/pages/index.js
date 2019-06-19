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
import { CSSTransition  } from 'react-transition-group';
import * as effectAction from '../state/Action/effectAction';
import './styles/Dasboard.scss';
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
      zIndex: '1',
    }} onClick={() => this.changeStateOfBackGroundAndFormOffer()} />
    return (
      <LayoutPage>
      <SEO title="Dasboard"/>        
          <CSSTransition          
          classNames="BackGround"          
          in={this.props.stateOfBackgroundAndFormOffer}
          timeout={500}              
          enter = {true}
          exit = {true}
          onEnter = { () => console.log("On Enter")}
          onEntering = {() => console.log("On Entering")}
          onEntered = {() => console.log("On Entered")}
          onExit = { () =>console.log("On Exit")}
          onExiting = {() => console.log("On Exiting")}
          onExited = {() => console.log(" On Exited")}               
          >
              {
                backGroundBody
              }
          </CSSTransition>      
      <Layout>
        <Header />
        <Layout style={{   
          boxShadow:'0 1px 4px rgba(0, 0, 0, 0.3)'
        }} >
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

