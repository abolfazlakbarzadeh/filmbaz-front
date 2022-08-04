import '../styles/globals.css'
import '../assets/styles/common.scss'
import '../assets/styles/core.scss'
import "bootstrap/scss/bootstrap-grid.scss"
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import Head from 'next/head'
import { CommonUtils } from '../utils'
import { DefaultLayout } from '../layouts'

function MyApp({ Component, pageProps }: AppProps) {


  const getTitleTag = () => {
    return (
      <title>
        {[CommonUtils.getVarDataType(pageProps.head?.title || "") == "array" ?
          pageProps.head?.title.join(" - ") :
          pageProps.head?.title, 'FilmBaz'].join(" | ")}
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

  return (
    <DefaultLayout>
      <Head>
        {getTitleTag()}
        {getMetaTags()}
        {getHeadCss()}
        {getHeadMisc()}
      </Head>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
