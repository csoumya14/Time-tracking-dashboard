import React from 'react'
import { HeaderContainer } from './Header.css'
import {ImageHeading} from '../ImageHeading/ImageHeading'
import {RadioSelectElement} from '../RadioSelectContainer/RadioSelectContainer'
export const Header = () => {
  return(
    <HeaderContainer>
      <ImageHeading/>   
      <RadioSelectElement/>
    </HeaderContainer>
  )
}