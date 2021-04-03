import './App.css';
import Api from './api/api';
import HomePage from './components/homePage/HomePage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';
import List from './components/list/List';
import Rate from './components/rate/Rate';
import Recomended from './components/recomended/Recomended';
import { theme } from './theme';

import { ThemeProvider } from 'styled-components';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
	const [routs, setRouts] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				let offset = 0;
				let result = [];
				let tmpRouts = [];
				do {
					const { data } = await Api.get(
						`datastore_search?resource_id=8fb94fe2-a87c-46b6-9c0b-c2abe4fbf06f&limit=100&offset=${offset}`
					);
					result = data.result.records;
					offset += 100;
					tmpRouts = [...tmpRouts, ...result];
				} while (result.length === 100);
				tmpRouts.map((route) => ({ ...route, rate: 0, votersCounter: 0 }));
				setRouts(tmpRouts);
			} catch (e) {
				console.log(e);
			}
		})();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<>
				<BrowserRouter>
					<div className="App">
						<Header />
						<Route path="/" exact component={HomePage} />
						<Route
							path="/categories/:category/regions"
							exact
							render={(props) => (
								<List {...props} routs={routs} type="region" />
							)}
						/>
						<Route
							path="/categories/:category/regions/:region/routs"
							exact
							render={(props) => <List {...props} routs={routs} type="route" />}
						/>

						<Route
							path="/categories/:category/regions/:region/routs/:route"
							exact
							render={(props) => <Content {...props} routs={routs} />}
						/>
						<Route path="/recomended" exact component={Recomended} />
						<Footer />
					</div>
				</BrowserRouter>
			</>
		</ThemeProvider>
	);
};

export default App;
