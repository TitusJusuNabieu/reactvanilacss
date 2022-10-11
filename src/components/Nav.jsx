import styles from "./Nav.module.css"
import {Link} from "react-router-dom"

function Nav() {
  return (
    <div className={styles.mainNav}>
        <div>
            <p><Link to="/">ClassWork</Link></p>
        </div>
        <div className={styles.navLink}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav