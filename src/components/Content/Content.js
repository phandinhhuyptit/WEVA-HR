import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import ListOffers from './ListOffers/ListOffers';



const { Content } = Layout;
class content extends Component {
    static propTypes = {
        prop: PropTypes
    }
    render() {
        return (
            <Content
                style={{
                    background: "#fff",
                    padding:'0px 10px 0px ',
                    margin: 0,
                    minHeight: 280,
                    overflow : 'hidden'
                }}
                
            >
                <ListOffers/>
           
        </Content>
        )
    }
}
export default content;