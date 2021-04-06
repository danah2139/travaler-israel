import { GlobalStyles } from './global';
import Api from './api/api';
import HomePage from './components/homePage/HomePage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';
import List from './components/list/List';
import Recomended from './components/recomended/Recomended';
import { theme } from './theme';

import { ThemeProvider } from 'styled-components';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RegionsSelector from './components/regionsSelector/RegionsSelector';

const App = () => {
	const [routs, setRouts] = useState([]);
	const [starsSelected, setSelectStar] = useState(0);
	//const [routeSelected, setRouteSelected] = useState('');

	const handleStarSelected = (routeName, i) => {
		console.log(routeName);
		console.log(routs);
		setSelectStar(i + 1);
		//console.log(starsSelected);
		const result = routs.map((route) => {
			if (route.Name.replaceAll(' ', '') === routeName) {
				console.log(starsSelected);
				return {
					...route,
					VotersCounter: route.VotersCounter + 1,
					Rate: starsSelected / route.VotersCounter,
				};
			} else {
				return route;
			}
		});
		setRouts(result);
	};

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
				tmpRouts = tmpRouts.map((route) => ({
					...route,
					Rate: 0,
					VotersCounter: 0,
				}));
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
					<GlobalStyles />
					<Header />
					<Switch>
						<Route path="/" exact component={HomePage} />
						{/* <Route
							path="/categories/:category/regions/:region/routs"
							exact
							render={(props) => <List {...props} routs={routs} />}
						/> */}

						<Route path="/categories/:category/routs" exact>
							<RegionsSelector routs={routs} />
						</Route>
						{/* v5 routing ->  */}
						<Route exact path="/categories/:category/routs/:route">
							<Content handleStarSelected={handleStarSelected} routs={routs} />
						</Route>
						<Route path="/recomended" exact component={Recomended} />
					</Switch>
					<Footer />
				</BrowserRouter>
			</>
		</ThemeProvider>
	);
};

export default App;
