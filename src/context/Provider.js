import React, { useReducer } from 'react'

import { defaultReducer } from './reducers';

export const appContext = React.createContext()

const Provider = ({ children }) => {

    return (
        <appContext.Provider
            value={{
            }}
        >
            {children}
        </appContext.Provider>
    )
}

export default Provider
