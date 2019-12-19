import React from "react";
import Clients from "../clients/Clients";
import AppNavbar from "./AppNavbar";
import "./dashboard.styles.css";
export default () => {
  return (
    <div className="dashboard-cont">
      <div className="col-md-12 m-0 p-0">
        <AppNavbar />
      </div>

      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Clients />
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};
