const SearchBox = ({
    totalCount, 
    pageCount, 
    queryString, 
    onTotalChange, 
    onQueryChange,
}) => {
   return (
    <div className="d-flex align-items-center bg-light px-3 py-2 small rounded-3">
    <div className="d-flex align-items-center flex-grow-1">
      <label htmlFor="queryString" className="me-2 fw-bold text-secondary">
        Search
      </label>
    </div>
    <div className="d-flex align-items-center">
      <label htmlFor="pageCount" className="me-2 fw-bold text-secondary">
        Show
      </label>
    </div>
    <div>
      <b className="me-2 text-secondary">Total:</b>
    </div>
  </div>
   );
};   

export default SearchBox;