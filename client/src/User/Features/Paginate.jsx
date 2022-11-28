import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
 import {
  getAllProducts,
} from "../../Redux/Reducer/allProductSlice"; 
import { useSelector, useDispatch } from "react-redux";
import Card from "../Features/Card";
import { ErrorSearch } from "../Features/ErrorSearch";
import Loading from "../Features/Loading";
import { Filtros } from "../Features/Filtros";


function PaginatedItems({ itemsPerPage }) {
  const product = useSelector((state) => state.allProducts.allProducts);
  const productos = useSelector((state) => state.allProducts);
  
  const items = product;
  
  //
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(product);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
  
    useEffect(() => {
      
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [ itemOffset, itemsPerPage, ]);

    if (productos.loading) return <Loading />;
    if (productos.error) return <ErrorSearch />;
    console.log(currentItems)
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = event.selected * itemsPerPage % items.length;
      console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
      setItemOffset(newOffset);
      
    };
    

    return (
      <div className="m-4 ">
        {productos.loading && <Loading />}
        {productos.error && <ErrorSearch />}
        
        {product
          ? currentItems.map((element) => {
              return (
                <Card
                  key={element.id}
                  id={element.id}
                  title={element.title}
                  price={element.price}
                  size={element.size}
                  gender={element.gender}
                  stock={element.stock}
                  images={element.image}
                />
              );
            })
          : null}
          <nav className="mt-4 flex justify-center">
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