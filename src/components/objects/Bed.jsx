import GameObject from "../common/GameObject"
import bed from "../../assets/bed.png"

export default function Bed({ openBed }) {
  return (
    <GameObject
      img={bed}
      position={{left: "43.8%", bottom:"57.75%"}}
      label="bed"
      onClick={openBed}
    />
  )
}