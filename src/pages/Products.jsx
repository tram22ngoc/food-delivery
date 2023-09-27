import React, { useEffect, useState } from "react";
import Menu from "../components/Admin/Menu";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, fetchData } from "../store/admin/productsSlice";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

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
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Burger">Burger</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Bread">Bread</option>
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
                  <th>Image</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>
                {Array.isArray(products) && products.length > 0 ? (
                  products
                    .filter((product) => {
                      if (selectedCategory === "All") {
                        return true; // Show all products if no category is selected
                      } else {
                        return product.category === selectedCategory;
                      }
                    })
                    .map((product) => (
                      <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>${product.price}</td>
                        <td>
                          <div className="flex">
                            <img
                              src={product.image1}
                              alt=""
                              width="100px"
                              height="100px"
                            />
                            <img
                              src={product.image2}
                              alt=""
                              className="mx-2"
                              width="100px"
                              height="100px"
                            />
                            <img
                              src={product.image3}
                              alt=""
                              width="100px"
                              height="100px"
                            />
                          </div>
                        </td>
                        <td style={{ maxWidth: "300px" }}>{product.desc}</td>
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
                              style={{ cursor: "pointer" }}
                              onClick={() => handleDeleteProduct(product.id)}
                            ></i>
                          </div>
                        </td>
                      </tr>
                    ))
                ) : (
                  <tr>
                    <td colSpan="6">No products found.</td>
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
