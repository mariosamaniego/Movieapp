import React, { useState } from "react";

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = e => {
    e.preventDefault();
    search(searchValue);
  };

  const handleOnType = e => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="row">
      <div className="col-md-6 search">
        <form className="text-center">
        <div class="row">
          <div class="col-sm-9">
            <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  onChange={handleOnType}
                />
              </div>
            </div>
          <div class="col-sm-3">
            <div className="form-group">
                <input
                  onClick={handleSearch}
                  type="submit"
                  className="btn btn-secondary"
                  value="Search"
                />
              </div>
          </div>
        </div>
        </form>
		
       
      </div>
    </div>
  );
};

export default Search;
