import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {Router, browserHistory} from 'react-router'
import routes from './routes/routes'

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./components/reducer";
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware';

import { loadStage, saveState } from './components/localStorage'
import { ConnectedRouter,routerMiddleware } from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';
import App from './pages/App';

// const history = createHistory();
// const middleware = routerMiddleware(browserHistory);

const router = routerMiddleware(browserHistory)

const persistedState = loadStage();

const store = createStore(reducer, persistedState ,applyMiddleware(thunk))

store.subscribe(() => {
  console.log('state ', store.getState())
  
  saveState({
    login: store.getState().login,
    currentConference: store.getState().currentConference,
    conferenceSelectedBtn: store.getState().conferenceSelectedBtn
  });
  
})

ReactDOM.render(
  <Provider store={store} >
    <Router 
      history={browserHistory}
      routes={routes}
    />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();

// ReactDOM.render(
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       <App>{ routes }</App>
//     </ConnectedRouter>
//   </Provider>
// )