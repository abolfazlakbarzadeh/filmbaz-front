import React, { ReactElement, ReactHTML, ReactHTMLElement, ReactNode } from 'react'
import { CommonUtils } from '../../../utils'
import classes from './section.component.module.scss'

type Options = {
    underLineTitle: boolean,
    centerTitle: boolean
}

type ISection = {
    title: string,
    children: any,
    className: any,

} & Options & ReactHTMLElement<HTMLElement>['props']

const Section = ({ children, centerTitle, underLineTitle, className, title, ...rest }: Partial<ISection>) => {
    return (
        <div {...rest} className={CommonUtils.classNamesGen([
            'd-flex',
            'flex-column',
            'flex-align-start',
            classes.section,
            className])}>
            <div className={CommonUtils.classNamesGen([
                {
                    [classes.center]: centerTitle,
                    [classes.underline]: underLineTitle
                },
                classes.title
            ])}>
                {title}
            </div>
            <div className={classes.main}>
                {children}
            </div>
        </div>
    )
}

Section.defaultProps = {
    title: "untitled",
    underLineTitle: true,
    centerTitle: false
}

export { Section }
