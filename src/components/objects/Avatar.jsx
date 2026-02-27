import { useState } from "react";
import GameObject from "../common/GameObject";
import avatar from "../../assets/avatar.png";

export default function Avatar({ onClick, onMouseEnter, onMouseLeave }) {
  const [damaged, setDamaged] = useState(false);
  const [hitCount, setHitCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setDamaged(true);
    setHitCount(prev => prev + 1);

    setTimeout(() => {
      setDamaged(false);
    }, 180);

    setTimeout(() => {
      onClick?.();
    }, 150);

    if (hitCount + 1 >= 5) {
      setMessage("stop hitting me :(");
      // hide message after 2 seconds
      setTimeout(() => setMessage(""), 2000);
    }
  };

  return (
    <>
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

    {message && (
        <div
          style={{
            position: "absolute",
            bottom: "90%", // above the avatar
            left: "0%",
            transform: "translateX(-50%)",
            color: "rgb(255, 120, 206)",
            padding: "4px 8px",
            borderRadius: "8px",
            fontSize: "14px",
            whiteSpace: "nowrap",
          }}
        >
          {message}
        </div>
      )}
      </>
  );
}