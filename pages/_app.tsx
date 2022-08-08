import '../styles/globals.css'
import '../assets/styles/common.scss'
import '../assets/styles/core.scss'
import "bootstrap/scss/bootstrap-grid.scss"
import "swiper/scss"
import React from 'react'
import { AppContext, AppProps } from 'next/app'
import { Fragment } from 'react'
import Head from 'next/head'
import { CommonUtils } from '../utils'
import { DefaultLayout } from '../layouts'
import { appWithTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Icon } from '@iconify/react'

const MyApp = ({ Component, pageProps, router }: AppProps) => {

  const getTitleTag = () => {
    let title_list = [(CommonUtils.getVarDataType(pageProps.head?.title || "") == "array" ?
      pageProps.head?.title.join(" - ") :
      pageProps.head?.title), 'FilmBaz']

    // if (Object.keys(router.components || {}).includes("/404"))
    //   title_list.unshift('صفحه مورد نظر یافت نشد')
    return (
      <title>
        {title_list.filter(Boolean).join(" | ")}
      </title>)
  }
  const getMetaTags = () => {
    return pageProps.head?.meta || <></>
  }

  const getHeadCss = () => {
    return pageProps.head?.css || <></>
  }

  const getHeadMisc = () => {
    return pageProps.head?.misc || <></>
  }

  const webLightClickHandler = () => {
    const body = document.getElementsByTagName('body')[0]
    if (body)
      body.classList.toggle('dark')
  }


  return (
    <DefaultLayout>
      <Head>
        {getTitleTag()}
        {getMetaTags()}
        {getHeadCss()}
        {getHeadMisc()}
      </Head>

      <div className={CommonUtils.classNamesGen("web-lamp", 'd-flex', 'flex-justify-end')} onClick={webLightClickHandler}>
        <Icon style={{
          width: '2rem',
          height: '2rem',
        }} icon="mdi:coach-lamp" />
      </div>
      <Component {...{
        ...pageProps
      }} />
    </DefaultLayout>
  )
}


export default appWithTranslation(MyApp)
