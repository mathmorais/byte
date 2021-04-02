import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { SideBar, SideBarContent, Logo, Menu, Below } from './styles'
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
import Cookies from 'js-cookie'

const SideBarComponent = () => {
  const router = useRouter()
  const isAdmin = Boolean(Cookies.get('admin'))
  const isLoggedIn = Cookies.get('auth_token') !== null

  const [actions, setActions] = useState([
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
  ])

  useEffect(() => {
    if (isAdmin) {
      setActions([
        ...actions,
        { name: 'Create', href: '/blog/article/create', icon: MdCreate },
      ])
    }
  }, [])

  const handleLogout = async () => {
    removeAllCookies()

    router.replace('/login')
  }

  const handleRedirect = (url: string) => {
    return router.push(url)
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
        {isLoggedIn ? (
          <Below onClick={handleLogout} aria-label='Logout' title='Logout'>
            <MdExitToApp />
          </Below>
        ) : (
          <Below
            onClick={() => handleRedirect('/login')}
            aria-label='Login'
            title='Login'
          >
            <MdPerson />
          </Below>
        )}
      </SideBarContent>
    </SideBar>
  )
}

export default SideBarComponent
