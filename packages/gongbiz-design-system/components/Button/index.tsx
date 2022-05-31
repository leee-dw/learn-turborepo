import styled, { css, ThemeProvider } from 'styled-components'
import { ButtonProps } from './Button.types'
import setButtonStyle from './styles'

const defaultProps: Pick<Required<ButtonProps>, 'colorScheme' | 'size'> = {
	colorScheme: 'blue',
	size: 'md',
}

const Button = styled.button<ButtonProps>`
	${(props) =>
		setButtonStyle({
			...defaultProps,
			...props,
		})}
`
export default Button
