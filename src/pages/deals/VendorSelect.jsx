import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Select from 'react-select'
import ACTIONS from '../../modules/actions'

class VendorSelect extends Component {

    componentDidMount() {
        const { fetchStatesAndVendors } = this.props
        fetchStatesAndVendors()
    }

    render() {

        const { states, 
            vendors, 
            selectedState, 
            selectedVendor, 
            showExpiredDeals,
            selectState,
            selectVendor,
            toggleShowExpiredDeals,
        } = this.props
        
        return (
            <div>
                <Select
                    value={selectedState}
                    options={states}
                    onChange={selectState}
                    className='selectControl-states'
                />
                <Select
                    value={selectedVendor}
                    options={vendors}
                    onChange={selectVendor}
                    className='selectControl-vendors'
                />
                <input type="checkbox" name="showExpiredDeals" value={showExpiredDeals} onChange={toggleShowExpiredDeals} className='checkbox'></input>
                <p className='checkbox'>Show Expired Deals</p>
                <p className='applyFiltersButton'>Apply Filters</p>
            </div>
        )
    }
}

VendorSelect.propTypes = {
    selectedState: PropTypes.any,
    selectedVendor: PropTypes.any,
    states: PropTypes.array,
    vendors: PropTypes.array,
    showExpiredDeals: PropTypes.bool,
}

const mapStateToProps = state => ({
    selectedState: state.selectedState,
    selectedVendor: state.selectedVendor,
    states: state.states,
    vendors: state.vendors,
    showExpiredDeals: state.showExpiredDeals,
})

const mapDispatchToProps = dispatch => ({
    selectState: state => dispatch(ACTIONS.selectState(state)),
    selectVendor: vendor => dispatch(ACTIONS.selectVendor(vendor)),
    fetchStatesAndVendors: () => dispatch(ACTIONS.fetchStatesAndVendors()),
    toggleShowExpiredDeals: () => dispatch(ACTIONS.toggleShowExpiredDeals()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VendorSelect)