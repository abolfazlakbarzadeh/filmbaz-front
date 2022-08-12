import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link'
import React, { useContext } from 'react'
import { Icon } from '@iconify/react'
import { CommonUtils } from '../../../utils'
import classes from './header.module.scss'
import { useTranslation } from 'next-i18next'
import { classNamesGen } from 'utils/common.utils';
import { Desktop, Mobile } from './components';
import { useDevice } from 'utils/hooks.utils';


export const Header = () => {

    const { t } = useTranslation()
    const device = useDevice()
    console.log({
        device
    })


    return (
        device.isMobile ? <Mobile /> : <Desktop />
        // <Desktop />
    )
}



