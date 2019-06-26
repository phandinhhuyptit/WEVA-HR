import React, { Component } from "react";
import { Link } from "gatsby";
import { Layout, Spin } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import 'antd/dist/antd.css';
import LayoutPage from "../components/layout";
import Sider from "../components/Sider/Sider";
import SEO from "../components/seo";
import Header from '../components/Header/Header';
import ListOffers from '../components/ListOffers/Content';
import * as effectAction from '../state/Action/effectAction';


class IndexPage extends Component {
  static propTypes = {
    stateFormOffer: PropTypes.bool.isRequired,
    onChangeStateNotification: PropTypes.func,
    onChangeStateForm: PropTypes.func,
    stateNotification: PropTypes.bool.isRequired

  }
  constructor(props) {
    super(props)

    this.state = {
      Loading: true
    }
  }
  
  componentDidMount = () => {
   this.setState({ Loading: false })
  }
  render() {

    const spinOfPage = <Spin
      style={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'fixed',
        background: 'white',
        zIndex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      size="large"
    />
    return (

      this.state.Loading ?
        spinOfPage
        :
        <LayoutPage>
          <SEO title="Dasboard" />
          <Layout>
              <Sider/> 
              <ListOffers/>
          </Layout>
        </LayoutPage>
    )
  }
}
const mapStateToProps = (state) => ({

  stateFormOffer: state.effect.stateFormOffer,
  stateNotification: state.effect.Notification

})

const mapDispatchToProps = (dispatch) => {

  return {
    onChangeStateForm: () => {
      dispatch(effectAction.changeStateForm())
    },
    onChangeStateNotification: () => {
      dispatch(effectAction.changeStateNotification())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)

