import "./style.css";

import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

function MonthButton() {
  const currentDate = new Date();
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());

  function getMonthAndYear() {
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", 
    "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    return `${months[month]} ${year}`
  };

  function prevMonth() {
    if(month === 0) {
        setMonth(11);
        setYear(year - 1);
    } else {
        setMonth(month - 1);
    }
  }

  function nextMonth() {
      if(month === 11) {
          setMonth(0);
          setYear(year + 1);
      } else {
          setMonth(month + 1);
      }
  }

  return (
      <div className="caledar-header">
        <div className="date-button"> 
          <span className="symbols-rounded" onClick={() => prevMonth()}><FaChevronLeft/></span>
          <span className="date-button-text">{getMonthAndYear()}</span>
          <span className="symbols-rounded" onClick={() => nextMonth()}><FaChevronRight /></span>
        </div>
      </div>
    )
}

export default MonthButton;