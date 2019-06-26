import * as effectContant from '../Contant/effectContant';
const initialState = {

    stateFormOffer: false,
    isShowOffers : false,
    Notification : false
}
const effectReducer = (state = initialState, action) => {
    switch (action.type) {

        case effectContant.changeStateFormOffer:
            return {
                ...state,
                stateFormOffer: !state.stateFormOffer
            }
        case effectContant.openInfoOffer :
         return {
            ...state,
            isShowOffers :true
         }
        case effectContant.closeInfoOffer :
            return {
                ...state,
                isShowOffers : false
            }
        case effectContant.changeNotification : 
            return {
                ...state,
                Notification : !state.Notification
            }        
        default:
            return state;
    }
}
export default effectReducer;