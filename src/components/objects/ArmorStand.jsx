import GameObject from "../common/GameObject"
import armor from "../../assets/armor.png"

export default function ArmorStand({ openSkills }) {
  return (
    <GameObject
      img={armor}
      position={{left: "50.5%", bottom:"75.25%"}}
      label="skills"
      onClick={openSkills}
    />
  )
}