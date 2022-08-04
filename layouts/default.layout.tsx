import React from 'react'
import { Container } from 'react-bootstrap'
import { Header } from '../components/core'

export const DefaultLayout = ({ children }: any) => {
    return (
        <Container>
            <Header />
            {children}
        </Container>
    )
}
