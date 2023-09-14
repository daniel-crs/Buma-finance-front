import { useLocation } from "react-router-dom";

import { FaChartColumn } from "react-icons/fa6";
import { FaMoneyBills } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsBoxSeamFill } from "react-icons/bs";
import { BsCalendar2DateFill } from "react-icons/bs";
import { BiSolidBank } from "react-icons/bi";
import { RiSettings3Fill } from "react-icons/ri";

import "./style.css";

function SideBar() {
  const location = useLocation();

  return (
    <div id="container">
      <div className="spaceBetweenElements">
        {(() => {
          if (location.pathname === "/") {
            return (
              <div id="activeElements">
                <a href="/">
                  <FaChartColumn id="active" />
                </a>
              </div>
            );
          } else {
            return (
              <a href="/">
                <FaChartColumn className="sidebarElements" />
              </a>
            );
          }
        })()}
      </div>

      <div className="spaceBetweenElements">
        <a href="/">
          <FaMoneyBills className="sidebarElements" />
        </a>
      </div>

      <div className="spaceBetweenElements">
        <a href="/">
          <BsFillPeopleFill className="sidebarElements" />
        </a>
      </div>

      <div className="spaceBetweenElements">
        {(() => {
          if (location.pathname === "/Product") {
            return (
              <div id="activeElements">
                <a href="/Product">
                  <BsBoxSeamFill id="active" />
                </a>
              </div>
            );
          } else {
            return (
              <a href="/Product">
                <BsBoxSeamFill className="sidebarElements" />
              </a>
            );
          }
        })()}
      </div>

      <div className="spaceBetweenElements">
        <a href="/">
          <BsCalendar2DateFill className="sidebarElements" />
        </a>
      </div>

      <div className="spaceBetweenElements">
        <a href="/">
          <BiSolidBank className="sidebarElements" />
        </a>
      </div>

      <div className="spaceBetweenElements">
        <a href="/">
          <RiSettings3Fill className="sidebarElements" />
        </a>
      </div>
    </div>
  );
}

export default SideBar;
