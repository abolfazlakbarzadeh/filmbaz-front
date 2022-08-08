import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link'
import React from 'react'
import { Icon } from '@iconify/react'
import { CommonUtils } from '../../../utils'
import classes from './header.module.scss'
import { useTranslation } from 'next-i18next'


export const Header = () => {

    const { t } = useTranslation()

    return (
        <div className={CommonUtils.classNamesGen(['d-flex',
            'flex-align-center',
            'flex-justify-between',
            classes.header
        ])}>
            <div className={classes.logo}>
                Film Baz
            </div>
            <div className={CommonUtils.classNamesGen(['d-flex',
                'flex-align-center',
                'flex-justify-center',
                classes.nav])}>
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
            <div className={CommonUtils.classNamesGen([
                'd-flex',
                'flex-align-center',
                'flex-justify-center',
                classes.acts
            ])}>
                <div className={CommonUtils.classNamesGen([classes.act__item, classes.user])}>
                    <Icon icon="carbon:user-avatar-filled-alt" />
                </div>
            </div>
        </div>
    )
}
