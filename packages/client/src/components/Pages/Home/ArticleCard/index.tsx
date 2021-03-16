import React from 'react'
import {
  ArticleCardContainer,
  ArticleCardThumbnail,
  ArticleCardInfo,
  ArticleCardInfoDetails,
  ArticleCardInfoDetailsItem,
  ArticleCardInfoDetailsRight,
  ArticleCardInfoTitle,
  ArticleCardInfoTags,
  ArticleCardInfoTagItem,
} from './styles'
import Image from 'next/image'
import { Medium, ExtraSmall, Small } from '@styles/Typography'
import { MdAvTimer, MdVisibility, MdChatBubble } from 'react-icons/md'
import Link from 'next/link'
import { unsplashLoader } from 'src/utils/Image/loader'

interface IArticleComment {
  name: string
  content: string
}

export interface IArticleProps {
  _id: string
  infos: {
    title: string
    read_time: number
    views: number
    thumbnail: string
    creation_time: Date
  }
  tags: string[]
  content: string
  comments: IArticleComment[]
}

const ArticlePreviewComponent: React.FC<IArticleProps> = ({
  _id,
  tags,
  comments,
  infos,
}) => {
  const handleSmallTime = (time: number) => {
    const isBelowTen = time < 10

    return isBelowTen ? `0${time}` : time
  }

  const handleformatTime = (time: number) => {
    const seconds = handleSmallTime(Math.floor(time % 60))
    const minutes = handleSmallTime(Math.floor(time / 60))

    return `${minutes}:${seconds}`
  }

  const TagsItem = () => {
    return (
      <>
        {tags.map((tag, index) => {
          return (
            <ArticleCardInfoTagItem key={index}>
              <Small>{tag}</Small>
            </ArticleCardInfoTagItem>
          )
        })}
      </>
    )
  }

  return (
    <Link href={`/blog/article/${_id}`}>
      <ArticleCardContainer>
        <ArticleCardThumbnail>
          <Image
            priority
            objectFit='cover'
            layout='fill'
            loader={unsplashLoader}
            src={infos.thumbnail}
            quality='30'
            alt='thumbnail'
          />
        </ArticleCardThumbnail>
        <ArticleCardInfo>
          <ArticleCardInfoDetails>
            <ArticleCardInfoDetailsItem>
              <MdAvTimer />
              <ExtraSmall>{handleformatTime(infos.read_time)}</ExtraSmall>
            </ArticleCardInfoDetailsItem>
            <ArticleCardInfoDetailsRight>
              <ArticleCardInfoDetailsItem>
                <MdVisibility />
                <ExtraSmall>{infos.views}</ExtraSmall>
              </ArticleCardInfoDetailsItem>
              <ArticleCardInfoDetailsItem>
                <MdChatBubble />
                <ExtraSmall>{comments.length}</ExtraSmall>
              </ArticleCardInfoDetailsItem>
            </ArticleCardInfoDetailsRight>
          </ArticleCardInfoDetails>
          <ArticleCardInfoTitle>
            <Medium as='h5'>{infos.title}</Medium>
          </ArticleCardInfoTitle>
          <ArticleCardInfoTags>
            <TagsItem />
          </ArticleCardInfoTags>
        </ArticleCardInfo>
      </ArticleCardContainer>
    </Link>
  )
}

export default ArticlePreviewComponent
