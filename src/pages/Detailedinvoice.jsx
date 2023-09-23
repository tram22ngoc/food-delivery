import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Detaileinvoice = () => {
  const navigate = useNavigate();
  const handleback = () => {
    navigate("/bills");
  };
  return (
    <>
      <div className="container">
        <div class="row m-2  border border-1">
          <div class="col-md-12">
            <div className="row border border-1">
              <div className="col-sm-6 align-self-center">
                <h2>Detaile Invoice</h2>
              </div>
              <div className="col text-end align-self-center">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleback}
                >
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
            <div className="row">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Product Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <th>Vegetarian Pizza</th>
                    <th>$115</th>
                    <th>1</th>
                  </tr>
                  <tr>
                    <th>2</th>
                    <th>Chicken Burger</th>
                    <th>$24</th>
                    <th>1</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detaileinvoice;
