import React from 'react'

const ProductPage = ({goods}) => {
  return (
    <div className='ProductPage'>
        <h3>{goods.id}</h3>
        <h3>{goods.title}</h3>
        <h3>{goods.description}</h3>
        <h3>{goods.price}</h3>
        <img src={goods.images[0]}/>
    </div>
  )
}

export default ProductPage