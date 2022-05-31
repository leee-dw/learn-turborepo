import { ThemeProvider } from 'styled-components'
import { Button, theme } from 'gongbiz-design-system'

export default function Web() {
	return (
		<div>
			<h1>Web</h1>
			<ThemeProvider theme={theme}>
				<Button colorScheme="red">asdfasdf</Button>
				<Button colorScheme="blue">asdfasdf</Button>
				<Button colorScheme="green">asdfasdf</Button>
				<Button colorScheme="yellow">asdfasdf</Button>
			</ThemeProvider>
		</div>
	)
}
