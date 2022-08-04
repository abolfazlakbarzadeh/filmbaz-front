import React from 'react'
import classNames from '../../assets/styles/pages/user.module.scss'
import { Card } from '../../components/common'

export default function User() {
    return (
        <Card horizontalCenter>
            sadsss
        </Card>
    )
}

export const getServerSideProps = () => ({

    props: {
        head: {
            title: "Users",
        }
    }

})