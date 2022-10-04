
import React, { useState, useRef } from 'react';
import { brands, categories } from '../services/FilterList';
// import { getAll } from '../services/ProductService';
import CheckBox from './CheckBox';

const Filter = ({ setNewPrice, setCategory, setBrand, setPage }) => {
  const [price, setPrice] = useState({ above: "0", below: "1800" });
  const [checkBrand, setCheckBrand] = useState(new Array(brands.length).fill(false))
  const [checkCategory, setCheckCategory] = useState(new Array(categories.length).fill(false))
  const refClose = useRef(null);

  function onCheckBrand(pos) {
    const updatedCheckedState = checkBrand.map((item, index) =>
      index === pos ? !item : item);
    setCheckBrand(updatedCheckedState);
  }

  function onCheckCategory(pos) {
    const updatedCheckedState = checkCategory.map((item, index) =>
      index === pos ? !item : item);
    setCheckCategory(updatedCheckedState);
  }

  const onChangePrice = (e) => {
    setPrice({ ...price, [e.target.name]: e.target.value })
  }

  function applyFilters() {
    var newBrands = "", newCategories = "", newPrice = "";

    checkBrand.map((item, i) => {
      if (item === true) newBrands += `${brands[i]}|`;
    })
    newBrands = newBrands.substring(0, newBrands.length - 1);

    checkCategory.map((item, i) => {
      if (item === true) newCategories += `${categories[i]}|`;
    })
    newCategories = newCategories.substring(0, newCategories.length - 1);

    newPrice = `${price.above == '' ? '0' : price.above}|${price.below == '' ? '1800' : price.below}`;
    setBrand(newBrands); setCategory(newCategories); setNewPrice(newPrice);
    setPage(1);

    refClose.current.click();
  }
  return (
    <>
      <button type="button " className="btn filter-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Filter
      </button>

      <div className="modal" id="exampleModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Filter</h5>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-4 col-6 text-left">
                  <h5 className='m-2'>Brand</h5>
                  {
                    brands.map((item, i) => {
                      return <CheckBox key={i} checked={checkBrand[i]}
                        onCheck={() => onCheckBrand(i)} name={item} />
                    })
                  }
                </div>
                <div className="col-md-4 col-6 text-left">
                  <h5 className='m-2'>Category</h5>
                  {
                    categories.map((item, i) => {
                      return <CheckBox key={i} checked={checkCategory[i]}
                        onCheck={() => onCheckCategory(i)} name={item} />
                    })
                  }
                </div>
                <div className="col-md-4 col-12">
                  <h5 className='m-2'>Price</h5>
                  <div className='mt-2'>
                    <p>Above</p>
                    <input type="number" className='w-75' name='above' onChange={onChangePrice} value={price.above} />
                    <p>Below</p>
                    <input type="number" className='w-75' name='below' onChange={onChangePrice} value={price.below} />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn filter-btn" onClick={applyFilters}>Apply Filters</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter