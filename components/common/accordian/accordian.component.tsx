import { Icon } from '@iconify/react'
import React, { ReactComponentElement, ReactElement, ReactHTMLElement } from 'react'
import { CommonUtils } from 'utils'
import classes from './accordian.component.module.scss'

export type IAccordian = {
    id: string,
    buttonContent: ReactElement<HTMLElement>,
    showArrowIcon: boolean,
    icon?: string
    iconSize?: number
} & ReactHTMLElement<HTMLDivElement>['props']

const Accordian = (
    { id, buttonContent, showArrowIcon, icon, iconSize, ...rest }: IAccordian
) => {

    const IDS = {
        context: id,
        header: `${id}_header`,
        content: `${id}_content`
    }


    return (
        <div itemID={id} className={classes.accordian} {...rest}>
            <div itemID={IDS.header} className={CommonUtils.classNamesGen('d-flex', 'flex-align-center', 'flex-justify-between', classes.header)}>
                <div className={CommonUtils.classNamesGen('d-flex', 'flex-align-center', 'flex-justify-between', 'gap-10', classes.button_section)}>
                    {
                        !!icon && (
                            <Icon style={{
                                // @ts-ignore
                                width: `${iconSize / 16}rem`,
                                // @ts-ignore
                                height: `${iconSize / 16}rem`,
                            }} className={classes.icon} icon={icon} />
                        )
                    }
                    <div className={classes.button}>
                        {buttonContent}
                    </div>
                </div>
                <div className={classes.arrowIcon}>
                    {showArrowIcon && (
                        <Icon icon="charm:chevron-right" />
                    )}
                </div>
            </div>
        </div>
    )
}

Accordian.defaultProps = {
    buttonContent: "",
    showArrowIcon: true,
    buttonSize: 20
}

export { Accordian }