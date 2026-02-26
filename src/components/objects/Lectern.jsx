import GameObject from "../common/GameObject"
import lectern from "../../assets/lectern.png"

export default function Lectern({ onClick }) {
  return (
    <GameObject
      img={lectern}
      position={{left: "30%", bottom:"38.8%"}}
      label="experience"
      onClick={onClick}
    />
  )
}