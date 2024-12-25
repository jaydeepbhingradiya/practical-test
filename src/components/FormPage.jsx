import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addEntry, updateEntry } from "../redux/crudSlice";

const FormPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const entries = useSelector((state) => state.crud.entries);

  const [formData, setFormData] = useState({ id: "", name: "" });

  useEffect(() => {
    if (id) {
      const entry = entries.find((entry) => entry.id === id);
      if (entry) setFormData(entry);
    }
  }, [id, entries]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateEntry(formData));
    } else {
      dispatch(addEntry({ ...formData, id: new Date().getTime().toString() }));
    }
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h1>{id ? "Update" : "Add"} Entry</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
