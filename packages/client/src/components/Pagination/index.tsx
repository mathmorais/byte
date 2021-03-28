import { ExtraSmall } from '@styles/Typography'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { PaginationContainer, PaginationPage } from './styles'

interface IPaginationProps {
  postQuantityPerPage: number
  postQuantity: number
  currentPage: number
  maxVisiblePages: number
}

const PaginationComponent: React.FC<IPaginationProps> = props => {
  const pagesQuantity = Math.ceil(
    props.postQuantity / props.postQuantityPerPage
  )
  const currentPage = props.currentPage
  const firstPage = 1
  const lastPage = pagesQuantity

  const createPagesArray = (): number[] => {
    const pages = []

    for (let index = 1; index <= pagesQuantity; index++) {
      pages.push(index)
    }

    return pages
  }

  const handlePagesFormat = (pages: number[]) => {
    const isOnLastInlinePage = currentPage >= props.maxVisiblePages

    if (isOnLastInlinePage) {
      const middleIndex = props.maxVisiblePages / 2
      const pageIndex = pages.indexOf(currentPage)
      const initialSlice = pageIndex - (middleIndex - 1)
      const finalSlice = pageIndex + (middleIndex + 1)

      return pages.slice(initialSlice, finalSlice)
    }

    return pages.slice(0, props.maxVisiblePages)
  }

  const renderPaginationPages = () => {
    const pages = createPagesArray()

    const formatedPages = handlePagesFormat(pages)

    return formatedPages.map((page: number) => {
      return (
        <Link key={page} href={`/blog/home/${page}`}>
          <PaginationPage
            title={`Go to page ${page}`}
            marked={page === currentPage}
          >
            <ExtraSmall as='span'>{page}</ExtraSmall>
          </PaginationPage>
        </Link>
      )
    })
  }

  return (
    <PaginationContainer>
      <Link href={`/blog/home/${firstPage}`}>
        <PaginationPage title={`Go to page ${firstPage}`}>
          <MdKeyboardArrowLeft />
        </PaginationPage>
      </Link>
      {renderPaginationPages()}
      <Link href={`/blog/home/${lastPage}`}>
        <PaginationPage title={`Go to page ${lastPage}`}>
          <MdKeyboardArrowRight />
        </PaginationPage>
      </Link>
    </PaginationContainer>
  )
}

export default PaginationComponent
