import { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { getServerSideT } from '../../utils/common.utils'
import { Breadcrumbs, Card, Section } from '../../components/common'
import { CommonUtils } from '../../utils'
import { useTranslation } from 'next-i18next'

type Film = {
    title: string
}

interface IFilm {
    film: Film
}


const FilmPage = (props: IFilm) => {

    const { t, i18n } = useTranslation()

    return (
        <Row className='gx-3'>
            <Col xs={12} lg={4}>
                <Card fullWidth>
                    <div className={CommonUtils.classNamesGen('d-flex', 'felx-column', 'flex-align-center')}>
                        <Section
                            titleSize={14}
                            titleBold
                            title={`${t('film_informations')}:`}
                            icon="icon-park-outline:movie-board"
                            iconSize={20}
                        >

                        </Section>
                    </div>
                </Card>
            </Col>
            <Col xs={12} lg={8}>
                <div className={CommonUtils.classNamesGen('d-flex', 'flex-column', 'mart-5')}>
                    <Breadcrumbs
                        routesNames={{
                            'film': t('films')
                        }}
                        dynamicParams={{
                            slug: () => CommonUtils.getLocaleVarData(i18n, props.film, 'title')
                        }}
                    />
                    <Card className={CommonUtils.classNamesGen('mart-12')} fullWidth>

                    </Card>
                </div>
            </Col>
        </Row>
    )
}



export const getServerSideProps = async ({ locale }: any) => {

    const traslation = await serverSideTranslations(locale)
    const t = await getServerSideT(traslation)


    const film = {
        title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        title_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    }

    return {
        props: {
            ...traslation,
            film,
            head: {
                title: `${CommonUtils.getLocaleVarData({ language: locale }, film, 'title')}`
            }
        },
    };
};



export default FilmPage