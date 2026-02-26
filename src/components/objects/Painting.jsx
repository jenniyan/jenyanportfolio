import GameObject from "../common/GameObject"
import painting from "../../assets/painting.png"

export default function Painting({ onClick }) {
  return (
    <GameObject
      img={painting}
      position={{left: "61.5%", bottom:"54.5%"}}
      label="resume"
      onClick={onClick}
    />
  )
}