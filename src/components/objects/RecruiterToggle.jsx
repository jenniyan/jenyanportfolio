import { useState } from "react";
import RecruiterView from "../modals/RecruiterView";
import compass from "../../assets/compass.png"

export default function RecruiterToggle() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          width: "60px",
          height: "60px",
          bottom: "20px",
          left: "20px",
          zIndex: 100,
          color: "#ddd0f5",
        //   border: "2px solid #4a3478",
          // padding: "8px 14px",
          fontSize: "9px",
          letterSpacing: "0.04em",
          cursor: "pointer",
          background: `url(${compass}) no-repeat center/cover`,
        }}
        title="Switch to whole summary view"
      >
      </div>

      {open && <RecruiterView onClose={() => setOpen(false)} />}
    </>
  );
}