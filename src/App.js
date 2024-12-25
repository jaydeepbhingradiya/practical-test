import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import FormPage from "./components/FormPage";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<FormPage />} />
          <Route path="/edit/:id" element={<FormPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
