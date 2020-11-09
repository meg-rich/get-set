export interface AppTheme {
    colors: {
        brandDarkBlue: string
        brandBlue: string
        brandRed: string
        brandOrange: string
        brandYellow: string
        white: string
        lightGray: string
        mediumGray: string
        darkGray: string
        darkGray2: string
    }
    font: {
        size: {
            xs: string
            sm: string
            default: string
            md: string
            lg: string
        }
        weights: {
            normal: string
            bold: string
        }
    }
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
        brandDarkBlue: '#16131a',
        brandBlue: '#2d4059',
        brandRed: '#ea5455',
        brandOrange: '#f07b3f',
        brandYellow: '#ffd460',
        white: '#ffffff',
        lightGray: '#dadfe1',
        mediumGray: '#939393',
        darkGray: '#5e5d5d',
        darkGray2: '#2e2d2d',
    },
    font: {
        size: {
            xs: '8px',
            sm: '12px',
            default: '16px',
            md: '18px',
            lg: '24px',
        },
        weights: {
            normal: '400',
            bold: '700',
        },
    },
    spacing: {
        xs: '8px',
        sm: '12px',
        default: '16px',
        md: '18px',
        lg: '24px',
    },
}
