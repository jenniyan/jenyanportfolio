export default function GameObject({
  img,
  position,
  width,
  onClick,
  onMouseEnter,
  onMouseLeave,
  label
}) {
  return (
    <div
      className="game-object"
      style={{ ...position, width }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img src={img} alt=""/>
    </div>
  )
}