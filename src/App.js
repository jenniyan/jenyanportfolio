import { PortfolioUIProvider } from "./components/hooks/UsePortfolioUI"
import RoomScene from "./components/room/RoomScene"

export default function App() {
  return (
      <div className="app">
        <PortfolioUIProvider>
        <RoomScene />
        </PortfolioUIProvider>
      </div>
  )
}