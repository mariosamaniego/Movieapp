import React from "react";

const Header = ({ appTitle }) => {
  return (
    <div className="row">
      <div className="col-md-12 text-center">
        <h1>{appTitle}</h1>
      </div>
    </div>
  );
};

export default Header;
