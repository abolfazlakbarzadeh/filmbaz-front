import React from 'react'
import classes from './fieldTextRegular.component.module.scss'


type IFieldTextRegular = {} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const FieldTextRegualr = ({ ...rest }: IFieldTextRegular) => {
    return (
        <div className={classes.field_text_regular}>
            <input type="text" {...rest} />
        </div>
    )
}
