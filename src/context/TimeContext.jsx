import { createContext, useState } from "react";

export const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
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


    return <TimeContext.Provider value={{getMonthAndYear, prevMonth, nextMonth}}>{children}</TimeContext.Provider>
}