import React from 'react'
import { CommonUtils } from 'utils'

export default function NotFound() {
    return (
        <div className={CommonUtils.classNamesGen([
            'd-flex',
            'flex-justify-center',
            'flex-align-center',
            'h-100'
        ])}>NotFound</div>
    )
}


// export const getServerSideProps = () => ({
//     props: {
//         head: {
//             title: "صفحه مورد نظر یافت نشد"
//         }
//     }
// })
