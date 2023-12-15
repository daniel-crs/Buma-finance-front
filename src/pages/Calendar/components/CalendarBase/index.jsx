import "./style.css"

import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

function CalendarBase() {
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

    function printDays() {
        let firstDay = new Date(year, month, 1).getDay();
        let lastDay = new Date(year, month + 1, 0).getDate();
        let lastDayOfLastMonth = new Date(year, month, 0).getDate();
        let lastDayOfNextMonth = new Date(year, month, lastDay).getDay();
        let liTag = "";

        for(let i = firstDay; i > 0; i--) {
            liTag += `<li><p className="teste">${lastDayOfLastMonth - i + 1}</p></li>`;
        }

        for(let i = 1; i <= lastDay; i++) {
            liTag += `<li><p>${i}</p></li>`;
        }

        for(let i = lastDayOfNextMonth; i < 6; i++) {
            liTag += `<li><p>${i - lastDayOfNextMonth + 1}</p></li>`;
        }

        return liTag;
    }

    return (
        <div className="calendar-container">
            <div className="caledar-header">
                <div className="date-button">
                <span className="symbols-rounded" onClick={() => prevMonth()}><FaChevronLeft/></span>
                <span className="date-button-text">{getMonthAndYear()}</span>
                <span className="symbols-rounded" onClick={() => nextMonth()}><FaChevronRight /></span>
                </div>
            </div>
            <div className="calendar">
                <ul className="weeks">
                    <li>Dom</li>
                    <li>Seg</li>
                    <li>Ter</li>
                    <li>Quar</li>
                    <li>Quin</li>
                    <li>Sex</li>
                    <li>Sab</li>
                </ul>
                <ul className="days" dangerouslySetInnerHTML={{ __html: printDays() }}>

                </ul>
            </div>
        </div>
    )
}

export default CalendarBase