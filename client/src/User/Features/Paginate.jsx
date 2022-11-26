import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
/* import {
  getAllProducts,
} from "../../Redux/Reducer/allProductSlice"; */
import { useSelector, useDispatch } from "react-redux";
import Card from "../Features/Card";




function Items({ currentItems }) {
  return (
    <>
      {
          currentItems.map((element) => ( 
           <div>
           {/*  <div>
            <h3>Item #{element}</h3>
          </div> */}
            {<Card
                      id={element.id}
                      key={element.id}
                      title={element.title}
                      // color={element.color}
                      price={element.price}
                      // size={element.size}
                      // gender={element.gender}
                      stock={element.stock}
                      category={element.category}
                      images={element.image}
                      thumbnail={element.thumbnail}
                    />}
          </div> 
         ))    }
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  const product = useSelector((state) => state.allProducts);
  const items = product.allProducts;
  //const dispatch = useDispatch();
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(product.allProducts);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
  
    useEffect(() => {
      
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = event.selected * itemsPerPage % items.length;
      console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
      setItemOffset(newOffset);
    };
    if (product.loading) return <h3>cargando productos...</h3>;
    if (!product.loading && product.error) return <h1>{product.error}</h1>;

    return (
      <div>
          <Items  currentItems={currentItems} />
          <nav className="mt-4">
          <ReactPaginate
            className="inline-flex  "
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination justify-content-center"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
          </nav>
       </div>
      );
    }

export default PaginatedItems;