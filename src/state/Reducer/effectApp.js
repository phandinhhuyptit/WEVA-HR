import * as effectContant from '../Contant/effectContant';


const initialState = {

    backGroundBodyAndFormOffer: false,
    listOfferAndInfoOffer : false
    
}
const effectReducer = (state = initialState, action) => {
    switch (action.type) {

        case effectContant.turnOnOrOffBackgroundBodyAndFormOffer:
            return {
                ...state,
                backGroundBodyAndFormOffer: !state.backGroundBodyAndFormOffer
            }
        case effectContant.openInfoOffer :
         return {
            ...state,
            listOfferAndInfoOffer :true
         }
        case effectContant.closeInfoOffer :
            return {
                ...state,
                listOfferAndInfoOffer : false
            }          
        default:
            return state;
    }
}
export default effectReducer;