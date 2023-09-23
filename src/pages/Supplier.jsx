import React, { useState, useEffect } from "react";
import Menu from "../components/Admin/Menu";
import ModalDeleteSupplier from "./../components/Admin/ModalDeleteSupplier";
import { useNavigate } from "react-router-dom";
const Supplier = () => {
  const navigate = useNavigate();
  const showEditPane = (e: any, id: Number) => {
    if (e) e.preventDefault();
    navigate(`/supplier/${id}`);
  };
  return (
    <>
      <Menu />
      <div class="row m-2  border border-1">
        <div class="col-md-12">
          <div className="row border border-1">
            <div className="col-sm-6 align-self-center">
              <h2>Supplier</h2>
            </div>
            <div className="col-sm-6 text-end align-self-center">
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => showEditPane(null, 0)}
                >
                  <i class="fa-solid fa-circle-plus"></i>Add
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Number</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <th>Pizza 01</th>
                  <th>Pizza Domino's</th>
                  <th>(+84)*** *** ***</th>
                  <th>
                    <div>
                      {/* Button trigger modal */}
                      <a
                        href="#"
                        className="link-warning"
                        onClick={(e) => showEditPane(null, 1)}
                      >
                        <i class="fa-solid fa-pen"></i>
                      </a>
                      <span> </span>
                      <ModalDeleteSupplier />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>2</th>
                  <th>Pizza 02</th>
                  <th>Pizza Hut</th>
                  <th>(+84)*** *** ***</th>

                  <th>
                    <div>
                      {/* Button trigger modal */}
                      <a
                        href="#"
                        className="link-warning"
                        onClick={(e) => showEditPane(null, 2)}
                      >
                        <i class="fa-solid fa-pen"></i>
                      </a>
                      <span> </span>
                      <ModalDeleteSupplier />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>3</th>
                  <th>Bread 01</th>
                  <th>Bread Pew Pew</th>
                  <th>(+84)*** *** ***</th>

                  <th>
                    <div>
                      {/* Button trigger modal */}
                      <a
                        href="#"
                        className="link-warning"
                        onClick={(e) => showEditPane(null, 3)}
                      >
                        <i class="fa-solid fa-pen"></i>
                      </a>
                      <span> </span>
                      <ModalDeleteSupplier />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>4</th>
                  <th>Burger 01</th>
                  <th>Maxi Burger</th>
                  <th>(+84)*** *** ***</th>

                  <th>
                    <div>
                      {/* Button trigger modal */}
                      <a
                        href="#"
                        className="link-warning"
                        onClick={(e) => showEditPane(null, 4)}
                      >
                        <i class="fa-solid fa-pen"></i>
                      </a>
                      <span> </span>
                      <ModalDeleteSupplier />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>5</th>
                  <th>Burger 02</th>
                  <th>Burger King </th>
                  <th>(+84)*** *** ***</th>

                  <th>
                    <div>
                      {/* Button trigger modal */}
                      <a
                        href="#"
                        className="link-warning"
                        onClick={(e) => showEditPane(null, 5)}
                      >
                        <i class="fa-solid fa-pen"></i>
                      </a>
                      <span> </span>
                      <ModalDeleteSupplier />
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

export default Supplier;
