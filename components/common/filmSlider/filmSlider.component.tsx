// import "swiper/css"
import React, { Fragment, useRef } from 'react'
import classes from './filmSlider.component.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as Components from './components'
import { NextComponentType } from 'next'
import { CommonUtils } from '../../../utils'


type Templates = "Template1"
type Radius = "none" | "xs" | "s" | "m" | "l" | "xl" | number

export type IFilmSlider = {
    template?: Templates, width: number | "fill" | "none", height: number | "fill" | "none",
    radius?: Radius,
    items: any[]
}

const FilmSlider = (props: IFilmSlider) => {

    const slider = useRef()


    const renderSlides = () => {
        return props.items.map((itm, idx) => {
            const Template: any = Components[props.template || "Template1"] || Fragment
            return (
                <SwiperSlide key={`film_slide_${idx}`}>
                    <Template {...{ ...itm, width: props.width, height: props.height, radius: props.radius }} />
                </SwiperSlide>
            )
        })
    }

    return (
        <div style={{
            width: props.width,
            height: props.height
        }} className={CommonUtils.classNamesGen([{
            'rad-5': props.radius == "xs",
            'rad-10': props.radius == "s",
            'rad-16': props.radius == "m",
            'rad-20': props.radius == "l",
            [`rad-${props.radius}`]: typeof props.radius == "number"
        }, 'horizontal-center', classes.film_slider])}>
            <Swiper spaceBetween={16}>
                {renderSlides()}
            </Swiper>
        </div>
    )
}

FilmSlider.defaultProps = {
    template: "Template1",
    width: 300,
    height: 200,
    radius: "m",
    items: []
}

export { FilmSlider }