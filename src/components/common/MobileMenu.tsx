import { MouseEventHandler } from 'react'
import navLinks from 'src/data/navlinks'

import MenuItem from './MenuItem'

interface MobileMenuProps {
  close: () => void
}

const MobileMenu = ({ close }: MobileMenuProps) => {
  const closeMenu: MouseEventHandler<HTMLLIElement> = (e) => {
    e.stopPropagation()
    close()
  }

  return (
    <ul className="absolute top-[88px] bg-white dark:bg-gray-900 block w-full h-screen border-t border-gray-200 dark:border-gray-600 sm:hidden z-40">
      {navLinks.map((navLink) => (
        <MenuItem
          key={navLink.id}
          title={navLink.title}
          link={navLink.link}
          closeMenu={closeMenu}
        />
      ))}
    </ul>
  )
}

export default MobileMenu
