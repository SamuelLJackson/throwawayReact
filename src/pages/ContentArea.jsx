import React, { Component } from 'react'
import Deals from './deals/Deals'
import Summaries from './summaries/Summaries'
import { Switch, Route, Redirect } from 'react-router-dom'

class ContentArea extends Component {
    render() {
        return (
            <Switch>
                <Route path="/deals" component={Deals} />
                <Route path="/summaries" component={Summaries} />
                <Redirect from="/" to="/deals" />
            </Switch>
        )
    }
}

export default ContentArea