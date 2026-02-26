import GameObject from "../common/GameObject"
import lectern from "../../assets/lectern.png"

export default function Lectern({ onClick }) {
  return (
    <GameObject
      img={lectern}
      position={{left: "31%", bottom:"38.5%"}}
      label="experience"
      onClick={onClick}
    />
  )
}