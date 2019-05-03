const Types = {
    SELECT_STATE: 'SELECT_STATE',
    SELECT_VENDOR: 'SELECT_VENDOR',
    RECEIVE_STATES: 'RECEIVE_STATES',
    RECEIVE_VENDORS: 'RECEIVE_VENDORS',
    TOGGLE_SHOW_EXPIRED_DEALS: 'TOGGLE_SHOW_EXPIRED_DEALS',
    UPDATE_SELECTED_MAIN_VIEW: 'UPDATE_SELECTED_MAIN_VIEW',
    TOGGLE_SHOW_DEMAND_DATA: 'TOGGLE_SHOW_DEMAND_DATA',
}

const selectState = state => ({
    type: Types.SELECT_STATE,
    payload: state
})

const selectVendor = vendor => ({
    type: Types.SELECT_VENDOR,
    payload: vendor
})

const receiveStates = states => ({
    type: Types.RECEIVE_STATES,
    payload: states
})

const receiveVendors = vendors => ({
    type: Types.RECEIVE_VENDORS,
    payload: vendors,
})

const receiveStatesAndVendors = (statesAndVendors) => {
    return dispatch => {
        dispatch(receiveStates(statesAndVendors.states))
        dispatch(receiveVendors(statesAndVendors.vendors))
    }
}

const fetchStatesAndVendors = () => {
    return dispatch => {
        return fetch('states_vendors.json')
            .then(response => response.json())
            .then(json => dispatch(receiveStatesAndVendors(json)))
    }
}

const toggleShowExpiredDeals = () => ({
    type: Types.TOGGLE_SHOW_EXPIRED_DEALS,
    payload: null,
})

const showDemandData = () => ({
    type: Types.SHOW_DEMAND_DATA,
    payload:null,
})

const updateSelectedMainView = (selection) => ({
    type: Types.UPDATE_SELECTED_MAIN_VIEW,
    payload: selection,
})

const toggleShowDemandData = (showDemandData) => ({
    type: Types.SHOW_DEMAND_DATA,
    payload: showDemandData,
})

const shouldShowDemandData = (state) => {
    if (state.selectedState != null && state.selectedVendor != null && !state.showDemandData ) {
        return true
    } else {
        return false
    }
}

const hideDemandData = () => {
    return dispatch => {
        dispatch(toggleShowDemandData(false))
    }
}

const showDemandDataIfNeeded = () => {
    return (dispatch, getState) => {
        if (shouldShowDemandData(getState())) {
            return dispatch(toggleShowDemandData(true))
        }
    }
}

export default {
    selectState,
    selectVendor,
    fetchStatesAndVendors,
    toggleShowExpiredDeals,
    showDemandData,
    hideDemandData,
    updateSelectedMainView,
    toggleShowDemandData,
    showDemandDataIfNeeded,
    Types,
}
