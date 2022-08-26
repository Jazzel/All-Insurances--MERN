import React from "react";
import { Link, useParams } from "react-router-dom";
import DashboardHeader from "../Components/DashboardHeader";
import Footer from "../Components/Footer";

const UpdateInsurance = () => {
  const { id } = useParams();

  console.log(id);
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
            Update Insurance
          </h1>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UpdateInsurance;
