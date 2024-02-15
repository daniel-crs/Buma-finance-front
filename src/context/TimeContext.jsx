import { createContext, useState } from "react";

export const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
    const currentDate = new Date();
    const [month, setMonth] = useState(currentDate.getMonth());
    const [year, setYear] = useState(currentDate.getFullYear());

    const getMonthAndYear = () => {
        const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", 
        "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

        return `${months[month]} ${year}`
    };

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

    const printDays = () => {
        let firstDay = new Date(year, month, 1).getDay();
        let lastDay = new Date(year, month + 1, 0).getDate();
        let lastDayOfLastMonth = new Date(year, month, 0).getDate();
        let lastDayOfNextMonth = new Date(year, month, lastDay).getDay();
        let liTag = "";

        for(let i = firstDay; i > 0; i--) {
            liTag += `<p className="teste">${lastDayOfLastMonth - i + 1}</p>`;
        }

        for(let i = 1; i <= lastDay; i++) {
            liTag += `<p>${i}</p>`;
        }

        for(let i = lastDayOfNextMonth; i < 6; i++) {
            liTag += `<p>${i - lastDayOfNextMonth + 1}</p>`;
        }

        return liTag;
    }

    return <TimeContext.Provider value={{getMonthAndYear, prevMonth, nextMonth, printDays}}>{children}</TimeContext.Provider>
}