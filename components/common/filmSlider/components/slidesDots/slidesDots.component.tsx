import React, { ReactHTMLElement, useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import { CommonUtils } from '../../../../../utils'
import classes from './slidesDots.component.module.scss'

type ISlidesDots = {
    items: any[]
} & ReactHTMLElement<HTMLElement>['props']

export const SlidesDots = (props: ISlidesDots) => {

    const swiper = useSwiper()
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)

    useEffect(() => {
        if (swiper)
            swiper.on('activeIndexChange', (swiperCore) => {
                setActiveSlideIndex(swiperCore.activeIndex)
            })
    }, [swiper])

    const renderSlidesDots = () => {
        return props.items.map((itm, idx) => (
            <div key={`slide_dot_${idx}`} className={CommonUtils.classNamesGen([
                { [classes.active]: activeSlideIndex == idx },
                classes.slide_dot
            ])} onClick={() => {
                swiper?.slideTo(idx)
            }} />
        ))
    }

    return (
        <div className={CommonUtils.classNamesGen(['d-flex', 'flex-align-center', 'gap-10', classes.slides_dots])}>
            {renderSlidesDots()}
        </div>
    )
}
