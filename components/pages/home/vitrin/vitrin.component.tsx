import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { CommonUtils } from '../../../../utils'
import { Card, Section } from '../../../common'
import classes from './vitrin.component.module.scss'

export const VitrinComponent = () => {

  const [selectedCategory, setSelectedCategory] = useState(0)

  const renderVitrinCategories = () => {

    const items = [
      "علمی تخیلی",
      "تاریخی",
      "جنگی",
      "خانوادگی",
      "زندگی نامه",
      "رمانتیک",
      "سیاسی",
    ]

    return items.map((itm, idx) => (
      <div
        key={`category_${idx}`}
        className={CommonUtils.classNamesGen([{ [classes.selected]: idx == selectedCategory }, classes.category_item])}
        onClick={() => setSelectedCategory(idx)}
      >
        {itm}
      </div>
    ))

  }

  return (
    <Card fullWidth padding={40}>
      <Row className={CommonUtils.classNamesGen(['g-3', 'flex-align-center', classes.vitrin])}>
        <Col lg={3}>
          <Section title='دسته بندی ها' centerTitle underLineTitle>
            <div className={CommonUtils.classNamesGen(['d-flex', 'flex-column', 'flex-align-center', classes.categories])}>
              {renderVitrinCategories()}
            </div>
          </Section>
        </Col>
        <Col lg={9}>
          <Row className="g-2">
            <Col xs={12}>
              <Row className='g-2'>
                <Col lg={6} xs={12}>
                  <Card fullWidth backgroundColor='background' style={{ height: '105px' }}></Card>
                </Col>
                <Col lg={6} xs={12}>
                  <Card fullWidth backgroundColor='background' style={{ height: '105px' }}></Card>
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
              <Row className='g-2'>
                <Col xs={12}>
                  <Card fullWidth backgroundColor='background' style={{ height: '120px' }}></Card>
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
              <Row className='g-2'>
                <Col lg={6} xs={12}>
                  <Card fullWidth backgroundColor='background' style={{ height: '105px' }}></Card>
                </Col>
                <Col lg={6} xs={12}>
                  <Card fullWidth backgroundColor='background' style={{ height: '105px' }}></Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}
