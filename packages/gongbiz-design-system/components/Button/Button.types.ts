import { DefaultTheme } from 'styled-components'
import { ColorScheme } from '../../types/theme'

export type ButtonSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type ButtonProps = {
	colorScheme?: ColorScheme
	size?: ButtonSizeType
	fullWidth?: boolean
}

export type ButtonStyleProps = {
	theme: DefaultTheme
} & ButtonProps
