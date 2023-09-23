import React, { useState, useEffect } from "react";
import Menu from "../components/Admin/Menu";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import ModalDeleteBill from "./../components/Admin/ModalDeleteBill";
import { useNavigate } from "react-router-dom";
const Bills = () => {
  const navigate = useNavigate();
  const showEditPane = (e: any, id: Number) => {
    if (e) e.preventDefault();
    navigate(`/bills/${id}`);
  };
  return (
    <>
      <Menu />
      <div class="row m-2  border border-1">
        <div class="col-md-12">
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
                  <th>1</th>
                  <th>Bill01</th>
                  <th>Us01</th>
                  <th>$139</th>
                  <th>
                    <div>
                      <p className="d-inline-flex gap-1">
                        <a
                          type="button"
                          className="text-primary"
                          onClick={(e) => showEditPane(null, 1)}
                        >
                          More...
                        </a>
                      </p>
                    </div>
                  </th>
                  <th>2023/05/25</th>
                  <th>
                    <div>
                      {/* Button trigger modal */}
                      <a href="#" className="link-warning">
                        <i class="fa-solid fa-pen"></i>
                      </a>
                      <span> </span>
                      <ModalDeleteBill />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>2</th>
                  <th>Bill02</th>
                  <th>Us02</th>
                  <th>$115</th>
                  <th>
                    <div>
                      <p className="d-inline-flex gap-1">
                        <a
                          type="button"
                          className="text-primary"
                          onClick={(e) => showEditPane(null, 2)}
                        >
                          More...
                        </a>
                      </p>
                    </div>
                  </th>
                  <th>2023/05/25</th>
                  <th>
                    <div>
                      {/* Button trigger modal */}
                      <a href="#" className="link-warning">
                        <i class="fa-solid fa-pen"></i>
                      </a>
                      <span> </span>
                      <ModalDeleteBill />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>3</th>
                  <th>Bill03</th>
                  <th>Us02</th>
                  <th>$24</th>
                  <th>
                    <div>
                      <p className="d-inline-flex gap-1">
                        <a
                          type="button"
                          className="text-primary"
                          onClick={(e) => showEditPane(null, 3)}
                        >
                          More...
                        </a>
                      </p>
                    </div>
                  </th>
                  <th>2023/05/25</th>
                  <th>
                    <div>
                      {/* Button trigger modal */}
                      <a href="#" className="link-warning">
                        <i class="fa-solid fa-pen"></i>
                      </a>
                      <span> </span>
                      <ModalDeleteBill />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>4</th>
                  <th>Bill04</th>
                  <th>Us03</th>
                  <th>$330</th>
                  <th>
                    <div>
                      <p className="d-inline-flex gap-1">
                        <a
                          type="button"
                          className="text-primary"
                          onClick={(e) => showEditPane(null, 4)}
                        >
                          More...
                        </a>
                      </p>
                    </div>
                  </th>
                  <th>2023/05/25</th>
                  <th>
                    <div>
                      {/* Button trigger modal */}
                      <a href="#" className="link-warning">
                        <i class="fa-solid fa-pen"></i>
                      </a>
                      <span> </span>
                      <ModalDeleteBill />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>5</th>
                  <th>Bill05</th>
                  <th>Us04</th>
                  <th>$378</th>
                  <th>
                    <div>
                      <p className="d-inline-flex gap-1">
                        <a
                          type="button"
                          className="text-primary"
                          onClick={(e) => showEditPane(null, 5)}
                        >
                          More...
                        </a>
                      </p>
                    </div>
                  </th>
                  <th>2023/05/25</th>
                  <th>
                    <div>
                      {/* Button trigger modal */}
                      <a href="#" className="link-warning">
                        <i class="fa-solid fa-pen"></i>
                      </a>
                      <span> </span>
                      <ModalDeleteBill />
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>
            <div className="row">
              <div className="col"></div>
              <div className="col col-auto">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">»</span>
                      </a>
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
