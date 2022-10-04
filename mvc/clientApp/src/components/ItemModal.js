import React from 'react'

const ItemModal = ({title,imgs}) => {
  return (
    <div className="modal" id="itemModal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            {
                                imgs.map((img,i) => {return <img key={i}
                                    alt="Sample"
                                    src={img}
                                />})
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ItemModal