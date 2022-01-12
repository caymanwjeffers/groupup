import React from 'react'
import { InputLabel, OutlinedInput, OutlinedInputProps } from '@mui/material'
import _, { omit } from 'underscore'

interface IDefaultTextInputProps extends OutlinedInputProps {
    label: string,
    labelStyles?: React.CSSProperties
}

const DefaultTextInput = (props: IDefaultTextInputProps) => {
    const { label } = props
    const nonLabelProps = omit(props, 'label')

    return (
        <>
            <InputLabel>
                {label}
            </InputLabel>
            <OutlinedInput {...nonLabelProps}/>
        </>
    )
}

export default DefaultTextInput