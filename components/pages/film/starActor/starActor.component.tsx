import { useTranslation } from 'next-i18next'
import classes from './starActor.component.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CommonUtils } from '../../../../utils'

export interface IStarActor {
    pic_url: string,
    slug: string,
    fullname: string,
    fullname_en?: string
}

export const StarActor = (props: IStarActor) => {

    const { t, i18n } = useTranslation()

    return (
        <div className={CommonUtils.classNamesGen('d-flex', 'flex-column', 'flex-align-center', 'gap-4', classes.starActor)}>
            <Link href={props.slug}>
                <a className={classes.actor_pic}>
                    <Image alt={CommonUtils.getLocaleVarData(i18n, props, 'fullname')} layout='fill' src={props.pic_url} />
                </a>
            </Link>
            <div className={classes.actor_name}>
                {CommonUtils.getLocaleVarData(i18n, props, 'fullname')}
            </div>
        </div>
    )
}
