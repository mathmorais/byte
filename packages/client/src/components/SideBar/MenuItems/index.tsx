import React, { memo } from 'react'
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

  const ONE_INDEX = 1
  const splitedPathname = router.pathname.split('/')
  const lastItem = splitedPathname.length - ONE_INDEX
  const currentPath = splitedPathname[lastItem]

  return (
    <>
      {props.actions.map((action, index) => {
        return (
          <Link scroll={false} key={index} href={action.href}>
            <Item
              marked={action.name.toLowerCase() === currentPath}
              aria-label={`Go to ${action.name}`}
              name={action.name}
            >
              <action.icon />
            </Item>
          </Link>
        )
      })}
    </>
  )
}

export default memo(MenuItemsComponent)
