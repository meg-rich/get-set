export interface AppTheme {
    colors: {
        brandBlue: string
        brandRed: string
        brandOrange: string
        brandYellow: string
        white: string
        lightGray: string
        mediumGray: string
        mediumGray2: string
        darkGray: string
    },
    spacing: {
        xs: string
        sm: string
        default: string
        md: string
        lg: string
    }
}

export const theme: AppTheme = {
    colors: {
        brandBlue: '#2d4059',
        brandRed:  '#ea5455',
        brandOrange: '#f07b3f',
        brandYellow: '#ffd460',
        white: '#ffffff',
        lightGray: '#dadfe1',
        mediumGray: '#bebebe',
        mediumGray2: '#a9a9a9',
        darkGray: '#939393',
    },
    spacing: {
        xs: '8px',
        sm: '12px',
        default: '16px',
        md: '18px',
        lg: '24px',
    },
}