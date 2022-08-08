export const oblivionLoadingStyle = {
    width: 200,
    '& .MuiSlider-track': {
        height: '10px',
        borderRadius: '5px',
        color: 'rgba(196,37,37,0.82)',
        boxShadow: 'rgba(9, 29, 59, 0.47) 3px 1px 3px'
    },
    '& .MuiSlider-rail': {
        height: '10px',
        borderRadius: '2px',
        border: 'solid gray 1px',
        color: 'rgba(243,224,168,0.81)',
        boxShadow: 'rgba(9, 29, 59, 0.47) 3px 1px 3px'
    },
    '& .MuiSlider-thumb': {
        shadows: 'none',
        height: '13px',
        borderRadius: '0',
        width: '7px',
        opacity: '100%',
        color: 'gold',
        border: 'solid gray 1px',
        onfocus: 'none'
    }
}