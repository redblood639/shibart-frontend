import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <AppContext.Provider
            value={{ walletModalContext: [showModal, setShowModal] }}
        >
            {children}
        </AppContext.Provider>
  );
}

export function useAppContext() {
    return useContext(AppContext);
}