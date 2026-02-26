import GameObject from "../common/GameObject"
import avatar from "../../assets/avatar.png"

export default function Avatar({ onClick }) {
  return (
    <GameObject
      img={avatar}
      position={{left: "-20%", bottom:"25%"}}
      label="avatar"
      onClick={onClick}
    />
  )
}