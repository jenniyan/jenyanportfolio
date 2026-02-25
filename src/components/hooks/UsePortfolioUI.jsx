import { createContext, useContext, useState } from "react"

const PortfolioUIContext = createContext()

export function PortfolioUIProvider({ children }) {
  const [activeModal, setActiveModal] = useState(null)

  const openModal = (modal) => setActiveModal(modal)
  const closeModal = () => setActiveModal(null)

  return (
    <PortfolioUIContext.Provider value={{ activeModal, openModal, closeModal }}>
      {children}
    </PortfolioUIContext.Provider>
  )
}

export function usePortfolioUI() {
  return useContext(PortfolioUIContext)
}