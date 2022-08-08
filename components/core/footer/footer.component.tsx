import { Icon } from '@iconify/react'
import React from 'react'
import { CommonUtils } from '../../../utils'
import classes from './footer.module.scss'

export const Footer = () => {
    return (
        <div className={CommonUtils.classNamesGen('d-flex', 'flex-column', 'flex-align-center', classes.footer)}>
            <div className={CommonUtils.classNamesGen('d-flex', 'flex-column', 'flex-align-center', classes.footer__main)}>
                <div className={CommonUtils.classNamesGen('d-flex', 'flex-column', 'flex-align-start', classes.logo)}>
                    <div className={classes.site_logo}>
                        Film Baz
                    </div>
                    <div className={classes.site_slugan}>
                        هنر در دست تو
                    </div>
                </div>
            </div>
            <div className={CommonUtils.classNamesGen('d-flex', 'flex-align-center', classes.copyright)}>
                <div>ساخته شده با</div>
                <Icon icon="ant-design:heart-filled" />
                <div>توسط فیلمباز</div>
            </div>
        </div>
    )
}
