import React from 'react'

// -------------- CREATE THE STORE -------------- \\
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/root';
import { composeWithDevTools } from 'redux-devtools-extension';

// default state
// ship to address(line 1, line 2, city, state, zip code) and phone number.
const state = {
    test: [],
    cart: {
        name: '',
        pw: '',
        email: '',
        address: {
            line1: '',
            line2: '',
            city: '',
            state: '',
            zip: '',
        },
        phoneNumber: '',
    },
}

const store = createStore(
    rootReducer,
    state,
    composeWithDevTools(applyMiddleware(thunk))
);

// -------------- MAIN APP LAYOUT -------------- \\
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';

const App = () => (
    <div>
        <Header />
        <Body />
    </div>
)

// -------------- PROVIDER AND ROUTER -------------- \\
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Root = () => (
    <Provider store={store}>
        <Router>
            <Route path="/:filter?" component={App} />
        </Router>
    </Provider>
)

// store.dispatch({ type: 'RUN_TEST', payload: 'thing'})

// -------------- RENDER -------------- \\
import { render } from 'react-dom'

render(
    <Root />,
    document.getElementById('app')
)
