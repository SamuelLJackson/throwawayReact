import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Select from 'react-select'

import {
    selectState,
    selectVendor,
} from '../modules/actions'

const options = [
    {value: "one", label: 'one'},
    {value: 'two', label: 'two'},
]

class VendorSelect extends Component {

    state ={
        selectedOption: null,
    }



    render() {
        return (
            <div>
                <label>State</label>
                <Select
                    value={options[0]}
                    onChange
                    options={options}
                />
            </div>
        )
    }
}

VendorSelect.propTypes = {
    
}