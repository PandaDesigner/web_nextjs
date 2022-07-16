import React from 'react'
import styles from './Navbar.module.css'
import ActiveLink from './ActiveLink'


export const NavBar = () => {

  const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

return (
  <>
    <nav className={styles['menu-container']}>

        { 
        menuItems.map( ({text, href}) => (
        <ActiveLink key={text} text={text} href={href}/> 
          )
        )
      }

    </nav>
    </>
  )
}
