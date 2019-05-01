const Types = {
    SELECT_STATE: 'SELECT_STATE',
    SELECT_VENDOR: 'SELECT_VENDOR',
}

const selectState = state => ({
    type: Types.SELECT_STATE,
    payload: state
})

const selectVendor = vendor => ({
    type: Types.SELECT_VENDOR,
    payload: vendor
})

export default {
    selectState,
    selectVendor,
    Types,
}
