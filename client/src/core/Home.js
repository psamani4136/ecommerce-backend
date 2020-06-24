import React from "react";
import Layout from "./Layout";
import { API } from "../config";

const Home = () => (
  <Layout
    title="Ecommerce Home page"
    description="React Ecommerce shopping centre"
  >
    {API}
  </Layout>
);

export default Home;
