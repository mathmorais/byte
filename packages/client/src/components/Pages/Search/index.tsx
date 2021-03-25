import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import SectionPage from '@components/SectionPage'
import axios from 'axios'
import InputComponent from '@components/Input'
import lottie from 'lottie-web'
import ArticlePreviewComponent from '@components/ArticleCard'
import { ArticleGrid } from '@styles/ArticleGrid'
import { checkCurrentEnviroment } from 'src/utils/checkEnviroment'
import { SearchTopContainer, SearchNotFound, SearchLoading } from './styles'
import { MdSearch } from 'react-icons/md'
import { Large } from '@styles/Typography'

const SearchComponent = () => {
  const [searchInput, setSearchInput] = useState('')
  const [findedPosts, setFindedPosts] = useState([])
  const [pending, setPending] = useState(false)
  const loadingDiv = useRef<HTMLDivElement>()
  const notFoundDiv = useRef<HTMLDivElement>()

  useEffect(() => {
    if (pending) {
      lottie.loadAnimation({
        container: loadingDiv.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animations/loading.json',
      })
    }
  }, [pending])

  useEffect(() => {
    const getPostsData = async () => {
      const url = `${checkCurrentEnviroment()}/posts/search/filter?filter=${searchInput}`

      const response = await axios.get(url)

      const posts = response.data.message

      setPending(false)
      setFindedPosts(posts)
    }

    getPostsData()
  }, [searchInput])

  const handleDebounceInput = () => {
    let timeout = null

    return (value: string, delay: number) => {
      clearTimeout(timeout)

      timeout = setTimeout(() => {
        setPending(true)
        setSearchInput(value)
      }, delay)
    }
  }

  const debounceInput = handleDebounceInput()

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) =>
    debounceInput(event.target.value, 500)

  const renderPosts = () => {
    return findedPosts.map((post, index) => (
      <ArticlePreviewComponent key={index} {...post} />
    ))
  }

  const handleArticleGrid = () => {
    if (findedPosts.length <= 0) {
      return (
        <SearchNotFound ref={notFoundDiv}>
          <Large>No items found</Large>
        </SearchNotFound>
      )
    } else {
      return <ArticleGrid>{renderPosts()}</ArticleGrid>
    }
  }

  return (
    <SectionPage title='Search'>
      <SearchTopContainer>
        <InputComponent
          Icon={MdSearch}
          onChange={handleSearchInput}
          placeholder='Type a title or tag of the posts.'
          aria-label='Type to make a search'
        ></InputComponent>
      </SearchTopContainer>
      {pending ? (
        <SearchLoading ref={loadingDiv} />
      ) : (
        <>{handleArticleGrid()}</>
      )}
    </SectionPage>
  )
}

export default SearchComponent
