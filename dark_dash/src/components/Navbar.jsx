import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { wardData } from "../data/wardData";
import { MdNotificationsActive } from "react-icons/md";


const Navbar = () => {
  const [data, setData] = useState(wardData);

  const [value, setValue] = useState("");
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div style={{ userSelect: "none" }}>
      <nav class="navbar p-0 fixed-top d-flex flex-row">
        <div class="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
          <ul class="navbar-nav navbar-nav-right" style={{ gap: "7px" }}>
            <div className="">
              <div className="input-group md-form form-sm form-1 pl-0">
                <div className="input-group-prepend">
                  <span class="input-group-text " id="basic-text1">
                    <FaSearch />
                  </span>
                </div>

                <input
                  class="form-control my-0 py-1 text-white max-w-[200px] h-8"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  list="list-timezone"
                  id="input-datalist"
                  onChange={handleOnChange}
                  value={value}
                />
              </div>

              <div className="block absolute min-w-[160px]  z-10 ml-10  min-w-[200px]max-w-[200px] text-black max-h-[160px] overflow-y-scroll w-[200px]">
                {data
                  .filter(
                    (item) =>
                      item.wardName.startsWith(value) &&
                      item.wardName !== value &&
                      value !== ""
                  )
                  .map((item) => (
                    <div
                      className=" bg-[#191C24] text-white px-2 py-1 shadow border cursor-pointer"
                      onClick={(e) => setValue(item.wardName)}
                    >
                      {item.wardName}
                    </div>
                  ))}
              </div>
            </div>

            <li>
              <Link to="/complaints">
                <button type="button" class="btn btn-outline-primary rounded-xl">
                <MdNotificationsActive />
                </button>
              </Link>
            </li>
          </ul>

          <button
           
          >
           
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
