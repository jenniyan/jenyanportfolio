import GameObject from "../common/GameObject"
import bookshelf from "../../assets/bookshelf.png"

export default function Bookshelf({ onClick }) {
  return (
    <GameObject
      img={bookshelf}
      position={{left: "17.25%", bottom:"50.75%"}}
      label="projects"
      onClick={onClick}
    />
  )
}