import * as appContant from '../Contant/appContant';
const initialState = {
    toggleCollapsedOfSider: true,
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case appContant.changeToggleCollapsed:
            return {
                ...state,
                toggleCollapsedOfSider: !state.toggleCollapsedOfSider
            }
        case appContant.defaultSider : 
            return {

                ...state,
                toggleCollapsedOfSider : true
            }    
        default:
            return state
    }
}
export default appReducer;