import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Values from "values.js";
import SingleColor from "./SingleColor";
import Footer from "./Footer";

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const [color, setColor] = useState("#f15025");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-lg-3">
          {/* <section> */}
          <h3>Color generator</h3>
          <form onSubmit={handleSubmit}>
            <input
              className={error ? "form-control is-invalid" : "form-control"}
              type="text"
              value={color}
              placeholder="#f15025"
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
            <button className="btn btn-sm btn-dark my-2" type="submit">
              View shades
            </button>
          </form>
          {/* </section> */}
        </div>
      </div>
      <div className="border-bottom my-3"></div>
      <div className="row">
        {/* <div className="col-lg-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Hello</h5>
              <p className="card-text">text</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Hello2</h5>
              <p className="card-text">text2</p>
            </div>
          </div>
        </div> */}
        {list.map((color, index) => {
          return (
            <SingleColor key={index} {...color} index={index} hex={color.hex} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
