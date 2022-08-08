
import React from 'react'
import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'
import configs from '../configs.json'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getServerSideT } from 'utils/common.utils'

export default function Document(props: DocumentProps) {

    return (
        <Html dir={props.locale == configs.default_locale ? 'rtl' : 'ltr'} lang={props.locale}>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}