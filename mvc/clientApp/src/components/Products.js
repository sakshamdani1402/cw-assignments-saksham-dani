import React ,{useEffect, useState} from 'react'
import {Row, Col} from 'reactstrap'
import Footer from "./Footer.js";
import Filter from './Filter.js';
import Item from './Item.js';
import { getAll } from '../services/ProductService.js';


const Products = () => {  
  const [products,setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(30);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    async function fetchData(){
        const response = getAll(page,brand,category,price);
        response.then(item => {setProducts(item.products); setTotal(item.total)});
        // response.then(item => console.log(item));
    }
    fetchData();
  }, [page,brand,category,price])
  
 
  return (
    <>
      <Row className='d-flex justify-content-between top-row p-3'>
        <h1 className=''>All Products</h1>
        <Filter setTotal={setTotal} setPage = {setPage}
          setBrand={setBrand} setCategory={setCategory} setNewPrice={setPrice} />
      </Row>
      <Row>
        {
        
          products.length===0 ? (<h4 className='p-5 m-5'> No Products to display</h4>) :
          
            products.map(item => {
              return (<Col key={item.id} className="col-md-6"><Item key={item.id} title={item.title} 
              category={item.category}
              price={item.price}
              stock={item.stock}
              discount={item.discountPercentage}
              imgs={item.images}
              thumb={item.thumbnail}
              description={item.description}
              rating={item.rating}
              brand={item.brand}
              /></Col>) 
            })
          
        }
      </Row>
      {
        products.length>0 && <Footer pageInit={page} total={Math.ceil(total/6)} setPage={setPage} />
      }
      
    </>
  )
}

export default Products