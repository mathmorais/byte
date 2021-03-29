import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 90%;
  max-width: 1200px;
  min-height: 100%;
  border-radius: 12px;
  padding: 50px 45px;
  background: ${props => props.theme.colors.neutral.light};
  box-shadow: ${props => props.theme.others.defaultBoxShadow};
  margin: 15px auto;
`

export const ProfileName = styled.div`
  margin-bottom: 50px;
`

export const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`

export const ProfileSectionTitle = styled.div`
  margin-bottom: 25px;
  h2 {
    font-weight: 500;
  }
`

export const ProfileSectionContent = styled.div`
  display: flex;
  flex-direction: column;
`
