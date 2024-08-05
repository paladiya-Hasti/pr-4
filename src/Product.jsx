import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

const Product = () => {
  let [products, setproducts] = useState([]);
  let [product, setproduct] = useState({
    title: "",
    img: "",
    price: "",
  });

  const handledata = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setproduct({ ...product, [name]: value });
  };
  const getdata = async () => {
    let res = await axios.get("http://localhost:3000/product");
    setproducts(res.data);
  };
  useEffect(() => {
    getdata();
  }, []);
  const handlesubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://localhost:3000/product", product);
    console.log(res.data);
    setproducts("res");
  };

  return (
    <div>
      <h2 className="text-center p-2">Product Form</h2>
      <form className="w-50 m-auto p-3" onSubmit={handlesubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label ">
            title
          </label>
          <input
            type="text"
            className="form-control"
            value={product.title}
            name="title"
            onChange={handledata}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            img
          </label>
          <input
            type="text"
            className="form-control"
            value={product.img}
            name="img"
            onChange={handledata}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            price
          </label>
          <input
            type="nuber"
            className="form-control"
            value={product.price}
            name="price"
            onChange={handledata}
          />
        </div>

        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
      <div className="box">
        {products.map((ele) => (
          <div className="box1">
            <img src={ele.img} />
            <h4>{ele.title}</h4>
            <p>{ele.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
