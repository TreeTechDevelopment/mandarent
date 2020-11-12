import React, { useReducer } from 'react'

import { defaultReducer } from './reducers';

export const appContext = React.createContext()

const Provider = ({ children }) => {

    const [showRentMenu, dispatchShowRentMenu] = useReducer(defaultReducer, false)

    return (
        <appContext.Provider
            value={{
                showRentMenu,
                dispatchShowRentMenu
            }}
        >
            {children}
        </appContext.Provider>
    )
}

export default Provider
