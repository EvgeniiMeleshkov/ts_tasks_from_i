import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + '-' + i}>
            <input
                style={{accentColor: '#38827d'}}
                type={'radio'}
                name={name}
                checked={value === o}
                value={o}
                onChange={onChangeCallback}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (
        <div style={{
            width: '6rem',
            fontWeight: 'bold',
            fontSize: 'large',
            color: '#03203e',
            textAlign: 'center',
            backgroundColor: '#6495ed73',
            border: 'none',
            outline: 'none',
            borderRadius: '0px 0px 5px 5px'
        }}>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
