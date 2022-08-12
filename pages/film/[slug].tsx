import classes from '../../assets/styles/pages/film.page.module.scss'
import { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { classNamesGen, detectDevice, getLocaleVarData, getServerSideT } from '../../utils/common.utils'
import { Breadcrumbs, Card, Section } from '../../components/common'
import { CommonUtils } from '../../utils'
import { useTranslation } from 'next-i18next'
import { IInformation, Information, IStarActor, StarActor, DownloadInfo, DownloadSection, IDownloadSection } from '../../components/pages/film'
import Image from 'next/image'

type Film = {
    title: string,
    title_en?: string,
    pic_url: string,
    informations: IInformation[],
    summary: string,
    summary_en?: string,
    stars: IStarActor[],
    downloads: IDownloadSection[]
}

interface IFilm {
    film: Film
}


const FilmPage = (props: IFilm) => {

    const { t, i18n } = useTranslation()


    const renderInformations = () => {
        return props.film?.informations.map((info, idx) => (
            <Information key={`info_${idx}`} {...info} />
        ))
    }

    const renderStarActors = () => {
        return props.film.stars?.map((actor, idx) => (
            <StarActor key={`star_actor_${idx}`} {...actor} />
        ))
    }

    const renderDownloadSections = () => {
        return props.film.downloads?.map((download, idx) => (
            <DownloadSection key={`download_${idx}`} {...download} />
        ))
    }

    return (
        <Row className='g-3'>
            <Col xs={12} lg={8}>
                <div className={classNamesGen('d-flex', 'flex-column', 'mart-5')}>
                    <Breadcrumbs
                        routesNames={{
                            'film': t('films')
                        }}
                        dynamicParams={{
                            slug: () => getLocaleVarData(i18n, props.film, 'title')
                        }}
                    />
                    <Card className={classNamesGen('mart-12')} padding={20} fullWidth>
                        <div className={classNamesGen('d-flex', 'flex-column', 'gap-16')}>
                            <div className={classes.film_pic}>
                                <Image alt={getLocaleVarData(i18n, props.film, 'title')} layout='fill' src={props.film.pic_url} />
                            </div>
                            <div className={classes.film_title}>
                                {getLocaleVarData(i18n, props.film, 'title')}
                            </div>
                            <Section icon="wi:stars" title={`${t('stars')}:`} iconSize={25} titleSize={14} fullWidth titleBold>
                                <div className={classNamesGen('d-flex', 'flex-align-center', 'flex-justify-center', 'flex-wrap', 'gap-20')}>
                                    {renderStarActors()}
                                </div>
                            </Section>
                            <Section icon="akar-icons:cloud-download" title={`${t('download')}:`} iconSize={25} titleSize={14} fullWidth titleBold>
                                <div className={classNamesGen('d-flex', 'flex-column', 'gap-5')}>
                                    {renderDownloadSections()}
                                </div>
                            </Section>
                        </div>
                    </Card>
                </div>
            </Col>
            <Col xs={12} lg={4}>
                <Card fullWidth padding={19}>
                    <div className={classNamesGen('d-flex', 'flex-column', 'flex-align-center', 'gap-12')}>
                        <Section
                            titleSize={12}
                            titleBold
                            title={`${t('film_informations')}:`}
                            icon="icon-park-outline:movie-board"
                            iconSize={20}
                        >
                            <div className={classNamesGen('d-flex', 'flex-column', 'gap-8')}>
                                {renderInformations()}
                            </div>
                        </Section>
                        <Section
                            titleSize={12}
                            titleBold
                            title={`${t('summary_of_the_story')}:`}
                            icon="iconoir:movie"
                            iconSize={20}
                        >   <div className={classes.summary}>
                                {getLocaleVarData(i18n, props.film, 'summary')}
                            </div>
                        </Section>
                    </div>
                </Card>
            </Col>
        </Row>
    )
}



export const getServerSideProps = async (props: any) => {

    const { locale } = props

    const traslation = await serverSideTranslations(locale)
    const t = await getServerSideT(traslation)
    const device = detectDevice(props)
    const film: Film = {
        title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        title_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        pic_url: "/assets/images/film2.png",
        summary: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
        summary_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.",
        informations: [
            {
                name: t('title'),
                value: 'لورم ایپسوم متن',
                value_en: 'Loren ipsom is a text for',
            },
            {
                name: t('genre'),
                value: 'لورم ایپسوم متن',
                value_en: 'Loren ipsom is a text for',
            },
            {
                name: t('director'),
                value: 'لورم ایپسوم متن',
                value_en: 'Loren ipsom is a text for',
            },
            {
                name: t('country'),
                value: 'لورم ایپسوم متن',
                value_en: 'Loren ipsom is a text for',
            },
            {
                name: t('rate'),
                value: 'لورم ایپسوم متن',
                value_en: 'Loren ipsom is a text for',
            }
        ],
        stars: [
            {
                fullname: 'هنری کویل',
                fullname_en: "Henry Cavill",
                pic_url: "/assets/images/henry_cavill.png",
                slug: 'actors/henry_cavill'
            },
            {
                fullname: 'آنیا چالوترا',
                fullname_en: "Anya Chalotra",
                pic_url: "/assets/images/anya_chalotra.jpg",
                slug: 'actors/anya_chalotra'
            },
            {
                fullname: 'فریا آلن',
                fullname_en: "Freya Allan",
                pic_url: "/assets/images/freya_allan.jpg",
                slug: 'actors/freya_allan'
            },
            {
                fullname: 'لورم ایپسوم',
                fullname_en: "Lorem ipsom",
                pic_url: "/assets/images/junny_depp.png",
                slug: 'actors/junny_depp'
            },
        ],
        downloads: [
            {
                title: "نسخه دوبله فارسی",
                title_en: "Persian dubbed version",
                qualities:
                {
                    '1080p': {
                        title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
                        title_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        url: "/test",
                        url_support: "/test_support",
                    },
                    '720p': {
                        title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
                        title_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        url: "/test",
                        url_support: "/test_support",
                    },
                    '480p': {
                        title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
                        title_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        url: "/test",
                        url_support: "/test_support",
                    }
                }

            },
            {
                title: "نسخه زبان اصلی",
                title_en: "Original language version",
                qualities:
                {
                    '1080p': {
                        title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
                        title_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        url: "/test",
                        url_support: "/test_support",
                    },
                    '720p': {
                        title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
                        title_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        url: "/test",
                        url_support: "/test_support",
                    },
                    '480p': {
                        title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
                        title_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        url: "/test",
                        url_support: "/test_support",
                    },
                    '320p': {
                        title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
                        title_en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        url: "/test",
                        url_support: "/test_support",
                    }
                }

            }
        ]
    }

    return {
        props: {
            ...traslation,
            device,
            film,
            head: {
                title: `${getLocaleVarData({ language: locale }, film, 'title')}`
            }
        },
    };
};



export default FilmPage