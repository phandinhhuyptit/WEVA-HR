/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Layout } from 'antd';


import Header from './Header/Header';
import BackGround from './Background';

const layoutPage = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => (
      <>
        <Layout>
          <BackGround />
          <Header />
          <main>{children}</main>
        </Layout>
      </>
    )}
  />
)
layoutPage.propTypes = {
  children: PropTypes.node.isRequired,
}


export default layoutPage;

