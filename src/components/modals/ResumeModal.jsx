import Modal from "../Modal"

export default function ProjectsModal({ open, close }) {

  return (
    <Modal open={open} close={close}>

      <h2>Projects</h2>

      <ul>
        <li>AI Research Assistant</li>
        <li>Fullstack Web App</li>
        <li>React Dashboard</li>
        <li>Hackathon Projects</li>
      </ul>

    </Modal>
  )
}