import { Icon } from '@iconify/react'
import React, { ReactElement, ReactHTML, ReactHTMLElement, ReactNode } from 'react'
import { CommonUtils } from '../../../utils'
import classes from './section.component.module.scss'

type Options = {
    underLineTitle: boolean,
    centerTitle: boolean
    titleBold: boolean
    fullWidth?: boolean
}

type ISection = {
    title: string,
    children: any,
    className: any,
    icon: any,
    iconSize: number,
    titleSize: number,
    headPadding: number

} & Options & ReactHTMLElement<HTMLElement>['props']

const Section = ({
    children,
    centerTitle,
    titleBold,
    underLineTitle,
    className,
    title,
    icon,
    headPadding,
    iconSize,
    titleSize,
    fullWidth,
    ...rest
}: Partial<ISection>) => {
    return (
        <div {...rest} className={CommonUtils.classNamesGen(
            'd-flex',
            'flex-column',
            'flex-align-start',
            {
                'w-100': fullWidth
            },
            classes.section,
            className)}>
            <div className={CommonUtils.classNamesGen(
                'd-flex',
                'flex-align-center',
                'gap-5',
                `padb-${headPadding}`,
                {
                    [classes.center]: centerTitle,
                    'flex-justify-center': centerTitle,
                    [classes.underline]: underLineTitle
                },
                classes.head)}>
                {!!icon && (
                    <Icon style={{
                        width: `${(iconSize || 0) / 16}rem`,
                        height: `${(iconSize || 0) / 16}rem`
                    }} icon={icon} />
                )}
                <div className={CommonUtils.classNamesGen(
                    'label',
                    `size-${titleSize}`,
                    {
                        'bold': titleBold
                    },
                    classes.title
                )}>
                    {title}
                </div>
            </div>
            <div className={classes.main}>
                {children}
            </div>
        </div>
    )
}

Section.defaultProps = {
    title: "untitled",
    underLineTitle: false,
    centerTitle: false,
    titleBold: false,
    fullWidth: true,
    headPadding: 10,
    iconSize: 16,
    titleSize: 16,
}

export { Section }
