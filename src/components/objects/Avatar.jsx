import GameObject from "../common/GameObject"
import avatar from "../../assets/avatar.png"

export default function Avatar({ onClick }) {
  return (
    <GameObject
      img={avatar}
      position={{left: "-25%", bottom:"27%"}}
      label="avatar"
      onClick={onClick}
    />
  )
}