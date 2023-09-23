import React, { useState, useEffect } from "react";
import Menu from "../components/Admin/Menu";
import ModalDeleteProduct from "../components/Admin/ModalDeleteProduct";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate();
  const showEditPane = (e: any, id: Number) => {
    if (e) e.preventDefault();
    navigate(`/products/${id}`);
  };
  return (
    <>
      <Menu />
      <div class="row m-2  border border-1">
        <div class="col-md-12">
          <div className="row border border-1">
            <div className="col-sm-6 align-self-center">
              <h2>Products</h2>
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
            <div className="row m-2 mt-0">
              <div className="col-auto align-self-center">Select category:</div>
              <div className="col">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select category</option>
                  <option value={1}>Burger</option>
                  <option value={2}>Pizza</option>
                  <option value={3}>Bread</option>
                </select>
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
                  <th>Price</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <th>Pz01</th>
                  <th>Vegetarian Pizza</th>
                  <th>$115</th>
                  <th>
                    <div>
                      <p className="d-inline-flex gap-1">
                        <a
                          className=""
                          data-bs-toggle="collapse"
                          href="#Pz01"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          More...
                        </a>
                      </p>
                      <div className="collapse" id="Pz01">
                        <div className="card card-body bg-danger bg-opacity-10 ">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Soluta ad et est, fugiat repudiandae neque illo
                          delectus commodi magnam explicabo autem voluptates
                          eaque velit vero facere mollitia. Placeat rem,
                          molestiae error obcaecati enim doloribus impedit
                          aliquam, maiores qui minus neque.
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>Pizza</th>
                  <th>
                    <div>
                      {/* Button trigger modal */}
                      <a
                        type="button"
                        className="text-warning"
                        onClick={(e) => showEditPane(null, 1)}
                      >
                        <i class="fa-solid fa-pen"></i>
                      </a>
                      <span> </span>
                      <ModalDeleteProduct />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>2</th>
                  <th>Hb01</th>
                  <th>Chicken Burger</th>
                  <th>$24</th>
                  <th>
                    <div>
                      <p className="d-inline-flex gap-1">
                        <a
                          className=""
                          data-bs-toggle="collapse"
                          href="#Hb01"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          More...
                        </a>
                      </p>
                      <div className="collapse" id="Hb01">
                        <div className="card card-body bg-danger bg-opacity-10">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Soluta ad et est, fugiat repudiandae neque illo
                          delectus commodi magnam explicabo autem voluptates
                          eaque velit vero facere mollitia. Placeat rem,
                          molestiae error obcaecati enim doloribus impedit
                          aliquam, maiores qui minus neque.
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>Burger</th>
                  <th>
                    <div>
                      {/* Button trigger modal */}
                      <a
                        type="button"
                        className="text-warning"
                        onClick={(e) => showEditPane(null, 2)}
                      >
                        <i class="fa-solid fa-pen"></i>
                      </a>
                      <span> </span>
                      <ModalDeleteProduct />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>3</th>
                  <th>Pz02</th>
                  <th>Double Cheese Margherita</th>
                  <th>$110</th>
                  <th>
                    <div>
                      <p className="d-inline-flex gap-1">
                        <a
                          className=""
                          data-bs-toggle="collapse"
                          href="#Pz02"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          More...
                        </a>
                      </p>
                      <div className="collapse" id="Pz02">
                        <div className="card card-body bg-danger bg-opacity-10">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Soluta ad et est, fugiat repudiandae neque illo
                          delectus commodi magnam explicabo autem voluptates
                          eaque velit vero facere mollitia. Placeat rem,
                          molestiae error obcaecati enim doloribus impedit
                          aliquam, maiores qui minus neque.
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>Pizza</th>
                  <th>
                    <div>
                      {/* Button trigger modal */}
                      <a
                        type="button"
                        className="text-warning"
                        onClick={(e) => showEditPane(null, 3)}
                      >
                        <i class="fa-solid fa-pen"></i>
                      </a>
                      <span> </span>
                      <ModalDeleteProduct />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>4</th>
                  <th>Pz03</th>
                  <th>Mexican Green Wave</th>
                  <th>$110</th>
                  <th>
                    <div>
                      <p className="d-inline-flex gap-1">
                        <a
                          className=""
                          data-bs-toggle="collapse"
                          href="#Pz03"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          More...
                        </a>
                      </p>
                      <div className="collapse" id="Pz03">
                        <div className="card card-body bg-danger bg-opacity-10">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Soluta ad et est, fugiat repudiandae neque illo
                          delectus commodi magnam explicabo autem voluptates
                          eaque velit vero facere mollitia. Placeat rem,
                          molestiae error obcaecati enim doloribus impedit
                          aliquam, maiores qui minus neque.
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>Pizza</th>
                  <th>
                    <div>
                      {/* Button trigger modal */}
                      <a
                        type="button"
                        className="text-warning"
                        onClick={(e) => showEditPane(null, 4)}
                      >
                        <i class="fa-solid fa-pen"></i>
                      </a>
                      <span> </span>
                      <ModalDeleteProduct />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>5</th>
                  <th>Hb02</th>
                  <th>Cheese Burger</th>
                  <th>$24</th>
                  <th>
                    <div>
                      <p className="d-inline-flex gap-1">
                        <a
                          className=""
                          data-bs-toggle="collapse"
                          href="#Hb02"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          More...
                        </a>
                      </p>
                      <div className="collapse" id="Hb02">
                        <div className="card card-body bg-danger bg-opacity-10">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Soluta ad et est, fugiat repudiandae neque illo
                          delectus commodi magnam explicabo autem voluptates
                          eaque velit vero facere mollitia. Placeat rem,
                          molestiae error obcaecati enim doloribus impedit
                          aliquam, maiores qui minus neque.
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>Burger</th>
                  <th>
                    <div>
                      {/* Button trigger modal */}
                      <a
                        type="button"
                        className="text-warning"
                        onClick={(e) => showEditPane(null, 5)}
                      >
                        <i class="fa-solid fa-pen"></i>
                      </a>
                      <span> </span>
                      <ModalDeleteProduct />
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

export default Products;
