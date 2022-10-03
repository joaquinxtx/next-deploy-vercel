
import  {ActiveLink}  from './ActiveLink'
import style from './Navbar.module.css'

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
      href: '/pircing'
  },
];

export const Navbar = () => {
  return (
    
    <nav className={style.menuContainer}>
      {
        menuItems.map((menuItem)=>(
          <ActiveLink key={menuItem.text} text={menuItem.text} href={menuItem.href} />
        ))
      }
        {/* <ActiveLink text="Home" href="/"/>
        <ActiveLink text="About" href="/about"/>
        <ActiveLink text="Contact" href="/contact"/>
        <ActiveLink text="Pircing" href="/pircing"/> */}
    </nav>
  )
}
