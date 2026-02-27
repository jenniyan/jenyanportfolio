import GameObject from "../common/GameObject"
import lectern from "../../assets/lectern.png"

export default function Lectern({ onClick, onMouseEnter, onMouseLeave }) {
  return (
    <GameObject
      img={lectern}
      position={{left: "32.25%", bottom:"38.5%"}}
      label="experience"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  )
}