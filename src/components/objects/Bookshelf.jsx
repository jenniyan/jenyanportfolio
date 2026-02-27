import GameObject from "../common/GameObject"
import bookshelf from "../../assets/bookshelf.png"

export default function Bookshelf({ onClick, onMouseEnter, onMouseLeave }) {
  return (
    <GameObject
      img={bookshelf}
      position={{left: "18%", bottom:"50.75%"}}
      label="projects"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  )
}