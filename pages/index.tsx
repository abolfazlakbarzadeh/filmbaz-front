import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import { ButtonIcon, Card, FieldTextRegualr, FilmSlider, Section } from '../components/common'
import classes from '../assets/styles/pages/home.page.module.scss'
import { CommonUtils } from '../utils'
import { Fragment } from 'react'
import { VitrinComponent } from '../components/pages/home'

const Home: NextPage = () => {


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
          <Row>
            <Col xs={12} lg={6}>
              <FilmSlider width="fill" radius="l" height={282} />
            </Col>
            <Col xs={12} lg={6}>
              <FilmSlider width="fill" height={282} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  )
}


export const getServerSideProps = () => ({ props: { head: { title: "صفحه اصلی" } } })

export default Home
