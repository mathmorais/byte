import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IconType } from 'react-icons'
import { Item } from './styles'

interface IMenuItemsActions {
  actions: {
    name: string
    href: string
    icon: IconType
  }[]
}

const MenuItemsComponent: React.FC<IMenuItemsActions> = props => {
  const router = useRouter()

  const pathname = router.pathname

  const handleMarkedItem = (action: string) => {
    if (action === 'Home') {
      return pathname.includes('[page]')
    }

    return pathname.includes(action.toLowerCase())
  }

  return (
    <>
      {props.actions.map((action, index) => {
        if (action) {
          return (
            <Link scroll={false} key={index} href={action.href}>
              <Item
                marked={handleMarkedItem(action.name)}
                aria-label={`Go to ${action.name}`}
                name={action.name}
              >
                <action.icon />
              </Item>
            </Link>
          )
        }
      })}
    </>
  )
}

export default MenuItemsComponent
