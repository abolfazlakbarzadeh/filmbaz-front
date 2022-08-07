import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { useSwiperSlide } from 'swiper/react';
import classes from './template1.component.module.scss'
import type { IFilmSlider } from '../../filmSlider.component'
import { CommonUtils } from '../../../../../utils'
import { Icon } from '@iconify/react'
import Link from 'next/link';

type ITemplate1 = {
    title: string,
    img: string,
    imdb: string,
    comments: number,
    slug: string,
    type: string
} & Pick<IFilmSlider, "width" | "height" | "radius">

export const Template1 = (props: ITemplate1) => {

    const swiperSlide = useSwiperSlide()

    const detailsRef = useRef<any>()

    useEffect(() => {
        if (detailsRef.current) {
            if (swiperSlide.isActive) {
                setTimeout(() => {
                    detailsRef.current?.classList.add(classes.show)
                }, 300)
            }
            else
                detailsRef.current.classList.remove(classes.show)
        }
    }, [swiperSlide.isActive])

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
                    <Image alt={props.title} src={props.img} className={classes.image} layout="fill" />
                </a>
            </Link>
            <div ref={detailsRef} className={CommonUtils.classNamesGen(["d-flex", "flex-column", "flex-justify-between", "flex-align-start", classes.details])}>
                <div className={classes.type}>
                    {props.type == "cinema" ? "سینمایی" : "سریال"}
                </div>
                <div className={CommonUtils.classNamesGen(['d-flex', 'flex-column', 'flex-align-start', 'gap-10', 'w-100', classes.summary_details])}>
                    <Link href={props.slug}>
                        <a className={classes.title}>{props.title}</a>
                    </Link>
                    <div className={CommonUtils.classNamesGen(['d-flex', 'flex-justify-between', 'flex-align-center', 'w-100'])}>
                        <div className={CommonUtils.classNamesGen(['d-flex', 'flex-align-center', 'gap-10'])}>
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
                                <div className="label bold size-10">{`${props.comments} دیدگاه`}</div>
                            </div>
                        </div>
                        <Link href={props.slug}>
                            <a><Icon icon="akar-icons:circle-chevron-left-fill" /></a>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
