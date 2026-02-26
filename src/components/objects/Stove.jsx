import GameObject from "../common/GameObject"
import stove from "../../assets/stove.png"

export default function Stove({ openStove }) {
  return (
    <GameObject
      img={stove}
      position={{left: "83%", bottom:"41.25%"}}
      label="stove"
      onClick={openStove}
    />
  )
}