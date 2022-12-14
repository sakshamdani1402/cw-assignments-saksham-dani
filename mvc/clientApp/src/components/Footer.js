import React from 'react'
import { Row} from 'reactstrap'
const Footer = ({pageInit,total,setPage}) => {
  
  var page = pageInit;
  
  const handleIncrement= () =>{
    if(page+1 <= total) {setPage(page+1);}
  }
  const handleDecrement = ()=>{
    if(page-1 >= 1) {setPage(page-1);}
  }
  return (
    <Row className='d-flex justify-content-between m-4'>
        <button className={`footer-btn`} onClick={handleDecrement}><i class="fa-solid fa-caret-left"></i> page</button>
        <p className='page-no'>{page}/{total}</p>
        <button className='footer-btn' onClick={handleIncrement}>page <i class="fa-solid fa-caret-right"></i></button>
    </Row>
  )
}

export default Footer