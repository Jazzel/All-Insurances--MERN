import React from "react";
import { Link } from "react-router-dom";
import DashboardHeader from "../Components/DashboardHeader";
import Footer from "../Components/Footer";

const AddInsurance = () => {
  return (
    <>
      <DashboardHeader>Dashboard</DashboardHeader>
      <section>
        <div className="container p-5">
          <h1
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link
              style={{
                padding: 0,
                margin: "0 15px 8px 0",
                textDecoration: "none",
              }}
              className="text-dark"
              to="/dashboard"
            >
              {"<"}
            </Link>
            Add Insurance
          </h1>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AddInsurance;
