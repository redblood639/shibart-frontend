import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [showModal, setShowModal] = useState(false);
    const [scanModalShow, setScanModalShow] = useState(false)
    const [signInModal, setSignInModal] = useState(false)
    return (
        <AppContext.Provider
            value={{ walletModalContext: [showModal, setShowModal], scanModalContext: [scanModalShow, setScanModalShow], signInModalContext:[signInModal, setSignInModal] }}
        >
            {children}
        </AppContext.Provider>
  );
}

export function useAppContext() {
    return useContext(AppContext);
}