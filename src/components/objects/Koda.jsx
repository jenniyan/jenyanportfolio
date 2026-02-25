import GameObject from "../common/GameObject"
import koda from "../../assets/koda.png"

export default function Koda({ openKoda }) {
  return (
    <GameObject
      img={koda}
      position={{left: "55.5%", bottom:"25%"}}
      width="12%"
      label="koda"
      onClick={openKoda}
    />
  )
}