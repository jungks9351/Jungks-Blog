import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import SunIcon from 'public/svgs/sun_icon.svg'
import MoonIcon from 'public/svgs/moon_icon.svg'

import navLinks from 'src/data/navlinks'
import MenuButton from './MenuButton'

const Header = () => {
  const { theme, setTheme } = useTheme()
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [setLoaded])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <header className="absolute top-0 z-[100] w-full px-8 bg-white dark:bg-gray-900">
      <nav className="flex items-center justify-between">
        <Link href={'/'}>
          <h1 className="cursor-pointer">
            <Image
              src="/images/blog_logo.png"
              alt="blog logo"
              layout="fixed"
              width={50}
              height={50}
              objectFit="cover"
            />
          </h1>
        </Link>
        <div className="flex gap-5">
          <MenuButton />
          <button
            onClick={toggleTheme}
            title="darkmode toggle button"
            className="w-10 h-10 px-2 rounded-full border-2 border-black dark:border-white flex items-center justify-center"
          >
            {loaded && theme === 'light' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
