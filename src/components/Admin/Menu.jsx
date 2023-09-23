import React, { useState, useEffect } from "react";
import "../../styles/admin.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <div className="offcanvas offcanvas-start" id="demo">
        <div className="offcanvas-header">
          <h1 className="offcanvas-title">
            <h1>Foodie</h1>
          </h1>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          />
        </div>
        <div className="offcanvas-body">
          <div className="row mb-3">
            <Link className="text-dark" to="/products">
              <i className="fa-solid fa-store"></i> Products
            </Link>
          </div>
          <div className="row mb-3">
            <Link className="text-dark" to="/users">
              <i class="fa-solid fa-users"></i> Users
            </Link>
          </div>
          <div className="row mb-3">
            <Link className="text-dark" to="/bills">
              <i class="fa-solid fa-basket-shopping"></i> Bills
            </Link>
          </div>
          <div className="row mb-3">
            <Link className="text-dark" to="/supplier">
              <i class="fa-solid fa-truck-field"></i> Supplier
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-3">
        <button
          id="btn1"
          className="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#demo"
        >
          <i className="fa-solid fa-bars" />
        </button>
      </div>
    </div>
  );
};

export default Menu;
