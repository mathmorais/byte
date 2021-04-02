import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SectionPage from '@components/SectionPage'
import { GetServerSideProps } from 'next'
import ProfileComponent from '@components/Pages/Profile'
import { checkCurrentEnviroment } from 'src/utils/checkEnviroment'

interface IProfileProps {
  id: string
}

export interface IUserData {
  email_verified: boolean
  admin: boolean
  _id: string
  name: string
  email: string
  password: string
}

const Profile: React.FC<IProfileProps> = props => {
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState<IUserData>(null)
  const idExist = props.id !== null

  useEffect(() => {
    if (idExist) {
      const getUserData = async () => {
        const response = await axios.get(
          `http://localhost:5050/api/users/find/${props.id}`
        )
        setUserData(response.data.message)
        setLoading(false)
      }
      getUserData()
    }
  }, [])

  if (idExist) {
    if (!loading) {
      return <ProfileComponent {...userData} />
    } else {
      return <SectionPage title='Loading' />
    }
  }

  return <SectionPage title='You need to be logged to access this page' />
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const currentApiUrl = checkCurrentEnviroment()
  const URL = `${currentApiUrl}/token/verify`
  const { auth_token } = ctx.req.cookies

  let returnData = null

  try {
    const { data } = await axios.get<{
      message: { id: string; admin: boolean }
    }>(URL, {
      headers: {
        Authorization: `Bearer ${auth_token}`,
      },
    })

    returnData = data.message.id
  } catch (err) {
    return err
  } finally {
    return {
      props: {
        id: returnData,
      },
    }
  }
}

export default Profile
