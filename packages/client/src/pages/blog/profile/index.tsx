import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SectionPage from '@components/SectionPage'
import { GetServerSideProps } from 'next'
import ProfileComponent from '@components/Pages/Profile'

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
  const ID_EXIST = props.id !== null

  useEffect(() => {
    if (ID_EXIST) {
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

  if (ID_EXIST) {
    if (!loading) {
      return <ProfileComponent {...userData} />
    } else {
      return <SectionPage title='Loading' />
    }
  }

  return <SectionPage title='You need to be logged to access this page' />
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const URL = 'http://server:5050/api/token/verify'
  const { auth_token } = ctx.req.cookies

  let returnData = null

  try {
    const response = await axios.get<{
      message: { id: string; admin: boolean }
    }>(URL, {
      headers: {
        Authorization: `Bearer ${auth_token}`,
      },
    })

    returnData = response.data.message.id
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
