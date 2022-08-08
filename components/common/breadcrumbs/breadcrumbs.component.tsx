import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { CommonUtils } from '../../../utils'
import classes from './breadcrumbs.component.module.scss'

interface IBreadcrumbs {
    dynamicParams: Record<string, Function>
    routesNames: Record<string, string>
}


const Breadcrumbs = ({ dynamicParams, routesNames }: IBreadcrumbs) => {

    const router = useRouter()
    const [breadcrumbsParticulars, setBreadcrumbParticulars] = useState<string[]>([])

    function breadcrumbCreator() {
        const route = router.route
        const path = router.asPath
        const arrRoute = route.split('/')
        const arrPath = path.split('/')

        let breadcrumbsParticulars = []

        for (const [idx, route] of arrRoute.entries()) {
            const isParam = route.match(/\[.*?\]/)
            if (isParam) {
                const resolver = dynamicParams[route.replace('[', '').replace(']', '')]
                if (resolver && typeof resolver == "function") {
                    breadcrumbsParticulars[idx] = resolver()
                } else {
                    breadcrumbsParticulars[idx] = arrPath[idx]
                }
            } else {
                const resolver = routesNames[route]
                if (!!resolver) breadcrumbsParticulars[idx] = resolver
                else breadcrumbsParticulars[idx] = route
            }
        }

        setBreadcrumbParticulars(breadcrumbsParticulars.filter(Boolean))

    }


    useEffect(() => {
        breadcrumbCreator()
    }, [])


    const renderBreadcrumbs = () => {
        return breadcrumbsParticulars.map((itm, idx) => {
            return (
                <div key={`bread_crumb_${idx}`} className={CommonUtils.classNamesGen(classes.breadcrumb, { [classes.is_last]: idx == breadcrumbsParticulars.length - 1 })}>
                    {itm}
                </div>
            )
        })
    }

    return (
        <div className={CommonUtils.classNamesGen('d-flex', 'flex-align-center', 'flex-wrap', classes.breadcrumbs)}>{breadcrumbsParticulars.join(" / ")}</div>
    )
}

Breadcrumbs.defaultProps = {
    dynamicParams: {},
    routesNames: {}
}

export { Breadcrumbs }