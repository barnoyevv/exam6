import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StarIcon from '@mui/icons-material/Star';
import "./single-page"

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(response => {
        const foundProduct = response.data.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
      })
      .catch(error => {
        console.error("There was an error fetching the product!", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-product-card">
      <div className="card">
        <div className="card-header bg-primary text-center">
          <h3 className="text-white">{product.title}</h3>
        </div>
        <div className="card-body text-center">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
        </div>
        <div className="card-footer">
          <p>{product.description}</p>
          <div className="rate">
            <span><StarIcon sx={{color: "orange"}}/></span>
            <span>{product.rating.rate}</span>
          </div>
          <strong>{product.price}$</strong>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
