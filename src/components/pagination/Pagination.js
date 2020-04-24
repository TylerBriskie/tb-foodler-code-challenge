
import React, { useContext } from "react";


// LOCAL IMPORTS
import { RestaurantContext } from "../../context/RestaurantContext";
import './Pagination.css'

const Pagination = () => {
 
    const {currentPage, loading, totalPages, setCurrentPage } = useContext(RestaurantContext)

    let pageNumbers = [];
    for (let i = 1; i <= totalPages; i++){
        pageNumbers.push(i)
    }

    const handlePageChange = page => {
        setCurrentPage(page);
    }

    if (!loading && totalPages !== 0){
        return (
            <div id="pagination-component-wrapper" className="container" >
               <span>
                    page {currentPage} of {totalPages}
                </span>
                <ul className="page-list">
                    {pageNumbers.map(number => 
                        <li onClick={() => {handlePageChange(number)}}>
                            {number}
                        </li>
                    )}
                </ul>
            </div>
            );
    } else {
        return (
            <div>

            </div>
        )
    }

};

export default Pagination;