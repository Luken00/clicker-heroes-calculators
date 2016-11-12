import 'bootstrap/dist/css/bootstrap.min.css';
import './css/starter-template.css';

import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';

import reducer from './reducers';

import Main from './containers/Main';

const store = createStore(reducer, {}, applyMiddleware(createLogger()));

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('app')
);
