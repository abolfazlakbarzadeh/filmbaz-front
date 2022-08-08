import React, { ReactElement } from 'react'
import { CommonUtils } from '../../../utils'
import classes from './container.module.scss'

interface IContainer extends HTMLElement {
  children: any
}

export const Container = ({ children, ...rest }: Partial<IContainer>) => {
  return (
    <div {...rest} className={CommonUtils.classNamesGen(classes.container)}>
      {children}
    </div>
  )
}
