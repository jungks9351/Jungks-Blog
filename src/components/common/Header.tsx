import Image from 'next/image'
import Link from 'next/link'

import { useTheme } from 'next-themes'

import SunIcon from 'public/svgs/sun_icon.svg'
import MoonIcon from 'public/svgs/moon_icon.svg'

import navLinks from 'src/data/navlinks'
import MenuButton from './MenuButton'
import useMount from 'src/hooks/useMount'

const Header = () => {
  const { theme, setTheme } = useTheme()
  const isMount = useMount()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <header className="absolute top-0 z-20 w-full px-8 bg-white dark:bg-gray-900">
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
        <div className="hidden sm:block">
          <ul className="flex">
            {navLinks.map((navLink) => (
              <Link key={navLink.id} href={navLink.link}>
                <li className="px-4">{navLink.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex gap-5">
          <button
            onClick={toggleTheme}
            title="darkmode toggle button"
            className="w-10 h-10 px-2 rounded-full border-2 border-black dark:border-white flex items-center justify-center"
          >
            {isMount && theme === 'light' ? <SunIcon /> : <MoonIcon />}
          </button>
          <MenuButton />
        </div>
      </nav>
    </header>
  )
}

export default Header
