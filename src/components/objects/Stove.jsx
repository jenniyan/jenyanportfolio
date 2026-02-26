import GameObject from "../common/GameObject"
import stove from "../../assets/stove.png"

export default function Stove({ openStove }) {
  return (
    <GameObject
      img={stove}
      position={{left: "72.75%", bottom:"40.5%"}}
      label="stove"
      onClick={openStove}
    />
  )
}