import { useTranslation } from 'next-i18next'
import React from 'react'
import classes from './desktop.component.module.scss'
import { classNamesGen } from 'utils/common.utils'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export const Desktop = () => {

    const { t } = useTranslation()

    return (
        <div className={classNamesGen('d-flex',
            'flex-align-center',
            'flex-justify-between',
            classes.header
        )}>
            <div className={classes.logo}>
                Film Baz
            </div>
            <div className={classNamesGen('d-flex',
                'flex-align-center',
                'flex-justify-center',
                classes.nav)}>
                <div className={classes.nav__item}>
                    <Link href="/">
                        <a>
                            {t('header:home')}
                        </a>
                    </Link>
                </div>
                <div className={classes.nav__item}>
                    <Link href="/">
                        <a>
                            {t('header:movie')}
                        </a>
                    </Link>
                </div>
                <div className={classes.nav__item}>
                    <Link href="/">
                        <a>
                            {t('series')}
                        </a>
                    </Link>
                </div>
                <div className={classes.nav__item}>
                    <Link href="/">
                        <a>
                            {t('categories')}
                        </a>
                    </Link>
                </div>
                <div className={classes.nav__item}>
                    <Link href="/">
                        <a>
                            {t('header:contact-us')}
                        </a>
                    </Link>
                </div>
            </div>
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
