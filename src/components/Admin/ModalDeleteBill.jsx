import React, { useState, useEffect } from "react";
const ModalDeleteBill = () => {
  return (
    <>
      <a
        type="button"
        className="text-danger"
        data-bs-toggle="modal"
        data-bs-target="#DeleteBill"
      >
        <i class="fa-solid fa-trash-can text-danger"></i>
      </a>
      <div
        className="modal fade"
        id="DeleteBill"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Delete Bill
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">Are you sure to delete this Bill?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button type="button" className="btn btn-primary">
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDeleteBill;
