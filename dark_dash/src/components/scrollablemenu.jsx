import React from "react";

function ScrollableMenu() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="bold">Scrollable Menu</h2>

          {/* Scrollable Menu */}
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-default dropdown-toggle"
              data-toggle="dropdown"
            >
              Scrollable Menu <span className="caret"></span>
            </button>
            <ul
              className="dropdown-menu scrollable-menu"
              role="menu"
              style={{
                height: "auto",
                maxHeight: "200px",
                overflowX: "hidden",
              }}
            >
              {[...Array(15).keys()].map((index) => (
                <li key={index}>
                  <a href="#">Action</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollableMenu;
