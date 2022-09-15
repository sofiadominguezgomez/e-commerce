import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../styles/navbar.module.css'
import logo from '../media/oreo-biscuit-svgrepo-com.svg'

const NavBar = ({title}) => {

  return (
    <nav className={styles.navContainer} >
    <div className={styles.logoContainer}>
    <img src={logo} alt={logo} />
         <Link to=".">
            <h1> {title} </h1>
        </Link>
    </div>
    <ul className={styles.navList}>
        <li className={styles.listItem} >
            <Link to="/products">
                Products
            </Link>
        </li>
        <li className={styles.listItem} > About</li>
        <li className={styles.listItem} >
            Contact
        </li>
            
    </ul>
    </nav>
  )
}

export default NavBar