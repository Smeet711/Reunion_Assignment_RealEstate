import React from "react";
const Filters = ({
  handleSearchLocation,
  placeholder,
  filterprice,
  pricelist,
  filtertype,
  typelist,
}) => {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg  bg-light sticky-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Filters
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Price
                  </a>
                  <ul className="dropdown-menu">
                    {pricelist.map((curele,index) => {
                      return (
                        <li key={index} >
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => filterprice(curele)}
                            
                          >
                            {curele}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>

                {/* // */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Type
                  </a>
                  <ul className="dropdown-menu">
                    {typelist.map((curele,index) => {
                      return (
                        <li key={index}>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => filtertype(curele)}
                          >
                            {curele}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                {/* // */}

                {/* // */}
              </ul>

              {/* // */}

              {/* //  */}

              <input
                className="form-control me-2"
                type="search"
                style={{ width: "300px" }}
                placeholder={placeholder}
                onChange={(e) => handleSearchLocation(e.target.value)}
              />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Filters;
