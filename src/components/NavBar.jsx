
import { Link } from 'react-router-dom'

function NarBar() {
  return (
    <nav>
        <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NarBar