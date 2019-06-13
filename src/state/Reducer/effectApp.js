import * as effectContant from '../Contant/effectContant';


const initialState = {

    backGroundBodyAndFormOffer: false

}
const effectReducer = (state = initialState, action) => {
    switch (action.type) {

        case effectContant.turnOnOrOffBackgroundBodyAndFormOffer:
            return {
                ...state,
                backGroundBodyAndFormOffer: !state.backGroundBodyAndFormOffer
            }
        default:
            return state
    }
}
export default effectReducer;