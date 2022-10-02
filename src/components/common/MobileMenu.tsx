import { MouseEventHandler } from 'react'
import navLinks from 'src/data/navlinks'

import MenuItem from './MenuItem'

interface MobileMenuProps {
  close: () => void
}

const MobileMenu = ({ close }: MobileMenuProps) => {
  const closeMenu: MouseEventHandler<HTMLUListElement> = (e) => {
    e.stopPropagation()
    close()
  }

  return (
    <ul
      onClick={closeMenu}
      className="absolute top-[56px] bg-white dark:bg-gray-900 block w-full h-screen border-t border-gray-200 dark:border-gray-600 sm:hidden"
    >
      {navLinks.map((navLink) => (
        <MenuItem key={navLink.id} title={navLink.title} link={navLink.link} />
      ))}
    </ul>
  )
}

export default MobileMenu
