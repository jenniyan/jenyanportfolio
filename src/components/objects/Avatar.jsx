import GameObject from "../common/GameObject"
import avatar from "../../assets/avatar.png"

export default function Avatar({ openAvatar }) {
  return (
    <GameObject
      img={avatar}
      position={{left: "10%", bottom:"30%"}}
      label="bed"
      onClick={openAvatar}
    />
  )
}