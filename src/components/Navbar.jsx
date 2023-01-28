import Link from "next/link"
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
<nav className={ styles['menu-container'] } >
    <Link href="/contact">Contact</Link>
    <Link href="/about">About</Link>
    <Link href="/">Home</Link>
</nav>
  )
}
