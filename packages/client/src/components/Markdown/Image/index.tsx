import React from 'react'
import { throwPopupAction } from '@store/actions/popup.action'
import { MarkdownOutputImage } from './styles'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import { unsplashLoader } from 'src/utils/Image/loader'

const ImageComponent: React.FC<{ src: string }> = ({ src }) => {
  const dispatch = useDispatch()

  const handleImageError = (message: string) => {
    return dispatch(throwPopupAction({ message, state: 'warning' }))
  }

  if (src) {
    return (
      <MarkdownOutputImage>
        <Image
          onError={() =>
            handleImageError('A error occurred while trying to load the image.')
          }
          objectFit='cover'
          quality='25'
          layout='fill'
          loader={unsplashLoader}
          src={src}
        />
      </MarkdownOutputImage>
    )
  } else {
    return null
  }
}

export default ImageComponent
