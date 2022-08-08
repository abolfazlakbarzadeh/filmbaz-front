import { useTranslation } from 'next-i18next'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { CommonUtils } from '../../../../utils'
import { Card, Section } from '../../../common'
import classes from './vitrin.component.module.scss'

export const VitrinComponent = () => {

  const { t } = useTranslation()

  const [selectedCategory, setSelectedCategory] = useState(0)

  const renderVitrinCategories = () => {

    const items = [
      "science_fiction",
      "historical",
      "war",
      "familial",
      "biography",
      "romantic",
      "political"
    ]

    return items.map((itm, idx) => (
      <div
        key={`category_${idx}`}
        className={CommonUtils.classNamesGen({ [classes.selected]: idx == selectedCategory }, classes.category_item)}
        onClick={() => setSelectedCategory(idx)}
      >
        {t(`geners:${itm}`)}
      </div>
    ))

  }

  return (
    <Card
      data-testid="vitrin" fullWidth padding={40}>
      <Row className={CommonUtils.classNamesGen('g-3', 'flex-align-center', classes.vitrin)}>
        <Col lg={3}>
          <Section title={t("categories")} centerTitle underLineTitle>
            <div className={CommonUtils.classNamesGen('d-flex', 'flex-column', 'flex-align-center', classes.categories)}>
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
