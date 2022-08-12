import { Icon } from '@iconify/react'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import React from 'react'
import { classNamesGen } from 'utils/common.utils'
import classes from './mobile.component.module.scss'



export const Mobile = () => {
    const { t } = useTranslation()

    return (
        <div className={classNamesGen('d-flex',
            'flex-align-center',
            'flex-justify-between',
            classes.header
        )}>
            <Link href="/">
                <a className={classes.logo}>
                    Film Baz
                </a>
            </Link>
            <div className={classNamesGen(
                'd-flex',
                'flex-align-center',
                'flex-justify-center',
                classes.acts
            )}>
                <div className={classNamesGen(classes.act__item, classes.user)}>
                    <Icon icon="carbon:user-avatar-filled-alt" />
                </div>
            </div>
        </div>
    )
}
