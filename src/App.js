import { PortfolioUIProvider } from "./components/hooks/UsePortfolioUI"
import RoomScene from "./components/room/RoomScene"
import Avatar from "./components/objects/Avatar"

export default function App() {
  return (
      <div className="app">
        <PortfolioUIProvider>
        <RoomScene />
        <Avatar />
        </PortfolioUIProvider>
      </div>
  )
}