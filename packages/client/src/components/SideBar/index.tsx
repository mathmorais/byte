import React from 'react'
import Image from 'next/image'
import { SideBar, SideBarContent, Logo, Menu, Logout } from './styles'
import {
  MdHome,
  MdPerson,
  MdSearch,
  MdExitToApp,
  MdCreate,
} from 'react-icons/md'
import { useRouter } from 'next/router'
import { removeAllCookies } from 'src/utils/Cookies/removeAllCokies'
import MenuItems from './MenuItems'

const SideBarComponent = () => {
  const router = useRouter()

  const actions = [
    {
      name: 'Home',
      href: '/blog/home/1',
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
    {
      name: 'Create',
      href: '/blog/article/create',
      icon: MdCreate,
    },
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
            alt='Logo'
            width='100%'
            height='100%'
            layout='responsive'
            src='/logo.svg'
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
