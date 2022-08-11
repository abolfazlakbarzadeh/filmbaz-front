import { Accordian, Button } from '../../../common'
import React from 'react'
import classes from './dowloadSection.component.module.scss'
import { CommonUtils } from 'utils'
import { useTranslation } from 'next-i18next'
import { classNamesGen, getLocaleVarData, strFormat } from 'utils/common.utils'

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

    const { t, i18n } = useTranslation()


    const getQualitiesLables = () => {
        return Object.keys(props.qualities)?.join(" ")
    }

    const renderDownloadLinks = () => {
        return Object.entries(props.qualities).map(([quality, quality_info], idx) => (
            <div key={`download_link_${quality}`} className={classNamesGen('d-flex', 'flex-align-center', 'flex-justify-between', classes.download_item)}>
                <div className={classes.title}>

                    {strFormat(t('download_movie_with___qality'),
                        // @ts-ignore 
                        quality.toString())}
                </div>
                <div className={classNamesGen('d-flex', 'flex-align-center', 'gap-5', classes.actions)}>
                    <Button>
                        {t('download')}
                    </Button>
                    <Button color='danger'>
                        {t('crash_report')}
                    </Button>
                </div>
            </div>
        ))
    }

    return (
        <Accordian id={`accordian_${props.title}`} icon='bi:box-fill' buttonContent={
            <div className={classNamesGen('d-flex', 'flex-align-center', 'flex-justify-between')}>
                <div className={classNamesGen('d-flex', 'flex-align-center', 'gap-10')}>
                    <div className={classNamesGen('label', 'bold', 'size-14')}>
                        {getLocaleVarData(i18n, props, 'title')}
                    </div>
                    <div className={classNamesGen('label', 'bold', 'size-10')}>
                        {getQualitiesLables()}
                    </div>
                </div>
            </div>
        }>
            <div className={classNamesGen('d-flex', 'flex-column', 'gap-8')}>
                {renderDownloadLinks()}
            </div>
        </Accordian>
    )
}
