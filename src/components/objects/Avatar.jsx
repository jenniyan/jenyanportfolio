import { useState } from "react";
import GameObject from "../common/GameObject";
import avatar from "../../assets/avatar.png";

export default function Avatar({ onClick, onMouseEnter, onMouseLeave }) {
  const [damaged, setDamaged] = useState(false);

  const handleClick = () => {
    setDamaged(true);

    setTimeout(() => {
      setDamaged(false);
    }, 180);

    setTimeout(() => {
      onClick?.();
    }, 150);
  };

  return (
    <GameObject
      img={avatar}
      position={{ left: "-20%", bottom: "25%" }}
      label="avatar"
      overlay={damaged ? "overlay-damage" : null}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
      className={damaged ? "avatar-damaged" : ""}
    />
  );
}