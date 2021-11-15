import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App/App'
import ErrorPage from './components/error/error-page'
import { Provider } from 'react-redux'
import ShopServices from './utils/data'
import {ShopServicesContext} from './components/hooks/withShopContext'
import store from './store'

const shopServices = new ShopServices()


ReactDOM.render(
    <Provider store={store}>
        <ErrorPage>
            <ShopServicesContext.Provider value={shopServices}>
                <App />
            </ShopServicesContext.Provider>
        </ErrorPage>
    </Provider>,
    document.getElementById('root'))