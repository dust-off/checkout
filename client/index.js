import React from 'react'

// -------------- CREATE THE STORE -------------- \\
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/root';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    rootReducer,
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

// -------------- RENDER -------------- \\
import { render } from 'react-dom'

render(
    <Root />,
    document.getElementById('app')
)
