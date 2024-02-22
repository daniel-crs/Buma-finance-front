import { createContext, useState } from "react";

export const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
    const currentDate = new Date();
    const [month, setMonth] = useState(currentDate.getMonth());
    const [year, setYear] = useState(currentDate.getFullYear());

    const prevMonth = () => {
        if(month === 0) {
            setMonth(11);
            setYear(year - 1);
        } else {
            setMonth(month - 1);
        }
    };

    const nextMonth = () => {
        if(month === 11) {
            setMonth(0);
            setYear(year + 1);
        } else {
            setMonth(month + 1);
        }
    };

    

    return <TimeContext.Provider value={{prevMonth, nextMonth, year, month}}>{children}</TimeContext.Provider>
}