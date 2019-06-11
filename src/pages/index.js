import React from "react";
import { Link } from "gatsby";
import LayoutPage from "../components/layout";
import { Layout } from 'antd';
import Sider from "../components/Sider/Sider";
import SEO from "../components/seo";
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import 'antd/dist/antd.css';
const IndexPage = () => (
  <LayoutPage>
    <SEO title="Dasboard" />
    <Layout>
      <Header />
      <Layout>
        <Sider />
        <Content />
      </Layout>
    </Layout>
  </LayoutPage>

)
export default IndexPage
