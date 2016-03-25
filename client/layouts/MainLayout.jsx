import React from 'react';
import AccountsUI from '../AccountsUI.jsx';

// const - variable that doesn't change (es16)
// passing in {content}. Routes has access to MainLayout component through export & import
// content passed in is the component eg. <App /> from routes
export const MainLayout = ({content}) => (
	<div className="main-layout">
		<header>
			<h2>My Resolutions</h2>
			<nav>
				<a href="/">Resolutions</a>
				<a href="/about">About</a>
				<AccountsUI />
			</nav>
		</header>
		<main>
			{content}
		</main>
	</div>
)