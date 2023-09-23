import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const SupplierEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleback = () => {
    navigate("/supplier");
  };
  return (
    <>
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-sm-12 mb-3 ">
            <div className="card bg-primary">
              <div className="card-header text-white">
                <h4 className="card-title mb-0">
                  {Number(id) === 0 ? "New" : "Edit"} Supplier
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
                        htmlFor="phonenumber"
                        className="col-3 col-form-label text-start text-nowrap"
                      >
                        Phone Number:
                      </label>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          id="phonenumber"
                        />
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

export default SupplierEdit;
