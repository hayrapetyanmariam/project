import React from 'react'

export const Pagination = ({ productPerPage, totalProduct, paginate }) => {

    const pageNumbers = [];

    for(let i = 1; i<=Math.ceil(totalProduct / productPerPage); i++){
        pageNumbers.push(i);
    }

  return (
    
    <nav>
        <ul className='pagination'>
            {
                pageNumbers.map(num =>(
                    <ul className='pageItem' key = {num}>
                        <a href='#' className='pageLink' onClick={()=> paginate(num)}>
                            {num}
                        </a>
                    </ul>
                ))
            }
        </ul>
    </nav>
  )
}
