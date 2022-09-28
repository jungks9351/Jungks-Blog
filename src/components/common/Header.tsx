import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTheme } from 'next-themes'

import SunIcon from 'public/svgs/sun_icon.svg'
import MoonIcon from 'public/svgs/moon_icon.svg'

const Header = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <header className="py-2 text-primary mx-auto flex max-w-8xl items-center justify-between">
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
      <div className="">
        <button
          onClick={toggleTheme}
          className="w-10 h-10 px-2 rounded-full border-2 border-main-purple dark:border-main-purple flex items-center justify-center"
        >
          {theme === 'light' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  )
}

export default Header
