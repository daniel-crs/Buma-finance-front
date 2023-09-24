import { useLocation } from "react-router-dom";

import { FaChartColumn } from "react-icons/fa6";
import { FaMoneyBills } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsBoxSeamFill } from "react-icons/bs";
import { BsCalendar2DateFill } from "react-icons/bs";
import { BiSolidBank } from "react-icons/bi";
import { RiSettings3Fill } from "react-icons/ri";
import { BsBoxes } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { LuBuilding } from "react-icons/lu";
import { IoIosPeople } from "react-icons/io";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

import "./style.css";

function SideBar() {
  const location = useLocation();

  const popoverClient = (
    <Popover className="popoverContainer">
      <Popover.Body className="popoverBasic">
        <a className="popoverElement" href="/Product">
          <LuBuilding className="popoverIcon" />
          Cliente
        </a>
        <a className="popoverElement" href="/">
          <IoIosPeople className="popoverIcon" />
          Funcionario
        </a>
      </Popover.Body>
    </Popover>
  );

  const popoverService = (
    <Popover className="popoverContainer">
      <Popover.Body className="popoverBasic">
        <a className="popoverElement" href="/">
          <MdOutlineDesignServices className="popoverIcon" />
          Service
        </a>
        <a className="popoverElement" href="/Product">
          <BsBoxes className="popoverIcon" />
          Product
        </a>
      </Popover.Body>
    </Popover>
  );

  return (
    <div id="container">
      <div className="spaceBetweenElements">
        {(() => {
          const isProductUrl = location.pathname === "/";
          return (
            <div id={isProductUrl && "activeElements"}>
              <a href="/">
                <FaChartColumn
                  id={isProductUrl && "active"}
                  className={!isProductUrl && "sidebarElements"}
                />
              </a>
            </div>
          );
        })()}
      </div>

      <div className="spaceBetweenElements">
        <a href="/">
          <FaMoneyBills className="sidebarElements" />
        </a>
      </div>

      <div className="spaceBetweenElements">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={popoverClient}
        >
          <div>
            <BsFillPeopleFill className="sidebarElements" />
          </div>
        </OverlayTrigger>
      </div>

      <div className="spaceBetweenElements">
        {(() => {
          const isProductUrl = location.pathname === "/Product";
          return (
            <OverlayTrigger
              trigger="click"
              placement="right"
              overlay={popoverService}
            >
              <div id={isProductUrl && "activeElements"}>
                <BsBoxSeamFill
                  id={isProductUrl && "active"}
                  className={!isProductUrl && "sidebarElements"}
                />
              </div>
            </OverlayTrigger>
          );
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
