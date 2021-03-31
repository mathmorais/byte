import React, { memo } from 'react'
import SectionPage from '@components/SectionPage'
import { IUserData } from '@pages/blog/profile'
import { Large } from '@styles/Typography'
import {
  ProfileContainer,
  ProfileName,
  ProfileSection,
  ProfileSectionContent,
  ProfileSectionTitle,
} from './styles'
import InfoItem from './InfoItem'

const ProfileComponent: React.FC<IUserData> = props => {
  const filterProfileProps = () => {
    const filtredData = Object.keys(props).filter(item => {
      return item === 'email' || item === 'email_verified'
    })

    return filtredData
  }

  const generateInfosArray = () => {
    const infos = []
    const filtredData = filterProfileProps()

    filtredData.forEach(item => {
      return infos.push({
        label: item,
        text: props[item],
      })
    })

    return infos
  }

  const renderInfoItems = () => {
    const infos = generateInfosArray()
    const orderInfos = infos.reverse()

    return orderInfos.map((item, index) => {
      return <InfoItem key={index} {...item} />
    })
  }

  return (
    <SectionPage title='Profile'>
      <ProfileContainer>
        <ProfileName>
          <Large>{props.name}</Large>
        </ProfileName>
        <ProfileSection>
          <ProfileSectionTitle>
            <Large as='h2'>Informations</Large>
          </ProfileSectionTitle>
          <ProfileSectionContent>{renderInfoItems()}</ProfileSectionContent>
        </ProfileSection>
      </ProfileContainer>
    </SectionPage>
  )
}

export default memo(ProfileComponent)
