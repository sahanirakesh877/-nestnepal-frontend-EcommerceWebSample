import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-center text-danger pt-3 pb-3 border-bottom">
              our Added Products
            </h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-6  mb-4 mt-4">
                <div
                  className="card h-100 text-center p-4 "
                  key={product.id}
                  style={{ width: "25rem" }}
                >
                  <img
                    src={product.image}
                    className="card-img-top text-center"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body w-100">
                    <h5 className="card-title">
                      {" "}
                      {product.title.substring(0, 12)}
                    </h5>
                    <h6 className="">{`$${product.price}`}</h6>
                    <button
                      onClick={() => handleRemove(product.id)}
                      className="btn btn-outline-primary"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
