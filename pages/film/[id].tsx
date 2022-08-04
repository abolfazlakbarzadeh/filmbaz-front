import { NextPage } from 'next'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Card } from '../../components/common'

const Film: NextPage = () => {
    return (
        <Row className='gx-3'>
            <Col xs={12} lg={8}>
                <Card fullWidth />
            </Col>
            <Col xs={12} lg={4}>
                <Card fullWidth />
            </Col>
        </Row>
    )
}

export default Film