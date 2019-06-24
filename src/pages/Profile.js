import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Layout} from 'antd';

import LayoutPage from '../components/layout';
import SEO from '../components/seo';
import Sider from '../components/Sider/Sider';
import Profile from '../components/Profile/Profile';


class Login extends Component {
    static propTypes = {
        prop: PropTypes
    }
    render() {
        return (
            <LayoutPage>
                <SEO title="Profile" />
                <Layout style={{ backgroundColor : 'white' }}>                    
                    <Sider/>
                    <Profile/>
                </Layout>
            </LayoutPage>
        )
    }
}
export default Login;