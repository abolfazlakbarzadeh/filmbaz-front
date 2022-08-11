import { Icon } from '@iconify/react'
import React, { useEffect } from 'react'
import { classNamesGen } from 'utils/common.utils'
import { CommonUtils } from '../../../utils'
import classes from './footer.module.scss'

export const Footer = () => {

    useEffect(() => {
        const updateMousePostion = (e: MouseEvent) => {
            const x = e.clientX
            const y = e.clientY


            document.documentElement.style.setProperty('--cursorX', `${x}px`)
            document.documentElement.style.setProperty('--cursorY', `${y}px`)

        }
        document.addEventListener('mousemove', updateMousePostion)

    }, [])


    return (
        <div className={classNamesGen('d-flex', 'flex-column', 'flex-align-center', classes.footer)}>
            <div className={classNamesGen('d-flex', 'flex-column', 'flex-align-center', classes.footer__main)}>
                <div className={classNamesGen('d-flex', 'flex-column', 'flex-align-start', classes.logo)}>
                    <div className={classes.site_logo}>
                        Film Baz
                    </div>
                    <div className={classes.site_slugan}>
                        هنر در دست تو
                    </div>
                </div>
            </div>
            <div className={classNamesGen('d-flex', 'flex-align-center', classes.copyright)}>
                <div>ساخته شده با</div>
                <Icon icon="ant-design:heart-filled" />
                <div>توسط فیلمباز</div>
            </div>
        </div>
    )
}
