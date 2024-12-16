import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const [isShowSidebar, setIsShowSidebar] = useState(true);

  

    const value = {
        isShowSidebar,
        setIsShowSidebar
    }


    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}
export default AppContextProvider;