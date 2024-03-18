import { createContext, useState } from "react";

export const FilterValueContext = createContext();

export const FilterValueProvider = ({ children }) => {
    const [filterStatus, setFilterStatus] = useState("all");

    return <FilterValueContext.Provider value={{setFilterStatus, filterStatus}}>{children}</FilterValueContext.Provider>
}