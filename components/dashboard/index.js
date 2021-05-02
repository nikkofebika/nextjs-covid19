import React from "react";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import CardStatus from "./CardStatus";
import Grafik from "./Grafik";
export default function Dashboard() {
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
            bg="bg-danger"
            title="Meninggal"
            total="100000"
            icon="images/meninggal.png"
            className="col-xs-12 col-md-6 col-xl-3"
          />
          <CardStatus
            bg="bg-primary"
            title="Positif"
            total="100000"
            icon="images/positif.png"
            className="col-xs-12 col-md-6 col-xl-3"
          />
          <CardStatus
            bg="bg-success"
            title="Sembuh"
            total="100000"
            icon="images/sembuh.png"
            className="col-xs-12 col-md-6 col-xl-3"
          />
          <CardStatus
            bg="bg-info"
            title="Meninggal"
            total="100000"
            icon="images/meninggal.png"
            className="col-xs-12 col-md-6 col-xl-3"
          />
        </div>
        <Grafik />
      </div>
      <Footer />
    </div>
  );
}
