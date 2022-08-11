// @ts-ignore
import { GetStaticPropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AppInitialProps } from 'next/app'
import React from 'react'
import { CommonUtils } from 'utils'
import { getServerSideT } from 'utils/common.utils'

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

export const getStaticProps = async ({ locale }: any) => {

    const traslation = await serverSideTranslations(locale)
    const t = await getServerSideT(traslation)

    return {
        props: {
            ...traslation,
            head: {
                title: t('page_titles:not_found')
            }
        },
    };
};

