import { CSSObject } from 'styled-components'
import { ButtonStyleProps } from '../Button.types'
import { setColorButtonStyle, setDefaultButtonStyle, setFullWidthButtonStyle, setSizeButtonStyle } from './setStyles'

const goSetStyles =
	<Props extends Record<string, any>>(...funcs: ((props: Props) => CSSObject | null)[]) =>
	(props: Props) =>
		funcs.reduce((acc, func) => {
			const style = func(props)
			return style ? Object.assign(acc, style) : acc
		}, {})

const setButtonStyle = goSetStyles<ButtonStyleProps>(
	setDefaultButtonStyle,
	setColorButtonStyle,
	setSizeButtonStyle,
	setFullWidthButtonStyle
)

export default setButtonStyle
