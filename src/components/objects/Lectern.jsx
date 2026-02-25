import GameObject from "../common/GameObject"
import lectern from "../../assets/lectern.png"

export default function Lectern({ openExperience }) {
  return (
    <GameObject
      img={lectern}
      position={{left: "30%", bottom:"37%"}}
      label="experience"
      onClick={openExperience}
    />
  )
}