import { CSSObject } from 'styled-components'
import { ButtonStyleProps } from '../Button.types'

export const setDefaultButtonStyle = (props: ButtonStyleProps): CSSObject => {
	return {
		border: 'none',
		fontSize: '1rem',
		cursor: 'pointer',
	}
}

export const setColorButtonStyle = ({ theme, colorScheme }: ButtonStyleProps): CSSObject => {
	console.log({
		theme,
		colorScheme,
	})
	if (!colorScheme) {
		return {}
	}

	return {
		backgroundColor: theme.color[colorScheme][500],
		color: theme.color.gray[0],

		':hover': {
			transition: 'all 0.`se-in-out',
			backgroundColor: theme.color[colorScheme][600],
		},
		':active': {
			transition: 'all 0.2s ease-in-out',
			backgroundColor: theme.color[colorScheme][800],
		},
	}
}

export const setSizeButtonStyle = (props: ButtonStyleProps): CSSObject => {
	switch (props.size) {
		case 'xs': {
			return {
				fontSize: props.theme.fontSize[props.size],
				padding: '0.25rem 0.5rem',
				borderRadius: '0.25rem',
			}
		}
		case 'sm': {
			return {
				fontSize: props.theme.fontSize[props.size],
				padding: '0.375rem 0.75rem',
				borderRadius: '0.25rem',
			}
		}
		case 'md': {
			return {
				fontSize: props.theme.fontSize[props.size],
				padding: '0.5rem 1rem',
				borderRadius: '0.25rem',
			}
		}
		case 'lg': {
			return {
				fontSize: props.theme.fontSize[props.size],
				padding: '0.625rem 1.25rem',
				borderRadius: '0.25rem',
			}
		}
		case 'xl': {
			return {
				fontSize: props.theme.fontSize[props.size],
				padding: '0.75rem 1.5rem',
				borderRadius: '0.25rem',
			}
		}
		default: {
			return {}
		}
	}
}

export const setFullWidthButtonStyle = ({ fullWidth }: ButtonStyleProps): CSSObject =>
	fullWidth ? { width: '100%' } : {}
