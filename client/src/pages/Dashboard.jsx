import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "../Components/DashboardHeader";
import Footer from "../Components/Footer";

const Dashboard = () => {
  const navigate = useNavigate();
  const [insurances, setInsurances] = React.useState([
    {
      id: 1,
      title: "Insurance 1",
      description: "Insurance 1 description",
      type: "Insurance 1 type",
    },
  ]);

  return (
    <>
      <DashboardHeader>Dashboard</DashboardHeader>
      <section>
        <div className="container p-5">
          <h1>Insurances</h1>
          <div className="row">
            <div className="col-2 offset-10">
              <button
                className="w-100 float-right btn btn-primary"
                onClick={() => navigate(`/dashboard/add-insurance/`)}
              >
                + Add Insurance
              </button>
            </div>
          </div>
          <br />
          <table className="table table-striped w-100 table-inverse table-responsive">
            <thead className="thead-inverse">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Insurance Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {insurances.map(({ id, title, type }) => (
                <tr onClick={() => {}}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{type}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        navigate(`/dashboard/update-insurance/${id}`)
                      }
                    >
                      Update
                    </button>{" "}
                    |{" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        if (
                          window.confirm("Are you sure you want to delete?")
                        ) {
                          alert("Insurance removed !");
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <br />
          <br />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Dashboard;
