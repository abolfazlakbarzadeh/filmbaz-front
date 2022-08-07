import Link from 'next/link'
import React from 'react'
import { Icon } from '@iconify/react'
import { CommonUtils } from '../../../utils'
import classes from './header.module.scss'


export const Header = () => {
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
                        <a>صفحه اصلی</a>
                    </Link>
                </div>
                <div className={classes.nav__item}>
                    <Link href="/">
                        <a>سینمایی</a>
                    </Link>
                </div>
                <div className={classes.nav__item}>
                    <Link href="/">
                        <a>سریال</a>
                    </Link>
                </div>
                <div className={classes.nav__item}>
                    <Link href="/">
                        <a>دسته بندی ها</a>
                    </Link>
                </div>
                <div className={classes.nav__item}>
                    <Link href="/">
                        <a>تماس با ما</a>
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
