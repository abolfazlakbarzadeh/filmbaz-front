
import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import {
  ButtonIcon,
  Card,
  FieldTextRegualr,
  FilmSlider,
  Section
} from '../components/common'
import classes from '../assets/styles/pages/home.page.module.scss'
import { CommonUtils } from '../utils'
import { Fragment } from 'react'
import { VitrinComponent } from '../components/pages/home'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { i18n, useTranslation } from 'next-i18next'
import { getServerSideT } from 'utils/common.utils'

const Home: NextPage = (props) => {

  const { t } = useTranslation()

  const recentItemsSlides = [
    {
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      title_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      img: "/assets/images/film1.png",
      imdb: "7.4",
      comments: 160,
      slug: "/film",
      type: 'cinema'
    },
    {
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      title_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      img: "/assets/images/film1.png",
      imdb: "7.4",
      comments: 160,
      slug: "/film",
      type: 'cinema'
    },
  ]
  const suggestItemsSlides = [
    {
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      title_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      img: "/assets/images/film1.png",
      imdb: "7.4",
      comments: 160,
      slug: "/film",
      summary: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      summary_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet."
    },
    {
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      title_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      img: "/assets/images/film1.png",
      imdb: "7.4",
      comments: 160,
      slug: "/film",
      summary: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      summary_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet."
    },
  ]

  const renderPopularSearchItems = () => {
    const items = [
      "فیلم اکشن",
      "یاغی",
      "فیلم ترکی",
      "سریال هندی",
      "اکشن جدید",
      "فیلم اکشن",
      "یاغی",
      "فیلم ترکی",
      "سریال هندی",
      "اکشن جدید",
      "فیلم اکشن",
      "یاغی",
      "فیلم ترکی",
      "سریال هندی",
      "اکشن جدید",
      "فیلم اکشن",
      "یاغی",
    ]

    return items.map((itm, idx) => (
      <div key={`search_${idx}`} className={classes.popular_search_item}>{itm}</div>
    ))
  }

  return (
    <Fragment>
      <Row className='g-4'>
        <Col xs={12}>
          <VitrinComponent />
        </Col>
        <Col xs={12}>
          <Card fullWidth className={CommonUtils.classNamesGen(['d-flex', 'flex-column', 'padt-23', 'padb-23', 'padl-40', 'padr-40', classes.search_section])} radius={36}>
            <div className={CommonUtils.classNamesGen(['d-flex', 'flex-align-center', classes.search_field])}>
              <ButtonIcon size={26} icon="eva:search-fill" />
              <FieldTextRegualr placeholder={t('placeholders:you_can_search')} />
            </div>
            <div className={CommonUtils.classNamesGen(['d-flex', 'flex-wrap', classes.popular_searches])}>
              <div className={CommonUtils.classNamesGen(['label', 'size-12', 'bold', 'no-wrap'])}>{t('hottest_searches')}:</div>
              <div className={CommonUtils.classNamesGen(['d-flex', 'flex-align-center', 'flex-wrap', classes.items])}>
                {renderPopularSearchItems()}
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={12}>
          <Section icon="arcticons:audio-video-factory" headPadding={16} iconSize={30} title={t("last_updates")}>
            <Row>
              <Col xs={12} lg={6}>
                <FilmSlider radius={25} items={recentItemsSlides} width="fill" height={282} />
              </Col>
              <Col xs={12} lg={6}>
                <FilmSlider radius={25} items={recentItemsSlides} width="fill" height={282} />
              </Col>
            </Row>
          </Section>
        </Col>
        <Col xs={12}>
          <Section icon="material-symbols:movie-filter-outline" headPadding={16} iconSize={30} title={t("suggestions")}>
            <FilmSlider radius={25} template="Template2" items={suggestItemsSlides} width="fill" height={493} />
          </Section>
        </Col>
      </Row>
    </Fragment>
  )
}


export const getServerSideProps = async ({ locale }: any) => {

  const traslation = await serverSideTranslations(locale)
  const t = await getServerSideT(traslation)

  return {
    props: {
      ...traslation,
      head: { title: t('page_titles:home_page') || "" }
    }
  }
}

export default Home