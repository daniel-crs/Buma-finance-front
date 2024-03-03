import "./style.css"

import RevenueListing from "../RevenueListing";
import ExpanseListing from "../ExpanseListing";

import { useContext, useEffect, useState } from "react";
import { TimeContext } from "../../../../context/TimeContext";
import { FilterValueContext } from "../../../../context/FilterValueContext";

function PrintDays(){
    const {year, month, day} = useContext(TimeContext);
    const {filterStatus} = useContext(FilterValueContext);
    const [result, setResult] = useState([]);

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
        fetch("http://localhost:8000/listing", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({"date": `${year}-${(month + 1).toString().padStart(2, '0')}`}),
          })
          .then((res) => res.json())
          .then((result) => setResult(result));
    }, [year, month]);

    const areDateEqual = (year, month, day, date2) => {        
        date2 = date2.split("T"); 
        date2 = date2[0].split("-"); 

        console.log(date2, year, month, day);

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
        <div className="days">
            {pastDays.map(() => 
                <div className="day-inactive">
                    
                </div>
            )}

            {presentDays.map( (number) => 
                <div className={currantDay(number)}>
                    {(() => {
                        if (filterStatus === "revenue") {
                            return (
                                <div>
                                    <p>{ number }</p>
                                    <RevenueListing revenues={result?.revenues?.filter((revenue) => areDateEqual(year, month + 1, number, revenue.due_date))}/>
                                </div>      
                            );
                        } else if (filterStatus === "expanse") {
                            return (
                                <div>
                                    <p>{ number }</p>
                                    <ExpanseListing expanses={result?.expanses?.filter((expanse) => areDateEqual(year, month + 1, number, expanse.due_date))}/>
                                </div>
                            );
                        } else {
                            return (
                                <div>
                                    <p>{ number }</p>
                                    <RevenueListing revenues={result?.revenues?.filter((revenue) => areDateEqual(year, month + 1, number, revenue.due_date))}/>
                                    
                                    <ExpanseListing expanses={result?.expanses?.filter((expanse) => areDateEqual(year, month + 1, number, expanse.due_date))}/>
                                </div>
                            );
                        }
                    })()}
                </div>
            )}
                
            {futureDays.map(() => 
                <div className="day-inactive">
                    
                </div>
            )}
        </div>
    )
}

export default PrintDays;