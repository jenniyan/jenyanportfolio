import GameObject from "../common/GameObject"
import painting from "../../assets/painting.png"

export default function Painting({ openResume }) {
  return (
    <GameObject
      img={painting}
      position={{left: "68%", bottom:"53.75%"}}
      label="resume"
      onClick={openResume}
    />
  )
}