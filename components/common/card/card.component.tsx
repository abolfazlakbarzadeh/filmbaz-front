import React, { ReactElement, ReactHTMLElement } from 'react'
import { classNamesGen } from 'utils/common.utils';
import { CommonUtils } from '../../../utils'
import classes from './card.module.scss'

type Padding = "none" | "xs" | "s" | "m" | "l" | "xl" | number;
type Radius = "none" | "xs" | "s" | "m" | "l" | "xl" | number;
type BackgroundColor = "primary" | "secondary" | "background";

type ICard = {
  padding: Padding;
  radius: Radius;
  backgroundColor: BackgroundColor;
  children: any;
  horizontalCenter: boolean;
  fullWidth: boolean;
  fullHeight: boolean;
} & ReactHTMLElement<HTMLElement>['props']

export const Card = ({
  padding = "m",
  radius = "m",
  children,
  backgroundColor = "secondary",
  fullWidth,
  fullHeight,
  horizontalCenter,
  className,
  ...rest }: Partial<ICard>) => {
  return (
    <div {...rest} className={classNamesGen(
      classes.card,
      {
        [classes.full_width]: fullWidth,
        [classes.full_height]: fullHeight
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
        [`rad-${radius}`]: typeof radius == "number"
      },
      { 'horizontal-center': horizontalCenter },
      classes[`color-${backgroundColor}`],
      className
    )}>
      {children}
    </div >
  )
}
