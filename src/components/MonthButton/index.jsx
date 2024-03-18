import "./style.css";

import { useContext } from "react";
import { TimeContext } from "../../context/TimeContext";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

function MonthButton() {
  const {prevMonth, nextMonth, year, month} = useContext(TimeContext);

  const getMonthAndYear = () => {
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", 
    "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    return `${months[month]} ${year}`
  };

  return (
      <div className="caledar-header">
        <div className="date-button"> 
          <span className="symbols-rounded" onClick={prevMonth}><FaChevronLeft/></span>
          <span className="date-button-text">{getMonthAndYear()}</span>
          <span className="symbols-rounded" onClick={nextMonth}><FaChevronRight /></span>
        </div>
      </div>
    )
}

export default MonthButton;