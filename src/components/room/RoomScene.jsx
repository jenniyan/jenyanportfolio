import { useState } from "react";

import RoomBackground from "./RoomBackground";
import Lectern from "../objects/Lectern";
import ArmorStand from "../objects/ArmorStand";
import Stove from "../objects/Stove";
import Painting from "../objects/Painting";
import Koda from "../objects/Koda";
import Bookshelf from "../objects/Bookshelf";
import Bed from "../objects/Bed";
import Avatar from "../objects/Avatar";
import Jukebox from "../objects/Jukebox";

import lecternSound from "../../assets/sounds/lectern.ogg";
import armorStandSound from "../../assets/sounds/equip-armor.ogg";
import paintingSound from "../../assets/sounds/painting.ogg";
import bookshelfSound from "../../assets/sounds/bookshelf-pickup.ogg";
import smokerSound from "../../assets/sounds/smoker.ogg";
import avatarSound from "../../assets/sounds/crit.ogg"
import kodaSound from "../../assets/sounds/bark.ogg"

import ProjectsModal from "../modals/ProjectsModal";
import ExperienceModal from "../modals/ExperienceModal";
import ResumeModal from "../modals/ResumeModal";
import SkillsModal from "../modals/SkillsModal";
import AboutModal from "../modals/AboutModal";
import Contact from "../objects/Contact";

import { usePortfolioUI } from "../hooks/UsePortfolioUI";

export default function RoomScene() {
  const { openModal } = usePortfolioUI();
  const [hoverLabel, setHoverLabel] = useState("");
  const playSound = (audioFile) => {
    const audio = new Audio(audioFile);
    audio.volume = 0.3;
    audio.play();
  };

  return (
    <div className="room-wrapper">
    <div className="room">
      <RoomBackground />

      <Lectern
        onClick={() => {
          playSound(lecternSound);
          openModal("experiences");
        }}
        onMouseEnter={() => setHoverLabel("experiences")}
        onMouseLeave={() => setHoverLabel("")}
      />
      <ArmorStand
        onClick={() => {
          playSound(armorStandSound);
          openModal("skills");
        }}
        onMouseEnter={() => setHoverLabel("skills")}
        onMouseLeave={() => setHoverLabel("")}
      />
      <Stove
        onClick={() => {
          playSound(smokerSound);
        }}
      />
      <Painting
        onClick={() => {
          playSound(paintingSound);
          openModal("resume");
        }}
        onMouseEnter={() => setHoverLabel("resume")}
        onMouseLeave={() => setHoverLabel("")}
      />
      <Koda
      onClick={() => {
          playSound(kodaSound)}}
        onMouseEnter={() => setHoverLabel("KODA")}
        onMouseLeave={() => setHoverLabel("")}
      />
      <Bookshelf
        onClick={() => {
          playSound(bookshelfSound);
          openModal("projects");
        }}
        onMouseEnter={() => setHoverLabel("projects")}
        onMouseLeave={() => setHoverLabel("")}
      />
      <Bed />
      <Avatar onClick={() => {
          playSound(avatarSound);
          openModal("about");
        }}
        onMouseEnter={() => setHoverLabel("about me")}
        onMouseLeave={() => setHoverLabel("")} />

      <ProjectsModal />
      <ExperienceModal />
      <ResumeModal />
      <SkillsModal />
      <AboutModal />

      <Contact />
      <Jukebox />

      <div className="object-label">{hoverLabel}</div>
    </div>
    </div>
  );
}
