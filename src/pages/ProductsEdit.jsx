import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { firestore } from "../firebase/config.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/admin/productsSlice.js";

const ProductsEdit = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedProduct = useSelector((state) =>
    state.product.products.find((product) => product.id === id)
  );
  const isUpdate = !!id;

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleBack = () => {
    navigate("/products");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productsRef = firestore.collection("products");
      if (isUpdate && selectedProduct) {
        await productsRef.doc(id).update({
          name,
          category,
          price: parseFloat(price),
          desc,
          image1,
          image2,
          image3,
        });
      } else {
        await productsRef.add({
          name,
          category,
          price: parseFloat(price),
          desc,
          image1,
          image2,
          image3,
        });
      }

      navigate("/products");
    } catch (error) {
      console.error("Error adding/updating product:", error);
    }
  };

  useEffect(() => {
    dispatch(fetchData());
    if (isUpdate && selectedProduct) {
      setName(selectedProduct.name);
      setPrice(selectedProduct.price.toString());
      setImage1(selectedProduct.image1);
      setImage2(selectedProduct.image2);
      setImage3(selectedProduct.image3);
      setDesc(selectedProduct.desc);
      setCategory(selectedProduct.category);
    }
  }, [dispatch]);

  return (
    <>
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-sm-12 mb-3 ">
            <div className="card bg-primary">
              <div className="card-header text-white">
                <h4 className="card-title mb-0">
                  {id === 0 ? "New" : "Edit"} Product
                </h4>
              </div>
              <div className="card-body bg-white rounded-bottom">
                <form onSubmit={handleSubmit}>
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
                          <input
                            required
                            type="text"
                            className="form-control"
                            id="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <label
                          htmlFor="Price"
                          className="col-3 col-form-label text-start"
                        >
                          Price:
                        </label>
                        <div className="col">
                          <input
                            required
                            type="text"
                            className="form-control"
                            id="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-6">
                      <div className="row">
                        <label
                          htmlFor="image1"
                          className="col-3 col-form-label text-start"
                        >
                          Image:
                        </label>
                        <div className="col">
                          <input
                            required
                            type="text"
                            className="form-control"
                            id="image1"
                            value={image1}
                            onChange={(e) => setImage1(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <label
                          htmlFor="image2"
                          className="col-3 col-form-label text-start"
                        >
                          Image 2:
                        </label>
                        <div className="col">
                          <input
                            required
                            type="text"
                            className="form-control"
                            id="image2"
                            value={image2}
                            onChange={(e) => setImage2(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="row">
                      <label
                        htmlFor="image3"
                        className="col-3 col-form-label text-start"
                      >
                        Image 3:
                      </label>
                      <div className="col">
                        <input
                          required
                          type="text"
                          className="form-control"
                          id="image3"
                          value={image3}
                          onChange={(e) => setImage3(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-6">
                      <div className="row">
                        <label
                          htmlFor="Description"
                          className="col-3 col-form-label text-start"
                        >
                          Description:
                        </label>
                        <div className="col">
                          <textarea
                            className="form-control"
                            rows="3"
                            id="Description"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <label
                          htmlFor="Category"
                          className="col-3 col-form-label text-start"
                        >
                          Category:
                        </label>
                        <div className="col">
                          <select
                            id="Category"
                            className="form-select"
                            aria-label="Default select example"
                            onChange={(e) => setCategory(e.target.value)}
                          >
                            <option selected>Open this select menu</option>
                            <option value={"Burger"}>Burger</option>
                            <option value={"Pizza"}>Pizza</option>
                            <option value={"Bread"}>Bread</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col text-end">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleBack}
                      >
                        Close
                      </button>
                    </div>
                    <div className="col text-start">
                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsEdit;
