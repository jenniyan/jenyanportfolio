import GameObject from "../common/GameObject"
import painting from "../../assets/painting.png"

export default function Painting({ onClick, onMouseEnter, onMouseLeave }) {
  return (
    <GameObject
      img={painting}
      position={{left: "64%", bottom:"54.5%"}}
      label="resume"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  )
}