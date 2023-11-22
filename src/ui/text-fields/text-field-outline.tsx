import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Theme, ThemeProvider, createTheme, outlinedInputClasses, useTheme } from '@mui/material';
const customTheme = (outerTheme: Theme) =>
    createTheme({
        palette: {
            mode: outerTheme.palette.mode,
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '--TextField-brandBorderColor': '#fff',
                        '--TextField-brandBorderHoverColor': '#B2BAC2',
                        '--TextField-brandBorderFocusedColor': '#6F7E8C',
                        '& label.Mui-focused': {
                            color: 'var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },

            MuiInput: {
                styleOverrides: {
                    root: {
                        '&:before': {
                            borderBottom: '2px solid var(--TextField-brandBorderColor)',
                        },
                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                        },
                        '&.Mui-focused:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
        },
    });
export default function TextFieldOutline(props: any) {
    const outerTheme = useTheme();
    const config = props.config ?? { m: 1, width: '22ch' };
    return (
        <Box
            component="form"
            sx={config}
            noValidate
            autoComplete="off"
        >
            <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField className='textField'
                    id="outlined-basic"
                    size='small'
                    label={props.label}
                    value={props.value}
                    defaultValue={props.default}
                    variant="standard" 
                    onChange={props.onChange}
                    />
            </ThemeProvider>
        </Box>
    );
}