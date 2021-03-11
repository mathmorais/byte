import React from 'react'
import Image from 'next/image'
import { SideBar, Logo, Menu, Item, Logout } from './styles'
import {
  MdHome,
  MdPerson,
  MdSearch,
  MdBookmark,
  MdExitToApp,
} from 'react-icons/md'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import Cookies from 'js-cookie'
import { removeAllCookies } from 'src/utils/Cookies/removeAllCokies'

const SideBarComponent = () => {
  const router = useRouter()
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
    {
      name: 'Reading',
      href: '/blog/article',
      icon: MdBookmark,
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

  const MenuItems = () => {
    return (
      <>
        {actions.map((action, index) => {
          return (
            <Link href={action.href}>
              <Item
                aria-label={`Go to ${action.name}`}
                key={index}
                name={action.name}
              >
                {<action.icon />}
              </Item>
            </Link>
          )
        })}
      </>
    )
  }

  return (
    <SideBar>
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
        <MenuItems />
      </Menu>
      <Logout onClick={handleLogout} aria-label='Logout' title='Logout'>
        <MdExitToApp />
      </Logout>
    </SideBar>
  )
}

export default SideBarComponent
