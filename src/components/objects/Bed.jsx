import GameObject from "../common/GameObject"
import bed from "../../assets/bed.png"

export default function Bed({ onClick, onMouseEnter, onMouseLeave }) {
  return (
    <GameObject
      img={bed}
      position={{left: "43.8%", bottom:"58.25%"}}
      label="bed"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  )
}