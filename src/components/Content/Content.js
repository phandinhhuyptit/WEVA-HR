import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
const { Content } = Layout

class content extends Component {
    static propTypes = {
        prop: PropTypes
    }
    render() {
        return (
            <Content
                style={{
                    background: "#fff",
                    padding: 24,
                    margin: 0,
                    minHeight: 280
                }}
            >
                Content
        </Content>
        )
    }
}
export default content;