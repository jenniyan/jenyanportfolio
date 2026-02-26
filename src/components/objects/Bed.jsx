import GameObject from "../common/GameObject"
import bed from "../../assets/bed.png"

export default function Bed({ openBed }) {
  return (
    <GameObject
      img={bed}
      position={{left: "42%", bottom:"58.25%"}}
      label="bed"
      onClick={openBed}
    />
  )
}