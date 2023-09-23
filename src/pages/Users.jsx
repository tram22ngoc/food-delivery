import React, { useState, useEffect } from "react";
import Menu from "../components/Admin/Menu";
import ModalDeleteUser from "../components/Admin/ModalDeleteUser";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Users = () => {
  const navigate = useNavigate();
  const showEditPane = (e: any, id: Number) => {
    if (e) e.preventDefault();
    navigate(`/users/${id}`);
  };
  return (
    <>
      <Menu />
      <div class="row m-2  border border-1">
        <div class="col-md-12">
          <div className="row border border-1">
            <div className="col-sm-6 align-self-center">
              <h2>Users</h2>
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
                  <th>Full Name</th>
                  <th>Mail</th>
                  <th>Password</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <th>Us01</th>
                  <th>Sâm Vỹ Chính</th>
                  <th>samvychinh@gmail.com</th>
                  <th>*********</th>
                  <th>
                    <div>
                      <a
                        type="button"
                        className="text-warning"
                        onClick={(e) => showEditPane(null, 1)}
                      >
                        <i class="fa-solid fa-pen"></i>
                      </a>
                      <span> </span>
                      <ModalDeleteUser />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>2</th>
                  <th>Us02</th>
                  <th>Sâm Thị Chính</th>
                  <th>samthichinh@gmail.com</th>
                  <th>*********</th>
                  <th>
                    <div>
                      <a
                        type="button"
                        className="text-warning"
                        onClick={(e) => showEditPane(null, 2)}
                      >
                        <i class="fa-solid fa-pen"></i>
                      </a>
                      <span> </span>
                      <ModalDeleteUser />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>3</th>
                  <th>Us03</th>
                  <th>Sâm Văn Chính</th>
                  <th>samvanchinh@gmail.com</th>
                  <th>*********</th>
                  <th>
                    <div>
                      <a
                        type="button"
                        className="text-warning"
                        onClick={(e) => showEditPane(null, 3)}
                      >
                        <i class="fa-solid fa-pen"></i>
                      </a>
                      <span> </span>
                      <ModalDeleteUser />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>4</th>
                  <th>Us04</th>
                  <th>Nguyễn Văn Chính</th>
                  <th>nguyenvanchinh@gmail.com</th>
                  <th>*********</th>
                  <th>
                    <div>
                      <a
                        type="button"
                        className="text-warning"
                        onClick={(e) => showEditPane(null, 4)}
                      >
                        <i class="fa-solid fa-pen"></i>
                      </a>
                      <span> </span>
                      <ModalDeleteUser />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>5</th>
                  <th>Us05</th>
                  <th>Đinh Quốc Chính</th>
                  <th>dinhquocchinh@gmail.com</th>
                  <th>*********</th>
                  <th>
                    <div>
                      <a
                        type="button"
                        className="text-warning"
                        onClick={(e) => showEditPane(null, 5)}
                      >
                        <i class="fa-solid fa-pen"></i>
                      </a>
                      <span> </span>
                      <ModalDeleteUser />
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

export default Users;
