import React from 'react';
import { ProductList } from './ProductList';

export const Pagination = ({productsPerPage, totalProducts, currentPage, setCurrentPage}) => {

    const pageNumbers = [] 

    //console.log(Math.ceil(totalProducts / productsPerPage ))

    for (let i = 0; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    const onPreviusPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const onNextPage = () => {
        setCurrentPage(currentPage +1)
    }

    const onSpecificPage = (n) => {
        setCurrentPage(n)
    }



    return(
        <nav 
            className='pagination is-centered mb-6'
            role='navigation' 
            aria-label='pagination'
        >
            <a className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={onPreviusPage}>Anterior</a>
            <a className={`pagination-next ${ currentPage === 4 ? 'is-disabled' : ''}`} onClick={onNextPage}>Siguiente</a>
            <ul className='pagination-list'>
            {pageNumbers.map(noPage => (
                <li key={noPage}>
                    <a  className={`pagination-link ${noPage === currentPage ? 'is-current' : ''
                }`}
                onClick={() => onSpecificPage(noPage)}
                >
                    {noPage}
                    </a>
                </li>
            ))
            }
        </ul>
    
    </nav>
    )
}