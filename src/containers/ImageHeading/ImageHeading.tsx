import React from 'react'
import { ImageHeadingDiv } from './ImageHeading.css'
import { ImageElement } from '../../components/ImageElement/ImageElement'
import {HeadingElement} from '../../components/HeadingElement/HeadingElement'

export const ImageHeading = () => {
  return(
    <ImageHeadingDiv>
        <ImageElement/>
        <HeadingElement/>
      </ImageHeadingDiv>
  )
}