import React from 'react'
import { ImageHeadingHeader } from './ImageHeading.css'
import { ImageElement } from '../../components/ImageElement/ImageElement'
import {HeadingElement} from '../../components/HeadingElement/HeadingElement'

export const ImageHeading = () => {
  return(
    <ImageHeadingHeader>
        <ImageElement/>
        <HeadingElement/>
      </ImageHeadingHeader>
  )
}