import React, { ReactElement, ReactHTML, ReactHTMLElement, ReactNode } from 'react'
import classes from './section.component.module.scss'

type Options = {
    underLineTitle: boolean,
    centerTitle: boolean
}

type ISection = {
    title: string,
    options: Options,
    children: any,
    className: any,

} & ReactHTMLElement<HTMLElement>['props']

const Section = (props: Partial<ISection>) => {
    return (
        <div></div>
    )
}

Section.defaultProps = {
    title: "untitled"
}

export { Section }
