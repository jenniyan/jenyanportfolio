export default function GameObject({
  img,
  position,
  width,
  onClick,
  label
}) {
  return (
    <div
      className="game-object"
      style={{ ...position, width }}
      onClick={onClick}
    >
      <img src={img} alt=""/>

      {label && <div className="tooltip">{label}</div>}
    </div>
  )
}