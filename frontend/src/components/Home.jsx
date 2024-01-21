import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([])
  
  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/getproducts');
      const data = response.data;
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container" style={{marginTop:'50px'}}>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card" style={{ width: '100%', border:"1px solid light gray"}}>
              <img src={product.image} className="card-img-top" style={{height:"300px",borderBottom:"1px solid light grey"}} alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <a href="#" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home