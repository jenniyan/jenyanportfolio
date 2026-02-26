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

import ProjectsModal from "../modals/ProjectsModal";
import ExperienceModal from "../modals/ExperienceModal";
import ResumeModal from "../modals/ResumeModal";
import SkillsModal from "../modals/SkillsModal";
import AboutModal from "../modals/AboutModal";

import { usePortfolioUI } from "../hooks/UsePortfolioUI";

export default function RoomScene() {
  const { openModal } = usePortfolioUI();
  const [hoverLabel, setHoverLabel] = useState("");

  return (
    <div className="room">
      <RoomBackground />

      <Lectern
        onClick={() => openModal("experiences")}
        onMouseEnter={() => setHoverLabel("experiences")}
        onMouseLeave={() => setHoverLabel("")}
      />
      <ArmorStand
        onClick={() => openModal("skills")}
        onMouseEnter={() => setHoverLabel("skills")}
        onMouseLeave={() => setHoverLabel("")}
      />
      <Stove />
      <Painting
        onClick={() => openModal("resume")}
        onMouseEnter={() => setHoverLabel("resume")}
        onMouseLeave={() => setHoverLabel("")}
      />
      <Koda 
      onMouseEnter={() => setHoverLabel("KODA")}
        onMouseLeave={() => setHoverLabel("")}/>
      <Bookshelf
        onClick={() => openModal("projects")}
        onMouseEnter={() => setHoverLabel("projects")}
        onMouseLeave={() => setHoverLabel("")}
      />
      <Bed />
      <Avatar onClick={() => openModal("about")} />

      <ProjectsModal />
      <ExperienceModal />
      <ResumeModal />
      <SkillsModal />
      <AboutModal />

      <div className="object-label">{hoverLabel}</div>
    </div>
  );
}
