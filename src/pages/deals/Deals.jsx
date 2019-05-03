import React, { Component } from 'react'
import VendorSelect from './VendorSelect'
import DemandData from './DemandData'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Deals extends Component {

    render() {
        if (this.props.showDemandData) {
            return (
                <div className="dealsContainer">
                    <VendorSelect />
                    <DemandData />
                </div>
            )
        } else {
            return (
                <div className="dealsContainer">
                    <VendorSelect />
                </div>                
            )
        }
    }
}

Deals.propTypes = {
    showDemandData: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    showDemandData: state.showDemandData,
})


export default connect(mapStateToProps)(Deals)