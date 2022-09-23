import React from 'react'

const ListItems = (props) => {
    let person = props.item;
    return (
        <div className='card'>
            <img src={person.avatar} alt="avatar" />
            <div className="name">
                <p>{person.last_name}</p>
                <p>{person.first_name}</p>
            </div>
            <p className='email' >{person.email}</p>
        </div>
    )
}

export default ListItems