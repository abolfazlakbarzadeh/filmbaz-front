import React, { Fragment } from 'react'
import classes from './default.layout.module.scss'
import { Footer, Header } from '../../components/core'
import { Container } from '../../components/common'


export const DefaultLayout = ({ children }: any) => {
    return (
        <Fragment>
            <Container>
                <Header />
                <div className={classes.main}>{children}</div>
            </Container>
            <Footer />
        </Fragment>
    )
}
