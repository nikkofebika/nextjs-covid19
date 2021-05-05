import _fetch from 'isomorphic-fetch';
import Head from 'next/Head'
import React from "react";
import Dashboard from "../components/dashboard";
import config from '../config.json';

export default class indonesia extends React.Component {
  static async getInitialProps() {
    const res = await _fetch(`${config['kawal-corona'].base_url}/indonesia`, { method: 'get', headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'x-www-form-urlencoded' } });
    const items = await res.json();
    return { items }
  }
  render() {
    return (
      <>
        <Head>
          <title>Kawal Conora - Indonesia</title>
        </Head>
        <Dashboard isGlobal={false} data={this.props.items} />
      </>
    )
  }
}

