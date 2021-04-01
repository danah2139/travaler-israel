import './App.css';
import Api from './api/api';
import HomePage from './components/homePage/HomePage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';
import CitiesList from './components/citiesList/CitiesList';
import Rate from './components/rate/Rate';
import Recomended from './components/recomended/Recomended';
import { theme } from './theme';

import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
	useEffect(() => {
		(async () => {
			const { data } = await Api.get();
			console.log(data.result.records);
		})();
	});
	return (
		<ThemeProvider theme={theme}>
			<>
				<BrowserRouter>
					<div className="App">
						<Header />
						<Route path="/" exact component={HomePage} />
						<Route path="/cities" exact component={CitiesList} />
						<Route
							path="/cycling/cities/:id/content"
							exact
							component={Content}
						/>
						<Route path="/cities/:id/walking" exact component={Content} />
						<Route path="/cities/:id/jeep_route" exact component={Content} />
						<Route path="/cities/:id/vehicle_route" exact component={Content} />
						<Route path="/cities/:id/recomended" exact component={Recomended} />
						<Footer />
					</div>
				</BrowserRouter>
			</>
		</ThemeProvider>
	);
};

export default App;
