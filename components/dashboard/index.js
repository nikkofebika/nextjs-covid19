import React from "react";
import NumberFormat from "react-number-format";
import { sum } from "../../utils/library";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import CardStatus from "./CardStatus";
import Grafik from "./Grafik";
import Table from "./Table";
const Dashboard = (props) => {
  const initStyle = {
    minHeight: "80vh",
  };
  return (
    <div>
      <Navbar />
      <div className="container" style={initStyle}>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <h2>KAWAL COVID</h2>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <p>Informasi Kasus Covid-19</p>
          </div>
        </div>
        <div className="row">
          <CardStatus
            bg="bg-primary"
            title="Positif"
            total={<NumberFormat value={sum("positif", props)} displayType={'text'} thousandSeparator={true} />}
            icon="images/positif.png"
            className="col-xs-12 col-md-6 col-xl-3"
          />
          <CardStatus
            bg="bg-success"
            title="Sembuh"
            total={<NumberFormat value={sum("sembuh", props)} displayType={'text'} thousandSeparator={true} />}
            icon="images/sembuh.png"
            className="col-xs-12 col-md-6 col-xl-3"
          />
          <CardStatus
            bg="bg-danger"
            title="Meninggal"
            total={<NumberFormat value={sum("meninggal", props)} displayType={'text'} thousandSeparator={true} />}
            icon="images/meninggal.png"
            className="col-xs-12 col-md-6 col-xl-3"
          />
          <CardStatus
            bg="bg-info"
            title="Dirawat"
            total={<NumberFormat value={sum("dirawat", props)} displayType={'text'} thousandSeparator={true} />}
            icon="images/dirawat.png"
            className="col-xs-12 col-md-6 col-xl-3"
          />
        </div>
        <Grafik isGlobal={props.isGlobal} data={props.data ? props.data : null} statistik={props.statistik ? props.statistik : null} />
        <Table isGlobal={props.isGlobal} />
      </div>
      <Footer />
    </div>
  );
}
export default Dashboard;