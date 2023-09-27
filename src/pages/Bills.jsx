// import React, { useState, useEffect } from "react";
import Menu from "../components/Admin/Menu";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import ModalDeleteBill from "./../components/Admin/ModalDeleteBill";
import { useNavigate } from "react-router-dom";

const Bills = () => {
  const navigate = useNavigate();

  const showEditPane = (id) => {
    navigate(`/bills/${id}`);
  };

  return (
    <>
      <Menu />
      <div className="row m-2 border border-1">
        <div className="col-md-12">
          <div className="row border border-1">
            <div className="col-sm-6 align-self-center">
              <h2>Bills</h2>
            </div>
          </div>
          <div className="row">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Number</th>
                  <th>ID</th>
                  <th>User ID</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Payment time</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Bill01</td>
                  <td>Us01</td>
                  <td>$139</td>
                  <td>
                    <div>
                      <p className="d-inline-flex gap-1">
                        <button
                          type="button"
                          className="text-primary"
                          onClick={() => showEditPane(1)}
                        >
                          More...
                        </button>
                      </p>
                    </div>
                  </td>
                  <td>2023/05/25</td>
                  <td>
                    <div>
                      {/* Button trigger modal */}
                      <button className="link-warning">
                        <i className="fa-solid fa-pen"></i>
                      </button>
                      <span> </span>
                      <ModalDeleteBill />
                    </div>
                  </td>
                </tr>
                {/* Các dòng dữ liệu khác ở đây */}
              </tbody>
            </table>
            <div className="row">
              <div className="col"></div>
              <div className="col col-auto">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <button className="page-link" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                      </button>
                    </li>
                    <li className="page-item">
                      <button className="page-link">1</button>
                    </li>
                    <li className="page-item">
                      <button className="page-link">2</button>
                    </li>
                    <li className="page-item">
                      <button className="page-link">3</button>
                    </li>
                    <li className="page-item">
                      <button className="page-link" aria-label="Next">
                        <span aria-hidden="true">»</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bills;
