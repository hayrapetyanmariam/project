import React from 'react'
import ProductPage from './ProductPage'

const ProductList = ({goods}) => {

console.log(goods)
  return (
    <div className='ProductList'>
        {
            goods?.map((goods, index)=>{
                return <ProductPage key={index} goods = {goods}/>
            })
        }
    </div>
  )
}

export default ProductList