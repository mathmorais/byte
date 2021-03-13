import React, { memo } from 'react'
import { Medium } from '@styles/Typography'
import { InfoItem, InfoItemLabel, InfoItemText } from './styles'

interface IInfoItemProps {
  label: string
  text: string
}

const InfoItemComponent: React.FC<IInfoItemProps> = props => {
  const formatCapitalizeString = (string: string) => {
    const FIRST_INDEX = 0
    const firstChar = string.charAt(FIRST_INDEX)
    return string.replace(firstChar, firstChar.toUpperCase())
  }

  const formatSpacesString = (string: string) => {
    const SEPERATOR = '_'
    const SPACE_BETWEEN = ' '

    return string.split(SEPERATOR).join(SPACE_BETWEEN)
  }

  const formatLabels = (label: string) => {
    const formatedSpaces = formatSpacesString(label)
    const formatedCapilazed = formatCapitalizeString(formatedSpaces)

    return formatedCapilazed
  }

  const formatValues = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return handleBooleanValues(value)
    }

    return value.toString()
  }

  const handleBooleanValues = (boolean: boolean) => {
    return boolean ? 'Yes' : 'No'
  }

  return (
    <InfoItem>
      <InfoItemLabel>
        <Medium as='h4'>{formatLabels(props.label)}</Medium>
      </InfoItemLabel>
      <InfoItemText>
        <Medium as='span'>{formatValues(props.text)}</Medium>
      </InfoItemText>
    </InfoItem>
  )
}

export default memo(InfoItemComponent)
