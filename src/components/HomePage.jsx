import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const entries = useSelector((state) => state.crud.entries);

  return (
    <div className="container mt-5">
      <h1>CRUD Application</h1>
      <Link to="/add" className="btn btn-primary mb-3">
        Add Entry
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>{entry.name}</td>
              <td>
                <Link to={`/edit/${entry.id}`} className="btn btn-secondary">
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
