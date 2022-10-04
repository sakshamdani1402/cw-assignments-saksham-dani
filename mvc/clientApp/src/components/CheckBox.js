import React from 'react'

const CheckBox = ({name,checked,onCheck}) => {
  return (
    <p className='m-2'>
        <input type="checkbox" name={name} checked={checked} onChange={onCheck} className='filter-check' />
        {` ${name}`}
    </p>
  )
}

export default CheckBox