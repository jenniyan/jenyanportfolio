import GameObject from "../common/GameObject"
import armor from "../../assets/armor.png"

export default function ArmorStand({ onClick, onMouseEnter, onMouseLeave }) {
  return (
    <GameObject
      img={armor}
      position={{left: "50.75%", bottom:"77.25%"}}
      label="skills"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  )
}