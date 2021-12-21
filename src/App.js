import React, {useReducer, useContext, createContext} from 'react';
import Search from './Search';
import Map from './Map';
import Predict from './Predict';
import PredictForm from './PredictForm';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

import {initialState, reducer} from './reducer/useReducer';

const usercontext = createContext();

export default function App () {

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			<BrowserRouter>
				<usercontext.Provider value = {{state, dispatch}}>
					<Routes>
						<Route path = '/' exact element = {<Search />} />
						<Route path = '/map' element = {<Map val = {state} />} />
						<Route path = '/predictForm' element = {<PredictForm />} />
						<Route path = '/predict' element = {<Predict />} />
					</Routes>
				</usercontext.Provider>
			</BrowserRouter>
		</>
	)
}
export {usercontext};