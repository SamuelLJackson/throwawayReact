import ACTIONS from './actions'

const defaultState = {
    selectedState: null,
    selectedVendor: null,
}

const dealsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ACTIONS.Types.SELECT_STATE: {
            console.log(action)
            break
        }

        case ACTIONS.Types.SELECT_VENDOR: {
            console.log(action)
            break
        }

        default:
            return state
    }
}

export default dealsReducer
