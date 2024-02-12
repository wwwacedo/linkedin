import React from 'react'
import colors from '../../theme/colors.js'


export default function Title({ children }) {
	return (
		<>
			<h1 className="title">{ children }</h1>

			<style jsx>{`
				.title {
					color: ${colors.white};
					text-align: center;
					font-size: 3rem;
					margin-bottom: .5rem;
				}
		`}</style>
		</>
	)
}
