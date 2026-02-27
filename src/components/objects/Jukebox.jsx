import { useState, useRef } from "react";
import subwooferLullaby from "../../assets/sounds/subwoofer-lullaby.mp3";

export default function Jukebox() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const lastPauseRef = useRef(Date.now());

  const toggleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(subwooferLullaby);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.2;
    }

    if (playing) {
      // Pause music
      audioRef.current.pause();
      lastPauseRef.current = Date.now();
      setPlaying(false);
    } else {
      // Check if last paused > 5s ago
      const elapsed = Date.now() - lastPauseRef.current;
      if (elapsed > 5000) {
        audioRef.current.currentTime = 0; // restart from beginning
      }
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="jukebox-container">
        {playing && (
        <div className="jukebox-label">
          🎵 playing subwoofer lullaby (C418)...
        </div>
      )}
      <div
        className={`jukebox ${playing ? "playing" : ""}`}
        onClick={toggleMusic}
        title={playing ? "stop music" : "play music"}
      >
        {playing ? "ON" : "OFF"}
      </div>
    </div>
  );
}