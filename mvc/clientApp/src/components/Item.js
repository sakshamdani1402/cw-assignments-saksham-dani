import React,{useState} from 'react'
import ItemModal from './ItemModal'


const Item = ({id,title,description,brand,stock,price,discount,imgs,category,thumb,rating}) => {

    var initImgs = [...imgs];
 
    const [curr, setCurr] = useState(initImgs[0]);
    const [idx, setIdx] = useState(0);

    function handleNext(){
        if(idx<initImgs.length-1){
            setCurr(initImgs[idx+1]);
            setIdx(idx+1);
        }
    }

    function handlePrev(){
        if(idx>0){
            setCurr(initImgs[idx-1]);
            setIdx(idx-1);
        }
    }
    return (
        <>
            <div className="card my-3 w-100">
                <div className="carousel-btns w-100 d-flex justify-content-between">
                <button  className='img-btn prev' onClick={handlePrev}>prev</button>
                <button  className='img-btn next' onClick={handleNext}>next</button>
                </div>
                {/* <div className="carousel-imgs w-100 h-50">
                    {
                        imgs.map((img,i) => {return <img src={img} key={i} className="card-img-top" alt="..."/>})
                    }
                </div> */}
                <img src={curr} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className='text-success strong'>Price : ${price}</p>
                        <span><p className='text-danger d-inline mx-4'>Discount : {discount}%</p>
                        </span>
                    </div>
            </div>
            <ItemModal key={id} title={title} imgs={imgs} stock={stock} rating={rating}/>
        </>
    )
}

export default Item