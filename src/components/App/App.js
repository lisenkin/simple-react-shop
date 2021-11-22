import React from 'react'

import './App.css'

import Header from '../Header/Header'
import Cart from '../Cart/Cart'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {
    AllItem,
} from '../pages'
import CardItemInfo from '../CardItemInfo/cardItemInfo'


const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Switch>
                    <Route exact path={["/", "/react-shop/"]} component={AllItem} />
                    <Route path="/item/:id" render={({ match }) => <CardItemInfo idItem={+match.params.id} />} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </div>
        </BrowserRouter >
    )
}
export default App