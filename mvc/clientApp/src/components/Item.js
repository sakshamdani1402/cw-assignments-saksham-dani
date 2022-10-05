import React, { useState } from 'react'


const Item = ({ title, description, brand, stock, price, discount, imgs, category, thumb, rating }) => {

    var initImgs = [...imgs];

    const [curr, setCurr] = useState(initImgs[0]);
    const [idx, setIdx] = useState(0);

    function handleNext() {
        if (idx < initImgs.length - 1) {
            setCurr(initImgs[idx + 1]);
            setIdx(idx + 1);
        }
    }

    function handlePrev() {
        if (idx > 0) {
            setCurr(initImgs[idx - 1]);
            setIdx(idx - 1);
        }
    }
    return (
        <>
            <div className="card my-3 w-100">
                
                <span class="badge bg-success brand-badge">{brand}</span>
                <img src={curr} className="card-img-top" alt="..." />
                <div className="card-body">
                <div className="carousel-btns w-100 d-flex justify-content-between">
                    <button className='img-btn px-2 prev' onClick={handlePrev}><i class="fa-solid fa-caret-left"></i></button>
                    <button className='img-btn px-2 next' onClick={handleNext}> <i class="fa-solid fa-caret-right"></i> </button>
                </div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text p-2">{description}</p>
                    <span className='d-flex justify-content-between'>
                        <p className=' p-1 text-light bg-success fw-bold'>Price : ${price}</p>
                        <p className='text-danger'>Discount : {discount}%</p>
                    </span>
                    <span className='d-flex justify-content-between'>
                        <p className='text-warning p-1' >Rating : {rating}/5</p>
                        <p className='text-secondary p-1'>{stock} left</p>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Item