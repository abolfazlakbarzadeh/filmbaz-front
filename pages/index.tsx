import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import { Card, Section } from '../components/common'
import classes from '../assets/styles/pages/home.page.module.scss'
import { CommonUtils } from '../utils'

const Home: NextPage = () => {
  return (
    <Row className={classes.vitrin}>
      <Col>
        <Card fullWidth padding={40}>
          <Row>
            <Col lg={3}>
              <Section className={CommonUtils.classNamesGen([classes.categories])}>
                a
              </Section>
            </Col>
            <Col lg={9}>

            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}


export default Home
