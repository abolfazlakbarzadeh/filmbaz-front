import React, { ReactElement } from 'react'
import { classNamesGen } from 'utils/common.utils'
import { CommonUtils } from '../../../utils'
import classes from './container.module.scss'

interface IContainer extends HTMLElement {
  children: any
}

export const Container = ({ children, ...rest }: Partial<IContainer>) => {
  return (
    <div {...rest} className={classNamesGen(classes.container)}>
      {children}
    </div>
  )
}
