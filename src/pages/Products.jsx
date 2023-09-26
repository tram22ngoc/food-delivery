import React, { useEffect } from "react";
import Menu from "../components/Admin/Menu";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, fetchData } from "../store/admin/productsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const navigate = useNavigate();
  const showEditPane = (e, id) => {
    if (e) e.preventDefault();
    navigate(`/products/${id}`);
  };
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
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
            <table
              className="table table-striped table-hover text-center"
              style={{
                maxHeight: "200px",
                overflowX: "hidden",
                overflowY: "auto",
              }}
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>#</th>
                </tr>
              </thead>

              <tbody>
                {Array.isArray(products) && products.length > 0 ? (
                  products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>${product.price}</td>
                      <td>{product.desc}</td>
                      <td>
                        <div>
                          {/* Button trigger modal */}
                          <a
                            type="button"
                            className="text-warning"
                            onClick={(e) => showEditPane(null, product.id)}
                          >
                            <i class="fa-solid fa-pen"></i>
                          </a>
                          <span> </span>
                          <i
                            className="fa-solid fa-remove text-danger"
                            onClick={() => handleDeleteProduct(product.id)}
                          ></i>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">Loading...</td>
                  </tr>
                )}
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
