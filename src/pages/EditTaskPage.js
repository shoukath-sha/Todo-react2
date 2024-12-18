import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch  API
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data); 
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message); 
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditTaskPage;

