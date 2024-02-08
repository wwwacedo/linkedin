import colors from './colors'

export default function GlobalStyle() {
	return (
		<style global jsx>{`
		* {
			font-family: 'Chakra Petch', sans-serif;
          	box-sizing: border-box;
          	padding: 0;
          	margin: 0;
        }
		body {
			background-color: ${colors.gray};
			color: ${colors.white87};
		}
	`}</style>
	)
}
