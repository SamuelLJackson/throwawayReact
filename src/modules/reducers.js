import ACTIONS from './actions'
import _ from 'lodash'

const defaultState = {
    selectedState: null,
    selectedVendor: null,
    states: [],
    vendorsRaw: [],
    vendors: [],
    showExpiredDeals: false,
    showDemandData: false,
    selectedMainView: window.location.href.replace(window.location.origin, ''),
}

const dealsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ACTIONS.Types.SELECT_STATE: {
            console.log(action)
            let newState = _.cloneDeep(state)
            newState.selectedState = action.payload
            
            newState.vendors = state.vendorsRaw
                                .filter(vendor => {
                                    return vendor.stateKey === action.payload.value
                                })
                                .map(vendor => {
                return { value: vendor.tradingPartnerKey, label: vendor.tradingPartnerName }
            })
            newState.selectedVendor = null
            newState.showDemandData = false
            return newState
        }

        case ACTIONS.Types.SELECT_VENDOR: {
            console.log(action)
            let newState = _.cloneDeep(state)
            newState.selectedVendor = action.payload
            return newState
        }

        case ACTIONS.Types.RECEIVE_STATES: {
            console.log(action) 
            let newState = _.cloneDeep(state)
            newState.states = action.payload.map(state => {
                return {value: state.stateKey, label: state.name}
            })
            return newState            
        }

        case ACTIONS.Types.RECEIVE_VENDORS: {
            console.log(action)
            let newState = _.cloneDeep(state)
            newState.vendorsRaw = action.payload
            return newState
        }

        case ACTIONS.Types.TOGGLE_SHOW_EXPIRED_DEALS: {
            console.log(action)
            let newState = _.cloneDeep(state)
            newState.showExpiredDeals = !state.showExpiredDeals
            return newState
        }

        case ACTIONS.Types.SHOW_DEMAND_DATA: {
            console.log(action)
            let newState = _.cloneDeep(state)
            newState.showDemandData = true
            return newState
        }

        case ACTIONS.Types.HIDE_DEMAND_DATA: {
            console.log(action)
            let newState = _.cloneDeep(state)
            newState.showDemandData = false
            return newState
        }

        case ACTIONS.Types.UPDATE_SELECTED_MAIN_VIEW: {
            console.log(action)
            let newState = _.cloneDeep(state)
            newState.selectedMainView = action.payload
            return newState
        }

        case ACTIONS.Types.TOGGLE_SHOW_DEMAND_DATA: {
            console.log(action)
            let newState = _.cloneDeep(state)
            newState.showDemandData = action.payload
            return newState
        }

        default:
            return state
    }
}

export default dealsReducer
