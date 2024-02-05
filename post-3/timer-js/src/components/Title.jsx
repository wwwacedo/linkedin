const TITLE = {
	fontSize: '2.5rem',
	lineHeight: '1.1'
}

export default function Title({children}) {
	return (
		<h1 style={TITLE}>{children}</h1>
	)
}
