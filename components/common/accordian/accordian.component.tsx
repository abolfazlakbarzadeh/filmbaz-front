import { Icon } from '@iconify/react'
import React, { ReactComponentElement, ReactElement, ReactHTMLElement, useEffect, useRef, useState } from 'react'
import { CommonUtils } from 'utils'
import { classNamesGen } from 'utils/common.utils'
import { useDetectDirection } from 'utils/hooks.utils'
import classes from './accordian.component.module.scss'

export type IAccordian = {
    id: string,
    buttonContent: ReactElement<HTMLElement>,
    showArrowIcon: boolean,
    icon?: string
    iconSize?: number
} & ReactHTMLElement<HTMLDivElement>['props']

const Accordian = (
    { id, buttonContent, showArrowIcon, icon, iconSize, children, ...rest }: IAccordian
) => {

    const IDS = {
        context: id.replaceAll(' ', "_"),
        header: `${id}_header`.replaceAll(' ', "_"),
        content: `${id}_content`.replaceAll(' ', "_")
    }

    const { isRtl } = useDetectDirection()
    const [isOpen, setIsOpen] = useState(false)

    const accordian = useRef<HTMLElement | null>()
    const header = useRef<HTMLElement | null>()
    const content = useRef<HTMLElement | null>()

    useEffect(() => {
        accordian.current = document.getElementById(IDS.context)
        header.current = document.getElementById(IDS.header)
        content.current = document.getElementById(IDS.content)

        process.nextTick(() => {
            const headerHeight = header.current?.clientHeight || 0

            accordian.current?.style.setProperty('height', `${headerHeight}px`)
        })

    }, [])

    const accordianClickHandler = () => {

        const headerHeight = header.current?.clientHeight || 0
        const contentHeight = content.current?.clientHeight || 0


        if (isOpen) {
            setIsOpen(false)
            accordian.current?.style.setProperty('height', `${headerHeight}px`)
        } else {
            setIsOpen(true)
            accordian.current?.style.setProperty('height', `${headerHeight + contentHeight}px`)
        }
    }



    return (
        <div id={IDS.context} className={classNamesGen({ [classes.is_open]: isOpen && isRtl, [classes.is_open_ltr]: isOpen && !isRtl }, classes.accordian)} {...rest}>
            <div id={IDS.header} className={classNamesGen(
                'd-flex',
                'flex-align-center',
                'flex-justify-between',
                classes.header
            )}
                onClick={accordianClickHandler}>
                <div className={classNamesGen('d-flex', 'flex-align-center', 'flex-justify-between', 'gap-10', classes.button_section)}>
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
                        <Icon style={{
                            width: `1rem`,
                            height: `1rem`,
                        }} className={classes.arrow_icon} icon={`charm:chevron-${isRtl ? 'right' : "left"}`} />
                    )}
                </div>
            </div>
            <div className={classes.main}>
                <div id={IDS.content} className={classes.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

Accordian.defaultProps = {
    buttonContent: "",
    showArrowIcon: true,
    iconSize: 20
}

export { Accordian }