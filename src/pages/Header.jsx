import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {connect } from 'react-redux'
import PropTypes from 'prop-types'
import ACTIONS from '../modules/actions'
/*
class NavigationButton = withRouter(({history, ...props}) => (
    <h4
        onClick={() => { history.push(props.destination)}}
        className={`navigationButton ${props.extraClass}`}
        id={props.id}
    >
        {props.children}
    </h4>
))
*/
class NavigationButton extends Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
    }

    handleNavigation() {
        this.props.history.push(this.props.destination)
        this.props.updateSelectedMainView(this.props.destination)
    }

    render() {
        var className = 'navigationButton'
        if (this.props.destination == this.props.selectedMainView){
            className = 'selectedNavigationButton'
        }
        return (
            <h4
            onClick={() => this.handleNavigation()}
            className={className}
            >
                {this.props.children}
            </h4>
        )
    }
}

NavigationButton.propTypes = {
    selectedState: PropTypes.any,
    selectedVendor: PropTypes.any,
    states: PropTypes.array,
    vendors: PropTypes.array,
    showExpiredDeals: PropTypes.bool,
}

const mapStateToProps = state => ({
    selectedMainView: state.selectedMainView,
})

const mapDispatchToProps = dispatch => ({
    updateSelectedMainView: selection => dispatch(ACTIONS.updateSelectedMainView(selection)),
})
    
const NavigationButtonWithRouter = withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationButton))

class Header extends Component {

    constructor() {
        super();
        this.state = {
            selected: 'deals'
        }
    }
    render () {
        return (
            <div className='header'>
                <h3>Pool Buys</h3>
                <NavigationButtonWithRouter destination='/deals' extraClass='dealsNavigationButton'>Deals</NavigationButtonWithRouter>
                <NavigationButtonWithRouter destination='/summaries'>Summaries</NavigationButtonWithRouter>
            </div>
        )
    }
}

export default Header
