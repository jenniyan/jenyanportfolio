export default function GameObject({
  img,
  position,
  width,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className="",
  overlay = null,
}) {
  return (
    <div
      className={`game-object ${className}`}
      style={{ ...position, width }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="image-wrapper" style={{ position: "relative", display: "inline-block" }}>
        <img src={img} alt="" />
        {overlay && <div className={`object-overlay ${overlay}`} />}
      </div>
    </div>
  )
}