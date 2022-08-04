import React, { ReactElement } from 'react'
import { CommonUtils } from '../../../utils'
import classes from './card.module.scss'

type Padding = "none" | "xs" | "s" | "m" | "l" | "xl" | number
type Radius = "none" | "xs" | "s" | "m" | "l" | "xl"

interface ICard extends HTMLElement {
  padding: Padding
  radius: Radius
  children: any
  horizontalCenter: boolean
  fullWidth: boolean
}

export const Card = ({ padding = "m", radius = "m", children, fullWidth, horizontalCenter, className, ...rest }: Partial<ICard>) => {
  return (
    <div {...rest} className={CommonUtils.classNamesGen([
      {
        [classes.full_width]: fullWidth
      },
      {
        'pad-5': padding == "xs",
        'pad-10': padding == "s",
        'pad-16': padding == "m",
        'pad-20': padding == "l",
        'pad-26': padding == "xl",
        [`pad-${padding}`]: typeof padding == "number"
      },
      {
        'rad-5': radius == "xs",
        'rad-10': radius == "s",
        'rad-16': radius == "m",
        'rad-20': radius == "l",
        'rad-26': radius == "xl"
      },
      { 'horizontal-center': horizontalCenter }
      , classes.card, className])}>
      {children}
    </div >
  )
}
