import { Accordian } from '../../../common'
import React from 'react'
import classes from './dowloadSection.component.module.scss'
import { CommonUtils } from 'utils'
import { useTranslation } from 'next-i18next'

export type DownloadInfo = Partial<Record<"1080p" | "720p" | "480p" | "320p", {
    title: string,
    title_en?: string,
    url: string,
    url_support?: string,
}>>


export interface IDownloadSection {
    title: string,
    title_en?: string,
    qualities: DownloadInfo
}[]



export const DownloadSection = (props: IDownloadSection) => {

    const { i18n } = useTranslation()


    const getQualitiesLables = () => {
        return Object.keys(props.qualities)?.join(" ")
    }

    return (
        <Accordian id={`accordian_${props.title}`} icon='bi:box-fill' buttonContent={
            <div className={CommonUtils.classNamesGen('d-flex', 'flex-align-center', 'flex-justify-between')}>
                <div className={CommonUtils.classNamesGen('d-flex', 'flex-align-center', 'gap-10')}>
                    <div className={CommonUtils.classNamesGen('label', 'bold', 'size-14')}>
                        {CommonUtils.getLocaleVarData(i18n, props, 'title')}
                    </div>
                    <div className={CommonUtils.classNamesGen('label', 'bold', 'size-10')}>
                        {getQualitiesLables()}
                    </div>
                </div>
            </div>
        }>

        </Accordian>
    )
}
