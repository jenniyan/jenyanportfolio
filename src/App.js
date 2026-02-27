import { useEffect, useState } from "react";
import { PortfolioUIProvider } from "./components/hooks/UsePortfolioUI"
import RoomScene from "./components/room/RoomScene"
import ScreenWarning from "./components/objects/ScreenWarning"

export default function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth <= 960);
    checkScreen(); // initial check
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
      <div className="app">
        <PortfolioUIProvider>
          {isSmallScreen ? <ScreenWarning /> : <RoomScene />}
        </PortfolioUIProvider>
      </div>
  )
}