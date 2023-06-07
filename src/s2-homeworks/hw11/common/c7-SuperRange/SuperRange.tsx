import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: '160px',
                color: '#00CC22',
                height: '4px',
                borderRadius: '10px',
                '& .MuiSlider-track': {
                    border: 'none'
                },
                '& .MuiSlider-thumb': {
                    width: 20,
                    height: 20,
                    border: '1px solid #00CC22',
                    backgroundColor: '#fff',
                    '&:before': {
                        content: '""',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#00CC22',
                        zIndex: -1
                    },
                    '&:hover, &.Mui-focusVisible, &.Mui-active': {
                        boxShadow: 'none'
                    }
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B'
                }
            }}
            {...props}
        />
    )
}

export default SuperRange
