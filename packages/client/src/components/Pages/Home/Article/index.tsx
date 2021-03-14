import React from 'react'
import {
  PostContainer,
  PostThumbnail,
  PostInfo,
  PostInfoDetails,
  PostInfoDetailsItem,
  PostInfoDetailsRight,
  PostInfoTitle,
  PostInfoTags,
  PostInfoTagItem,
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

const PostComponent: React.FC<IArticleProps> = ({
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
            <PostInfoTagItem key={index}>
              <Small>{tag}</Small>
            </PostInfoTagItem>
          )
        })}
      </>
    )
  }

  return (
    <Link href={`/blog/article/${_id}`}>
      <PostContainer>
        <PostThumbnail>
          <Image
            priority
            objectFit='cover'
            layout='fill'
            loader={unsplashLoader}
            src={infos.thumbnail}
            quality='30'
            alt='thumbnail'
          />
        </PostThumbnail>
        <PostInfo>
          <PostInfoDetails>
            <PostInfoDetailsItem>
              <MdAvTimer />
              <ExtraSmall>{handleformatTime(infos.read_time)}</ExtraSmall>
            </PostInfoDetailsItem>
            <PostInfoDetailsRight>
              <PostInfoDetailsItem>
                <MdVisibility />
                <ExtraSmall>{infos.views}</ExtraSmall>
              </PostInfoDetailsItem>
              <PostInfoDetailsItem>
                <MdChatBubble />
                <ExtraSmall>{comments.length}</ExtraSmall>
              </PostInfoDetailsItem>
            </PostInfoDetailsRight>
          </PostInfoDetails>
          <PostInfoTitle>
            <Medium as='h5'>{infos.title}</Medium>
          </PostInfoTitle>
          <PostInfoTags>
            <TagsItem />
          </PostInfoTags>
        </PostInfo>
      </PostContainer>
    </Link>
  )
}

export default PostComponent
