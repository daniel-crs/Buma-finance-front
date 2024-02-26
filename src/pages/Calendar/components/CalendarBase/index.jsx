import "./style.css"

import { useContext, useEffect, useState } from "react";
import { TimeContext } from "../../../../context/TimeContext";

function CalendarBase() {
    const {year, month, day} = useContext(TimeContext);
    const [revenues, setRevenues] = useState([]);
    const [expanses, setExpanses] = useState([]);

    let lastDay = new Date(year, month + 1, 0).getDate();
    let firstDay = new Date(year, month, 1).getDay();
    let LastMonth = new Date(year, month, 0).getDate();
    let NextMonth = new Date(year, month, lastDay).getDay();
    let presentDays = [], pastDays = [], futureDays = [];
    
    for(let i = 0; i < firstDay; i++) {
        pastDays[i] = LastMonth - i;
    }

    for(let i = 0; i < lastDay; i++) {
        presentDays[i] = i + 1;
    }

    for(let i = NextMonth; i < 6; i++) {
       futureDays[i] = i - LastMonth + 1;
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
            return true;
        } else {
            return false;
        }
    }

    function currantDay(number) {
        if(number === day) {
            return "activeDay"
        } else {
            return "day"
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
                    {pastDays.map(() => 
                        <div className="day-inactive">
                           
                        </div>
                    )}
                    {presentDays.map( (number) => 
                        <div className={currantDay(number)}>
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
                    {futureDays.map(() => 
                        <div className="day-inactive">
                           
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CalendarBase