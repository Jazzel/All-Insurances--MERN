import React from "react";
import { useParams } from "react-router-dom";
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
          <h1>Update Insurance</h1>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UpdateInsurance;
