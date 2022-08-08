import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { useSwiper, useSwiperSlide } from 'swiper/react';
import classes from './template2.component.module.scss'
import type { IFilmSlider } from '../../filmSlider.component'
import { CommonUtils } from '../../../../../utils'
import { Icon } from '@iconify/react'
import Link from 'next/link';
import { Section } from '../../../../../components/common/section';
import { useTranslation } from 'next-i18next';

type ITemplate1 = {
    title: string,
    img: string,
    imdb: string,
    comments: number,
    slug: string,
    summary: string,
} & Pick<IFilmSlider, "width" | "height" | "radius">

export const Template2 = (props: ITemplate1) => {

    const swiperSlide = useSwiperSlide()
    const swiper = useSwiper()
    const detailsRef = useRef<any>()
    const { t, i18n } = useTranslation()

    useEffect(() => {
        // if (detailsRef.current) {
        //     if (swiperSlide.isActive) {
        //         setTimeout(() => {
        //             detailsRef.current?.classList.add(classes.show)
        //         }, 150)
        //     }
        //     else
        //         detailsRef.current.classList.remove(classes.show)
        // }
        if (swiper) {
            swiper.on("touchStart", () => {
                detailsRef.current.classList.remove(classes.show)
            })
            swiper.on("touchEnd", () => {
                detailsRef.current.classList.add(classes.show)
            })
        }
    }, [swiper])

    return (
        <div style={{
            width: typeof props.width == "number" ? `${props.width / 16}rem` : (props.width != "none" ? "100%" : undefined),
            height: typeof props.height == "number" ? `${props.height / 16}rem` : (props.height != "none" ? "100%" : undefined)
        }} className={CommonUtils.classNamesGen([
            {
                'rad-5': props.radius == "xs",
                'rad-10': props.radius == "s",
                'rad-16': props.radius == "m",
                'rad-20': props.radius == "l",
                [`rad-${props.radius}`]: typeof props.radius == "number"
            }, classes.template1])}>
            <Link href={props.slug}>
                <a>
                    <Image alt={CommonUtils.getLocaleVarData(i18n, props, 'title')} src={props.img} className={classes.image} layout="fill" />
                </a>
            </Link>
            <div ref={detailsRef} className={CommonUtils.classNamesGen(["d-flex", "flex-column", "flex-justify-between", "flex-align-start", classes.show, classes.details])}>
                <div className={CommonUtils.classNamesGen(['d-flex', 'flex-column', 'flex-align-start', 'gap-10', 'w-100', classes.summary_details])}>
                    <div className={CommonUtils.classNamesGen(['d-flex', 'gap-16', 'flex-align-center', 'w-100'])}>
                        <div className={CommonUtils.classNamesGen(['d-flex', 'flex-align-center', 'gap-6'])}>
                            <Icon style={{
                                width: `${20 / 16}rem`,
                                height: `${20 / 16}rem`,
                            }} icon="la:imdb" />
                            <div className="label bold size-10">{props.imdb}</div>
                        </div>
                        <div className={CommonUtils.classNamesGen(['d-flex', 'flex-align-center', 'gap-6'])}>
                            <Icon style={{
                                width: `${10 / 16}rem`,
                                height: `${10 / 16}rem`,
                            }} icon="fa6-solid:comment-dots" />
                            <div className="label bold size-10">{`${props.comments} ${t("comments")}`}</div>
                        </div>
                    </div>
                    <Link href={props.slug}>
                        <a className={classes.title}>{CommonUtils.getLocaleVarData(i18n, props, 'title')}</a>
                    </Link>
                    <Section titleBold title={`${t('summary_of_the_story')}:`} titleSize={13} className={CommonUtils.classNamesGen(['mart-21'])}>
                        <div className={CommonUtils.classNamesGen(['label', 'size-12', classes.summary])}>
                            {CommonUtils.getLocaleVarData(i18n, props, 'summary')}
                        </div>
                    </Section>
                </div>
            </div>
        </div>
    )
}
