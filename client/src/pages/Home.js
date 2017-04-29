import React, { Component } from 'react'
import { flat as style } from 'react-styling'
import { Title, preload, redirect } from 'react-isomorphic-render'

import husky from '../../assets/images/husky.jpg'

// Let's always redirect to the users page
@preload(({ dispatch }) => dispatch(redirect('/users')))
export default class Page extends Component
{
	render()
	{
		const markup =
		(
			<section className="content">
				<Title>Home</Title>

				<h1 style={ styles.header }>
					Husky
				</h1>

				<img src={ husky } style={ styles.image }/>
			</section>
		)

		return markup
	}
}

const styles = style
`
	header
		text-align: center

	image
		display: block

		margin-left  : auto
		margin-right : auto

		border-width : 1px
		border-style : solid
		border-color : #7f7f7f

		border-radius : 0.5em
`