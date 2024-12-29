import { createContext, useState } from "react";

const NameContext = createContext({})

const NameProvider = ({ children }) => {
    const [searchInput, setsearchInput] = useState("");
    const [isFound, setisFound] = useState(true)
    const [selectedMocktail, setselectedMocktail] = useState("")

    return (
        <NameContext.Provider value={{ selectedMocktail, setselectedMocktail, searchInput, setsearchInput, isFound, setisFound }}>
            {children}
        </ NameContext.Provider>
    )
}

export { NameContext, NameProvider }
