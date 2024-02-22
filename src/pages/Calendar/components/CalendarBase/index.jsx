import "./style.css"

import { useContext, useEffect, useState } from "react";
import { TimeContext } from "../../../../context/TimeContext";

function CalendarBase() {
    const {year, month} = useContext(TimeContext);
    const [revenues, setRevenues] = useState([]);

    let lastDay = new Date(year, month + 1, 0).getDate();
    let numbers = [];

    for(let i = 0; i < lastDay; i++) {
        numbers[i] = i + 1;
    }

    useEffect(() => {
        fetch("http://localhost:8000/revenues")
          .then((res) => res.json())
          .then((revenues) => setRevenues(revenues));
    }, []);

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

                <div className="days">
                    
                    {numbers.map( (number) => 
                        <div className="day">
                            <p>{ number }</p>
                            <div>
                                
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CalendarBase