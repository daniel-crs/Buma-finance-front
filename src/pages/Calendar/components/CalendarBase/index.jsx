import "./style.css"

import { useContext, useEffect, useState } from "react";
import { TimeContext } from "../../../../context/TimeContext";

function CalendarBase() {
    const {year, month} = useContext(TimeContext);
    const [revenues, setRevenues] = useState([]);
    const [expanses, setExpanses] = useState([]);

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

    useEffect(() => {
        fetch("http://localhost:8000/expanse")
          .then((res) => res.json())
          .then((expanses) => setExpanses(expanses));
    }, []);

    const areDateEqual = (year, month, day, date2) => {        
        date2 = date2.split("T"); 
        date2 = date2[0].split("-"); 

        if(date2[0] == year && date2[1] == month && date2[2] == day) {
            console.log("cu");
            return true;
        } else {
            return false;
        }
    }

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
                            {revenues.filter((revenues) => areDateEqual(year, month + 1, number, revenues.due_date)).map((reve) => 
                                <div className="day-element-income">
                                    <p className="day-element-text">{reve.description}</p>
                                </div>
                            )}
                            {expanses.filter((expanses) => areDateEqual(year, month + 1, number, expanses.due_date)).map((expan) => 
                                <div className="day-element-expanse">
                                    <p className="day-element-text">{expan.name}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CalendarBase