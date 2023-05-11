import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();   
        //     setProducts(data);
        // };
        // fetchProducts();
    },[]);

    

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
    return (
      <>

 <div className='container'>
  <div className='row'>
    <div className='col-lg-12'>
      <h2 className='text-center pt-3 pb-3 text-warning border-bottom'>Our Latest Products</h2>
    </div>
  </div>
 </div>

    <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-3 mb-4 mt-4">
                <div
                  className="card h-100 text-center p-4"
                  key={product.id}
                  style={{ width: "18rem" }}
                >
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title"> {product.title.substring(0, 12)}</h5>
                    <h6 className="">{`$${product.price}`}</h6>
                    <button onClick={() => handleAdd(product)} className="btn btn-outline-danger">
                 Add to cart
                 </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </>);
};

export default Products;
