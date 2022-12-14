import Link from 'next/link'
import { MouseEventHandler } from 'react'

interface MenuItemProps {
  closeMenu: MouseEventHandler<HTMLLIElement>
  title: string
  link: string
}

const MenuItem = ({ closeMenu, title, link }: MenuItemProps) => {
  return (
    <Link href={link}>
      <li
        className="hover:bg-[#f7f7f7] dark:hover:bg-[#2e3039] text-primary border-b border-gray-200 px-5vw py-9 dark:border-gray-600 text-center cursor-pointer font-bold"
        onClick={closeMenu}
      >
        {title}
      </li>
    </Link>
  )
}

export default MenuItem
