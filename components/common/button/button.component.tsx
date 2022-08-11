import { Colors } from 'common'
import classes from './button.component.module.scss'
import React, { ReactComponentElement, ReactHTMLElement } from 'react'
import { classNamesGen } from 'utils/common.utils'
import { Icon } from '@iconify/react'



export type IButton = {
    color?: Colors,
    icon?: string
    iconSize?: number
} & ReactHTMLElement<HTMLElement>['props']

const Button = ({ color, className, children, icon, iconSize, ...rest }: IButton) => {
    return (
        <div {...rest} className={classNamesGen(
            'd-flex',
            'flex-align-center',
            classes[`color-${color}`],
            classes.button,
            className)}>
            {!!icon && (
                <Icon style={{
                    //@ts-ignore
                    width: `${iconSize / 16}rem`,
                    //@ts-ignore
                    height: `${iconSize / 16}rem`,
                }} className={classes.icon} icon={icon} />
            )}
            <div className={classes.main}>
                {children}
            </div>
        </div>
    )
}

Button.defaultProps = {
    color: 'primary',
    iconSize: 16

}

export { Button }