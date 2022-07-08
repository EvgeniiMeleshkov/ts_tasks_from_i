import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((o, index) => {
        return (
            <option value={o} key={index}>{o}</option>
        )
    }) : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e);
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select style={{
            fontWeight: 'bold',
            fontSize: 'large',
            width: '6rem',
            textAlign: 'center',
            color: '#03203e',
            backgroundColor: '#6495ed73',
            border: 'none',
            outline: 'none',
            borderRadius: '5px 5px 0px 0px'
        }} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
