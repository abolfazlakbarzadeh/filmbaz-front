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

const Home: NextPage = () => {


  const recentItemsSlides = [
    {
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      img: "/assets/images/film1.png",
      imdb: "7.4",
      comments: 160,
      slug: "/film",
      type: 'cinema'
    },
    {
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      img: "/assets/images/film1.png",
      imdb: "7.4",
      comments: 160,
      slug: "/film",
      type: 'cinema'
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
          <VitrinComponent data-testid="vitrin" />
        </Col>
        <Col xs={12}>
          <Card fullWidth className={CommonUtils.classNamesGen(['d-flex', 'flex-column', 'padt-23', 'padb-23', 'padl-40', 'padr-40', classes.search_section])} radius={36}>
            <div className={CommonUtils.classNamesGen(['d-flex', 'flex-align-center', classes.search_field])}>
              <ButtonIcon size={26} icon="eva:search-fill" />
              <FieldTextRegualr placeholder='میتوانید جستجو کنید...' />
            </div>
            <div className={CommonUtils.classNamesGen(['d-flex', 'flex-wrap', classes.popular_searches])}>
              <div className={CommonUtils.classNamesGen(['label', 'size-12', 'bold', 'no-wrap'])}>داغترین جستجو ها:</div>
              <div className={CommonUtils.classNamesGen(['d-flex', 'flex-align-center', 'flex-wrap', classes.items])}>
                {renderPopularSearchItems()}
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={12}>
          <Section icon="arcticons:audio-video-factory" headPadding={16} iconSize={30} title="آخرین بروزرسانی ها">
            <Row>
              <Col xs={12} lg={6}>
                <FilmSlider items={recentItemsSlides} width="fill" radius="l" height={282} />
              </Col>
              <Col xs={12} lg={6}>
                <FilmSlider items={recentItemsSlides} width="fill" height={282} />
              </Col>
            </Row>
          </Section>
        </Col>
      </Row>
    </Fragment>
  )
}


export const getServerSideProps = () => ({ props: { head: { title: "صفحه اصلی" } } })

export default Home
