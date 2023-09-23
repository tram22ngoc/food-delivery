import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const ProductsEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleback = () => {
    navigate("/products");
  };
  return (
    <>
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-sm-12 mb-3 ">
            <div className="card bg-primary">
              <div className="card-header text-white">
                <h4 className="card-title mb-0">
                  {Number(id) === 0 ? "New" : "Edit"} Product
                </h4>
              </div>
              <div className="card-body bg-white rounded-bottom">
                <div className="mb-3 row">
                  <div className="col-6">
                    <div className="row">
                      <label
                        htmlFor="Number"
                        className="col-3 col-form-label text-start"
                      >
                        Number:
                      </label>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          id="Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <label
                        htmlFor="ID"
                        className="col-3 col-form-label text-start"
                      >
                        ID:
                      </label>
                      <div className="col">
                        <input type="text" className="form-control" id="ID" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-6">
                    <div className="row">
                      <label
                        htmlFor="Name"
                        className="col-3 col-form-label text-start"
                      >
                        Name:
                      </label>
                      <div className="col">
                        <input type="text" className="form-control" id="Name" />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <label
                        htmlFor="Price"
                        className="col-3 col-form-label text-start"
                      >
                        Price:
                      </label>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          id="Price"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-6">
                    <div className="row">
                      <label
                        htmlFor="Description"
                        className="col-3 col-form-label text-start"
                      >
                        Description:
                      </label>
                      <div className="col">
                        <textarea
                          className="form-control"
                          rows="3"
                          id="Description"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <label
                        htmlFor="Category"
                        className="col-3 col-form-label text-start"
                      >
                        Category:
                      </label>
                      <div className="col">
                        <select
                          id="Category"
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Open this select menu</option>
                          <option value={1}>Burger</option>
                          <option value={2}>Pizza</option>
                          <option value={3}>Bread</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col text-end">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleback}
                    >
                      Close
                    </button>
                  </div>
                  <div className="col text-start">
                    <button type="button" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsEdit;
