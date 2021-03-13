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
import { Medium, ExtraSmall } from '@styles/Typography'
import { MdAvTimer, MdVisibility, MdChatBubble } from 'react-icons/md'

export interface IPostProps {
  readTime: string
  views: number
  comments: number
  title: string
  tags: string[]
  thumbnail: string
}

const PostComponent: React.FC<IPostProps> = props => {
  const TagsItem = () => {
    return (
      <>
        {props.tags.map((tag, index) => {
          return (
            <PostInfoTagItem key={index}>
              <ExtraSmall>{tag}</ExtraSmall>
            </PostInfoTagItem>
          )
        })}
      </>
    )
  }

  return (
    <PostContainer>
      <PostThumbnail>
        <Image
          objectFit='cover'
          layout='fill'
          src={props.thumbnail}
          alt='thumbnail'
        />
      </PostThumbnail>
      <PostInfo>
        <PostInfoDetails>
          <PostInfoDetailsItem>
            <MdAvTimer />
            <ExtraSmall>{props.readTime}</ExtraSmall>
          </PostInfoDetailsItem>
          <PostInfoDetailsRight>
            <PostInfoDetailsItem>
              <MdVisibility />
              <ExtraSmall>{props.views}</ExtraSmall>
            </PostInfoDetailsItem>
            <PostInfoDetailsItem>
              <MdChatBubble />
              <ExtraSmall>{props.comments}</ExtraSmall>
            </PostInfoDetailsItem>
          </PostInfoDetailsRight>
        </PostInfoDetails>
        <PostInfoTitle>
          <Medium as='h5'>{props.title}</Medium>
        </PostInfoTitle>
        <PostInfoTags>
          <TagsItem />
        </PostInfoTags>
      </PostInfo>
    </PostContainer>
  )
}

export default PostComponent
