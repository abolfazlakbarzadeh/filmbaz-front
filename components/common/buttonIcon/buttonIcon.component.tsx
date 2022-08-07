import { Icon, IconifyIcon, IconProps } from '@iconify/react'
import React, { ReactHTMLElement } from 'react'
import { CommonUtils } from '../../../utils'
import classes from './buttonIcon.component.module.scss'

type IButtonIcon = { icon: any, size: number, hasShadow: boolean } & ReactHTMLElement<HTMLElement>['props']

export const ButtonIcon = ({ icon, size = 16, hasShadow = true, className, ...rest }: Partial<IButtonIcon>) => {
    return (
        <div {...rest} className={CommonUtils.classNamesGen(['button', { [classes.has_shadow]: hasShadow }, classes.button_icon, className])}>
            <Icon style={{ width: `${size / 16}rem`, height: `${size / 16}rem` }} icon={icon} />
        </div>
    )
}
