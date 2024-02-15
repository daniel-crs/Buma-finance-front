import "./style.css"

import { useContext } from "react";
import { TimeContext } from "../../../../context/TimeContext";

function CalendarBase() {
    const {printDays} = useContext(TimeContext);

    return (
        <div className="calendar-container">
            <div className="calendar">
                <div className="weeks">
                    <p>Domingo</p>
                    <p>Segunda</p>
                    <p>Terça</p>
                    <p>Quarta</p>
                    <p>Quinta</p>
                    <p>Sexta</p>
                    <p>Sábado</p>
                </div>

                <div className="days" dangerouslySetInnerHTML={{ __html: printDays() }}>
                    
                </div>
            </div>
        </div>
    )
}

export default CalendarBase