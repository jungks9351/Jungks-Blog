import { useState } from 'react'

import MenuIcon from 'public/svgs/menu_icon.svg'

const MenuButton = () => {
  const [active, setActive] = useState(false)

  const toggleAnimation = () => {
    setActive(!active)
  }

  return (
    <button
      onClick={toggleAnimation}
      className="rounded-full border-2 border-black dark:border-white sm:hidden"
      title="menu button"
    >
      <MenuIcon
        className={
          active ? 'menu-trigger active text-4xl' : 'menu-trigger text-4xl'
        }
      />
    </button>
  )
}

export default MenuButton
