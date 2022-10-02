import { useState } from 'react'

import MenuIcon from 'public/svgs/menu_icon.svg'
import Modal from './Modal'
import MobileMenu from './MobileMenu'

const MenuButton = () => {
  const [menuActive, setMenuActive] = useState(false)

  const openMenuModal = () => {
    document.body.style.overflow = 'hidden'
    setMenuActive(true)
  }

  const closeMenuModal = () => {
    document.body.style.overflow = 'auto'
    setMenuActive(false)
  }

  return (
    <>
      <button
        onClick={!menuActive ? openMenuModal : closeMenuModal}
        className="rounded-full border-2 border-black dark:border-white sm:hidden"
        title="menu button"
      >
        <MenuIcon
          className={
            menuActive
              ? 'menu-trigger active text-4xl '
              : 'menu-trigger text-4xl'
          }
        />
      </button>
      {menuActive && (
        <Modal modalVisible={menuActive} close={closeMenuModal}>
          <MobileMenu close={closeMenuModal} />
        </Modal>
      )}
    </>
  )
}

export default MenuButton
