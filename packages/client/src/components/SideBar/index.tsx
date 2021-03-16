import React from 'react'
import Image from 'next/image'
import { SideBar, SideBarContent, Logo, Menu, Logout } from './styles'
import {
  MdHome,
  MdPerson,
  MdSearch,
  MdBookmark,
  MdExitToApp,
} from 'react-icons/md'
import { useRouter } from 'next/router'
import { removeAllCookies } from 'src/utils/Cookies/removeAllCokies'
import MenuItems from './MenuItems'
import Cookies from 'js-cookie'

const SideBarComponent = () => {
  const router = useRouter()

  const checkReadingCookie = (): string => {
    return Cookies.get('reading_article')
  }

  const actions = [
    {
      name: 'Home',
      href: '/blog/home',
      icon: MdHome,
    },
    {
      name: 'Profile',
      href: '/blog/profile',
      icon: MdPerson,
    },
    {
      name: 'Search',
      href: '/blog/search',
      icon: MdSearch,
    },
    checkReadingCookie()
      ? {
          name: 'Reading',
          href: `/blog/article/${checkReadingCookie()}`,
          icon: MdBookmark,
        }
      : null,
  ]

  const handleLogout = () => {
    try {
      removeAllCookies()
      router.replace('/login')
    } catch (err) {
      return err
    }
  }

  return (
    <SideBar>
      <SideBarContent>
        <Logo>
          <Image
            width='100%'
            height='100%'
            layout='responsive'
            src='/logo.png'
            priority
          />
        </Logo>
        <Menu>
          <MenuItems actions={actions} />
        </Menu>
        <Logout onClick={handleLogout} aria-label='Logout' title='Logout'>
          <MdExitToApp />
        </Logout>
      </SideBarContent>
    </SideBar>
  )
}

export default SideBarComponent
