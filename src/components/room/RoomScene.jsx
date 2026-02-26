import RoomBackground from "./RoomBackground"
import Lectern from "../objects/Lectern"
import ArmorStand from "../objects/ArmorStand"
import Stove from "../objects/Stove"
import Painting from "../objects/Painting"
import Koda from "../objects/Koda"
import Bookshelf from "../objects/Bookshelf"
import Bed from "../objects/Bed"

import ProjectsModal from "../modals/ProjectsModal"
import ExperienceModal from "../modals/ExperienceModal"

import { usePortfolioUI } from "../hooks/UsePortfolioUI"

export default function RoomScene() {
  const { openModal } = usePortfolioUI()

  return (
    <div className="room">

      <RoomBackground />

      <Lectern onClick={() => openModal("experiences")}/>
      <ArmorStand />
      <Stove />
      <Painting />
      <Koda />
      <Bookshelf onClick={() => openModal("projects")}/>
      <Bed />

      <ProjectsModal />
      <ExperienceModal />

    </div>
  )
}