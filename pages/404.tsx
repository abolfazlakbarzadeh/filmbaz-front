// @ts-ignore
import { GetStaticPropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AppInitialProps } from 'next/app'
import React from 'react'
import { CommonUtils } from 'utils'
import { classNamesGen, detectDevice, getServerSideT } from 'utils/common.utils'

export default function NotFound() {
    return (
        <div className={classNamesGen(
            'd-flex',
            'flex-justify-center',
            'flex-align-center',
            'h-100'
        )}>NotFound</div>
    )
}

export const getStaticProps = async (props: any) => {
    console.log({
        props,

    })

    const { locale, req } = props
    const traslation = await serverSideTranslations(locale)
    const t = await getServerSideT(traslation)
    const device = detectDevice({ req })
    return {
        props: {
            ...traslation,
            device,
            head: {
                title: t('page_titles:not_found')
            }
        },
    };
};

