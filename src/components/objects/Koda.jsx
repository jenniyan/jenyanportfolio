import { useState } from "react";
import GameObject from "../common/GameObject"
import koda from "../../assets/koda.png"

export default function Koda({ onClick, onMouseEnter, onMouseLeave }) {
  const [message, setMessage] = useState("");

  const handleClick = () => {
      setMessage("WOOF");
      // hide message after 2 seconds
      setTimeout(() => setMessage(""), 1000);

      setTimeout(() => {
      onClick?.();
    }, 150);
    }

  return (
    <>
    <GameObject
      img={koda}
      position={{left: "50.5%", bottom:"28.75%"}}
      width="12%"
      label="koda"
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />

    {message && (
        <div
          style={{
            position: "absolute",
            bottom: "42%",
            left: "50%",
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
  )
}