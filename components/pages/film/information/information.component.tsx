import { useTranslation } from 'next-i18next'
import React from 'react'
import { classNamesGen, getLocaleVarData } from 'utils/common.utils'
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
        <div className={classNamesGen(
            'd-flex',
            'flex-align-center',
            'gap-6',
            classes.information
        )}>
            <div className={classNamesGen(classes.information_section, classes.information_name)}>
                {props.name}
            </div>
            <div className={classNamesGen(classes.information_section, classes.information_value)}>
                {getLocaleVarData(i18n, props, 'value')}
            </div>
        </div>
    )
}
