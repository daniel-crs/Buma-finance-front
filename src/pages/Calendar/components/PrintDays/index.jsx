import "./style.css"

import RevenueListing from "../RevenueListing";
import ExpanseListing from "../ExpanseListing";

import { useContext } from "react";
import { TimeContext } from "../../../../context/TimeContext";
import { FilterValueContext } from "../../../../context/FilterValueContext";

function PrintDays(){
    const {year, month, day} = useContext(TimeContext);
    const {filterStatus, FilterValueListing} = useContext(FilterValueContext);

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
                                    <RevenueListing teste={number}/>
                                </div>      
                            );
                        } else if (filterStatus === "expanse") {
                            return (
                                <div>
                                    <p>{ number }</p>
                                    <ExpanseListing teste={number}/>
                                </div>
                            );
                        } else {
                            return (
                                <div>
                                    <p>{ number }</p>
                                    <RevenueListing teste={number}/>
                                    
                                    <ExpanseListing teste={number}/>
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