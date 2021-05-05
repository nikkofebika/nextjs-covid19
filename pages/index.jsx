import _fetch from 'isomorphic-fetch';
import Head from 'next/Head'
import React from 'react'
import Dashboard from '../components/dashboard'
import config from '../config.json';

// const index = (props) => {
//     return (
//         <>
//             <Head>
//                 <title>Kawal Conora</title>
//             </Head>
//             <Dashboard isGlobal={true} data={props.items} />
//         </>
//     )
// }

// index.getInitialProps = async (ctx) => {
//     const res = await _fetch(config['kawal-corona'].base_url, { method: 'get', headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'x-www-form-urlencoded'}});
//     const items = await res.json();
//     return { items }
// }
// export default index;

export default class index extends React.Component {
    static async getInitialProps() {
      const res = await _fetch(config['kawal-corona'].base_url, { method: 'get', headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'x-www-form-urlencoded' } });
      const items = await res.json();
      return { items }
    }
    render() {
      return (
        <>
          <Head>
            <title>Kawal Conora</title>
          </Head>
          <Dashboard isGlobal={true} data={this.props.items} />
        </>
      )
    }
  }