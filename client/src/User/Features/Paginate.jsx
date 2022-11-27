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
      <div className="m-4 ">
          <Items  currentItems={currentItems} />
          <nav className="mt-4">
          <ReactPaginate
            className="inline-flex p-4 "
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            pageLinkClassName="page-link"
            previousClassName="h-10 no-underline box-border bg-slate-500 text-slate-50 rounded flex p-2 justify-center items-center transition hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-300"
            previousLinkClassName="page-link"
            nextClassName="h-10 no-underline box-border bg-slate-500 text-slate-50 rounded flex p-2 justify-center items-center transition hover:bg-slate-50 hover:text-slate-900 hover:border-2 hover:border-slate-300"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName=""
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
          </nav>
       </div>
      );
    }

export default PaginatedItems;