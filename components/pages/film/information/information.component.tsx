import { useTranslation } from 'next-i18next'
import React from 'react'
import { CommonUtils } from '../../../../utils'
import classes from './information.component.module.scss'


export interface IInformation {
    name: string,
    value: string,
    value_en?: string,
}

export const Information = (props: IInformation) => {

    const { i18n } = useTranslation()

    return (
        <div className={CommonUtils.classNamesGen(
            'd-flex',
            'flex-align-center',
            'gap-6',
            classes.information
        )}>
            <div className={CommonUtils.classNamesGen(classes.information_section, classes.information_name)}>
                {props.name}
            </div>
            <div className={CommonUtils.classNamesGen(classes.information_section, classes.information_value)}>
                {CommonUtils.getLocaleVarData(i18n, props, 'value')}
            </div>
        </div>
    )
}
